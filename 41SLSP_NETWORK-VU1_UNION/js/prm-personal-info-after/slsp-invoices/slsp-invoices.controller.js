//-----------------------------------------------

export class slspInvoicesController {

    constructor($scope, $element, $rootScope, $window, $http, $timeout, $compile, $location, $translate, $interval) {
        this.$scope = $scope;
        this.$element = $element;
        this.$rootScope = $rootScope;
        this.$window = $window;
        this.$http = $http;
        this.$timeout = $timeout;
        this.$compile = $compile;
        this.$location = $location;
        this.$translate = $translate;
        this.$interval = $interval;
        this.invoices = [];
        this.isLoading = false;
        this.hasLoaded = false; // a first fetch has produced a result of any kind
        this.errorMessage = null; // English failure notice shown in the tab
        this.canRetry = false; // whether to offer a "Try again" button
        this.refreshInterval = null; // Store interval reference for cleanup
        this.deregisterTranslateWatch = null; // $rootScope listener, needs manual cleanup
        this.tabSizeObserver = null; // ResizeObserver, needs manual cleanup
        this.isDestroyed = false;

        // Translation object for tab name
        this.tabLabels = {
            'de': 'Rechnungen',
            'en': 'Invoices',
            'fr': 'Factures',
            'it': 'Fatture'
        };
    }

    getJwt() {
        let raw;
        try {
            raw = sessionStorage && sessionStorage.getItem('primoExploreJwt');
        } catch (e) {
            // sessionStorage throws on access when site data is blocked.
            console.error('Invoice JWT unavailable: sessionStorage is not accessible', e);
            return null;
        }
        if (!raw) return null;
        // Primo stores the JWT JSON-quoted ("eyJ..."). Tolerate both quoted and unquoted.
        return raw.replace(/^"|"$/g, '');
    }

    // True when Boss reports "Invalid userName": the patron is unknown to the invoicing
    // system and has no invoices. Sent as HTTP 400 or 500, with the reason in
    // errors[].errorMessage and errors[].col_messageParams.
    isUnknownAccountError(response) {
        const body = response && response.data;
        if (!body) return false;

        const messages = [];
        const collect = value => {
            if (typeof value === 'string') messages.push(value);
        };

        collect(body);
        collect(body.errorMessage);
        if (Array.isArray(body.errors)) {
            body.errors.forEach(err => {
                if (!err) return;
                collect(err.errorMessage);
                if (Array.isArray(err.col_messageParams)) err.col_messageParams.forEach(collect);
            });
        }

        return messages.some(message => /invalid\s*user\s*name/i.test(message));
    }

    // Ends a fetch and clears the spinner. Not called while a retry is still pending.
    finishLoading() {
        this.isLoading = false;
        this.hasLoaded = true;
    }

    // Shows an English failure notice in the tab, with an optional "Try again" button.
    setError(message, canRetry) {
        this.invoices = [];
        this.errorMessage = message;
        this.canRetry = canRetry;
        this.finishLoading();
    }

    clearError() {
        this.errorMessage = null;
        this.canRetry = false;
    }

    // "Try again" button: clears the notice and refetches with the spinner showing.
    retryFetch() {
        this.clearError();
        this.hasLoaded = false;
        this.fetchInvoices();
    }

    // Empty result, logged and rendered like a successful load of zero invoices.
    setNoInvoices() {
        this.invoices = [];
        this.clearError();
        this.finishLoading();
        console.log('Invoices loaded:', this.invoices.length,
                    '(no invoices have been issued for this account yet)');
    }

    fetchInvoices(retryCount = 0) {
        const apiUrl = 'https://invproxy.swisscovery.network/jrpc/slsp/getInvoices';
        const jwt = this.getJwt();
        if (!jwt) {
            console.error('Invoice fetch aborted: no JWT available in sessionStorage');
            // Not retryable: the patron has to sign in again.
            this.setError('Please sign in again to view your invoices.', false);
            return;
        }

        this.isLoading = !this.hasLoaded;

        const config = {
            headers: {
                'token': jwt
            },
            withCredentials: false,
            cache: false
        };

        this.$http.get(apiUrl, config)
            .then(response => {

                if (this.isUnknownAccountError(response)) {
                    this.setNoInvoices();
                    return;
                }

                // Only an array is a valid invoice list.
                if (response && response.data && Array.isArray(response.data.data)) {

                    this.invoices = response.data.data;

                    this.invoices.forEach(invoice => {
                        if (invoice.documentLink) {
                            invoice.documentLink = invoice.documentLink.replace(
                                'https://inv-slsp.bossonline.ch:21143',
                                'https://invproxy.swisscovery.network'
                            );
                        }
                    });

                    this.clearError();
                    this.finishLoading();
                    console.log('Invoices loaded:', this.invoices.length);

                    this.$timeout(() => {
                        this.$scope.$apply();
                    });
                } else {
                    console.error('Invalid response format received');
                    this.setError('Invoices are temporarily unavailable.', true);
                }
            })
            .catch(error => {
                if (this.isUnknownAccountError(error)) {
                    this.setNoInvoices();
                    this.$timeout(() => {
                        this.$scope.$apply();
                    });
                    return;
                }

                // A request failure always has a numeric status; anything else was
                // thrown while handling the response.
                const status = error && error.status;
                if (typeof status !== 'number') {
                    console.error('Invoice processing error (not a request failure):', error);
                } else {
                    // xhrStatus explains a status of -1: 'abort', 'error' or 'timeout'.
                    console.error('Invoice fetch error:', {
                        status: status,
                        statusText: error.statusText,
                        xhrStatus: error.xhrStatus,
                        url: error.config && error.config.url
                    });
                }

                if (status === 500 && retryCount < 2) {
                    console.log(`Invoice fetch returned 500 — retrying (attempt ${retryCount + 1} of 2) in 1 second...`);
                    this.$timeout(() => {
                        this.fetchInvoices(retryCount + 1);
                    }, 1000);
                    return;
                }

                // Keep any invoices already on screen; notify only when there are none.
                if (Array.isArray(this.invoices) && this.invoices.length) {
                    this.finishLoading();
                } else {
                    this.setError('Invoices are temporarily unavailable.', true);
                }

                this.$timeout(() => {
                    this.$scope.$apply();
                });
            });
    }

    fetchPdf(documentLink, event, retryCount = 0, existingWindow = null) {

        // Check if existing window is still valid and open
        let newWindow;
        let isReusingWindow = false;

        if (existingWindow && !existingWindow.closed) {
            // Reuse the existing window (loading spinner already visible)
            newWindow = existingWindow;
            isReusingWindow = true;
        } else {
            newWindow = this.$window.open('', '_blank');
        }

        // Write loading HTML to new windows only (not when reusing)
        if (!isReusingWindow && newWindow && newWindow.document) {
            newWindow.document.open();
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Loading PDF...</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            font-family: Arial, sans-serif;
                            background-color: #f5f5f5;
                        }
                        .loader-container {
                            text-align: center;
                        }
                        .spinner {
                            border: 4px solid #f3f3f3;
                            border-top: 4px solid #3498db;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            animation: spin 1s linear infinite;
                            margin: 0 auto 20px;
                        }
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        .loading-text {
                            color: #555;
                            font-size: 18px;
                        }
                    </style>
                </head>
                <body>
                    <div class="loader-container">
                        <div class="spinner"></div>
                        <div class="loading-text">Loading PDF...</div>
                    </div>
                </body>
                </html>
            `);
            newWindow.document.close();
        }

        const jwt = this.getJwt();
        if (!jwt) {
            console.error('PDF fetch aborted: no JWT available in sessionStorage');
            if (newWindow && !newWindow.closed) {
                newWindow.close();
            }
            this.$timeout(() => {
                this.$window.alert('Authentication unavailable. Please reload the page and try again.');
            }, 0);
            return;
        }
        const documentId = documentLink.split('/').pop();

        const config = {
            headers: {
                'token': jwt
            },
            responseType: 'arraybuffer',
            cache: false
        };

        return this.$http.get(documentLink, config)
            .then(response => {

                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                });

                // Create blob URL and redirect the opened window to it
                const fileURL = this.$window.URL.createObjectURL(blob);

                if (newWindow && !newWindow.closed) {
                    newWindow.location.href = fileURL;
                }

                // Cleanup after a longer delay to ensure PDF has fully loaded
                // PDFs can take time to render, especially large ones
                this.$timeout(() => {
                    this.$window.URL.revokeObjectURL(fileURL);
                }, 30000);
            })
            .catch(error => {
                // error.data is an ArrayBuffer here, so this Blob branch never runs.
                if (error.data instanceof Blob) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        console.error('PDF fetch error (blob response):', {
                            status: error.status,
                            statusText: error.statusText
                        });
                    };
                    reader.readAsText(error.data);
                } else {
                    console.error('PDF fetch error:', {
                        status: error.status,
                        statusText: error.statusText
                    });
                }

                // Retry logic for 500 errors (up to 2 retries)
                if (error.status === 500 && retryCount < 2) {
                    console.log(`PDF fetch returned 500 — retrying (attempt ${retryCount + 1} of 2) in 1 second...`);
                    // Keep the window open and retry with the same window
                    this.$timeout(() => {
                        this.fetchPdf(documentLink, event, retryCount + 1, newWindow);
                    }, 1000);
                    return; // Don't show error alert yet - window stays open with loading spinner
                }

                // Close the blank window if it was opened
                if (newWindow && !newWindow.closed) {
                    newWindow.close();
                }

                // Show error alert
                this.$timeout(() => {
                    if (error.status === -1) {
                        this.$window.alert('Unable to access PDF. Please try again later.');
                    } else if (error.status === 500) {
                        this.$window.alert('Server error while fetching PDF. The retries also failed. Please try again later or contact support.');
                    } else {
                        this.$window.alert('Could not load PDF. Please try again later.');
                    }
                }, 0);
            });
    }


    addCustomTab() {
        // The startup timeout in $onInit can fire after the component is destroyed.
        if (this.isDestroyed) {
            return;
        }

        const tabsContainer = angular.element(document.querySelector('md-tabs'));
        const tabsCtrl = tabsContainer.controller('mdTabs');

        if (!tabsCtrl || !tabsCtrl.tabs) {
            console.error('mdTabs controller not found or tabs undefined');
            return;
        }

        // Get current language and translated label
        const currentLang = this.$translate.use() || 'de';
        const translatedLabel = this.tabLabels[currentLang] || this.tabLabels['de'];

        const tabExists = tabsCtrl.tabs.some(tab => tab.scope && tab.scope.$ctrl === this);
        if (tabExists) {
            return;
        }

        // Create the scope the tab content is bound to.
        const newScope = this.$scope.$new();
        newScope.label = translatedLabel;
        newScope.$ctrl = this;
        newScope.select = function() { };
        newScope.deselect = function() { };


        // Tab content markup, wrapped in md-tab-content below.
        const template = `
            <div class="padding-large">
                <h2 translate="customized.invoices"></h2>
                 <md-card class="bar alert-bar" style="height: unset; min-height: unset;"><div translate="customized.invoices.alert"></div></md-card>    
                <div ng-if="$ctrl.isLoading">
                    <md-progress-circular md-mode="indeterminate"></md-progress-circular>
                    <span translate="customized.download.invoices">Lade Rechnungen…</span>
                </div>
                <div ng-if="!$ctrl.isLoading && $ctrl.errorMessage">
                    <md-card class="bar alert-bar" style="height: unset; min-height: unset;">
                        <div>{{ $ctrl.errorMessage }}</div>
                    </md-card>
                    <md-button ng-if="$ctrl.canRetry"
                               class="md-raised md-primary"
                               ng-click="$ctrl.retryFetch()">
                        Try again
                    </md-button>
                </div>
                <div ng-if="!$ctrl.isLoading && !$ctrl.errorMessage && !$ctrl.invoices.length">
                    <span translate="customized.no.invoices">Keine Rechnungen gefunden</span>
                </div>
                <md-list ng-if="!$ctrl.isLoading && !$ctrl.errorMessage && $ctrl.invoices.length">
                    <md-list-item
                        ng-repeat="invoice in $ctrl.invoices"
                        layout="row"
                        layout-align="space-between center"
                        style="margin-bottom: 16px; border-bottom: 1px solid #e0e0e0; padding-bottom: 16px;">
                        <div class="md-list-item-text" flex>
                            <h3><span translate="customized.invoice">Rechnung</span> #{{ invoice.invoiceNumber }}</h3>
                            <p style="margin-bottom: 4px; padding-left: 16px;"><span translate="customized.date">Datum</span> {{ invoice.invoiceDate }}</p>
                            <p style="margin-bottom: 4px; padding-left: 16px;"><span translate="customized.amount">Betrag</span> {{ invoice.invoiceAmount }} CHF</p>
                        </div>
                        <div>
                            <md-button class="md-raised md-primary" ng-mousedown="$ctrl.fetchPdf(invoice.documentLink, $event)" translate="customized.view.pdf">
                                PDF anzeigen
                            </md-button>
                        </div>
                    </md-list-item>
                </md-list>
            </div>
        `;

        // Wrap the markup in the md-tab-content structure md-tabs expects.
        const tabContentId = 'tab-content-13';
        const tabContentTemplate = `
        <md-tab-content id="${tabContentId}"
            class="_md md-no-scroll"
            role="tabpanel"
            aria-labelledby="customTab"
            md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)"
            md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)"
            ng-class="{
                'md-active': tab.isActive(),
                'md-left': tab.isLeft(),
                'md-right': tab.isRight(),
                'md-no-scroll': true
            }"
            ng-if="tab.hasContent !== false">
            ${template}
        </md-tab-content>
        `;

        // Compile against the tab scope.
        const compiledTabContent = this.$compile(tabContentTemplate)(newScope);

        // Index the new tab will occupy.
        const index = tabsCtrl.tabs.length;

        // Tab object in the shape md-tabs expects.
        const newTab = {
            scope: newScope,
            label: translatedLabel,
            parent: { label: translatedLabel },
            getIndex: () => index,
            isActive: () => tabsCtrl.selectedIndex === index,
            isLeft: () => tabsCtrl.selectedIndex > index,
            isRight: () => tabsCtrl.selectedIndex < index,
            hasFocus: () => false,
            element: compiledTabContent
        };
        // Register the tab with md-tabs.
        tabsCtrl.tabs.push(newTab);

        // Insert the content into md-tabs-content-wrapper, or into md-tabs if absent.
        const contentWrapper = document.querySelector('md-tabs-content-wrapper');
        if (contentWrapper) {
            angular.element(contentWrapper).append(compiledTabContent);
        } else {
            tabsContainer.append(compiledTabContent);
        }

        newScope.tab = newTab;

        // Updates the tab label on language change. Deregistered in $destroy.
        this.deregisterTranslateWatch = this.$rootScope.$on('$translateChangeSuccess', () => {
            const currentLang = this.$translate.use() || 'de';
            const translatedLabel = this.tabLabels[currentLang] || this.tabLabels['de'];

            // Update all label references
            newScope.label = translatedLabel;
            newTab.label = translatedLabel;
            newTab.parent.label = translatedLabel;

            // The new label has a different width, so pagination has to be recomputed.
            this.$timeout(() => {
                this.refreshTabs(tabsCtrl);
            }, 0);
        });

        // Recompute pagination now that the tab item is in the DOM and measurable.
        this.$timeout(() => {
            this.refreshTabs(tabsCtrl);
            this.$scope.$applyAsync();
        }, 0);

        this.watchTabSize(tabsCtrl);

        // Load invoices unless they are already present.
        if (!this.invoices.length) {
            this.fetchInvoices();
        }
    }


    // Recomputes pagination, which gates the prev/next buttons, and the ink bar.
    // md-tabs does this itself only in insertTab, removeTab and on window resize.
    refreshTabs(tabsCtrl) {
        if (typeof tabsCtrl.updatePagination === 'function') {
            tabsCtrl.updatePagination();
        }
        if (typeof tabsCtrl.updateInkBarStyles === 'function') {
            tabsCtrl.updateInkBarStyles();
        }
    }


    // md-tabs measures tab widths against the live DOM, so a measurement taken while
    // the tab strip is still hidden or unsized yields no pagination and is never
    // revisited. Recompute whenever the canvas changes size. Disconnected in $destroy.
    watchTabSize(tabsCtrl) {
        const canvas = document.querySelector('md-tabs-canvas');
        if (!canvas || typeof ResizeObserver !== 'function') {
            return;
        }
        this.tabSizeObserver = new ResizeObserver(() => this.refreshTabs(tabsCtrl));
        this.tabSizeObserver.observe(canvas);
    }


    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            this.invoices = [];
            this.isLoading = false;

            this.$timeout(() => {
                this.addCustomTab();
            }, 500);

            // Setup auto-refresh for invoices every 10 minutes (600000 milliseconds)
            this.refreshInterval = this.$interval(() => {
                console.log('Auto-refreshing invoices...');
                this.fetchInvoices();
            }, 600000); // 10 minutes

            // Cleanup interval when controller is destroyed
            this.$scope.$on('$destroy', () => {
                this.isDestroyed = true;

                if (this.refreshInterval) {
                    console.log('Cancelling invoice auto-refresh interval');
                    this.$interval.cancel(this.refreshInterval);
                    this.refreshInterval = null;
                }

                if (this.deregisterTranslateWatch) {
                    this.deregisterTranslateWatch();
                    this.deregisterTranslateWatch = null;
                }

                if (this.tabSizeObserver) {
                    this.tabSizeObserver.disconnect();
                    this.tabSizeObserver = null;
                }
            });

        } catch (e) {
            console.error("***SLSP*** an initialization error occured: InvoicesController\n\n", e);
        }
    }

}

slspInvoicesController.$inject = ['$scope', '$element', '$rootScope', '$window', '$http', '$timeout', '$compile', '$location', '$translate', '$interval'];
