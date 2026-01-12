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
        this.refreshInterval = null; // Store interval reference for cleanup

        // Translation object for tab name
        this.tabLabels = {
            'de': 'Rechnungen',
            'en': 'Invoices',
            'fr': 'Factures',
            'it': 'Fatture'
        };
    }

    fetchInvoices() {
        const apiUrl = 'https://inv-slsp.bossonline.ch:21143/jrpc/slsp/getInvoices';
        const jwt = sessionStorage.getItem('primoExploreJwt').slice(1, -1);

        const postData = {
            jsonrpc: '2.0',
            method: 'getInvoices',
            params: {},
            id: 1
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': jwt
            },
            withCredentials: false,
            cache: false
        };

        this.$http.post(apiUrl, postData, config)
            .then(response => {

                if (response && response.data && response.data.data) {
                    this.invoices = response.data.data;
                    console.log('Invoices loaded:', this.invoices.length);

                    this.$timeout(() => {
                        this.$scope.$apply();
                    });
                } else {
                    console.error('Invalid response format received');
                    this.invoices = [];
                }
            })
            .catch(error => {
                console.error('Invoice fetch error:', {
                    status: error.status,
                    statusText: error.statusText
                });
                this.invoices = [];
                this.$timeout(() => {
                    this.$scope.$apply();
                });
            });
    }

    fetchPdf(documentLink, event, retryCount = 0, existingWindow = null) {
        // Check if middle mouse button (mousewheel click) was used
        const isMiddleClick = event && event.button === 1;

        // Check if existing window is still valid and open
        let newWindow;
        let isReusingWindow = false;

        if (existingWindow && !existingWindow.closed) {
            // Reuse the existing window (loading spinner already visible)
            newWindow = existingWindow;
            isReusingWindow = true;
        } else {
            // Open a new window (need to write loading HTML)
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

        const jwt = sessionStorage.getItem('primoExploreJwt').slice(1, -1);
        const documentId = documentLink.split('/').pop();

        // Use GET request with JWT token in header
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
                // Try to read the error response even though responseType is 'blob'
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

                // Retry logic for 500 errors
                if (error.status === 500 && retryCount === 0) {
                    // Keep the window open and retry with the same window
                    this.$timeout(() => {
                        this.fetchPdf(documentLink, event, 1, newWindow);
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
                        this.$window.alert('Server error while fetching PDF. The retry also failed. Please try again later or contact support.');
                    } else {
                        this.$window.alert('Could not load PDF. Please try again later.');
                    }
                }, 0);
            });
    }


    addCustomTab() {
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

        // Neuen Scope erstellen
        const newScope = this.$scope.$new();
        newScope.label = translatedLabel;
        newScope.$ctrl = this;
        newScope.select = function() { };
        newScope.deselect = function() { };


        // Tab Template (nur die Vorlage)
        const template = `
            <div class="padding-large">
                <h2 translate="customized.invoices"></h2>
                 <md-card class="bar alert-bar" style="height: unset; min-height: unset;"><div translate="customized.invoices.alert"></div></md-card>    
                <div ng-if="$ctrl.isLoading">
                    <md-progress-circular md-mode="indeterminate"></md-progress-circular>
                    <span translate="customized.download.invoices">Lade Rechnungen…</span>
                </div>
                <div ng-if="!$ctrl.isLoading && !$ctrl.invoices.length">
                    <span translate="customized.no.invoices">Keine Rechnungen gefunden</span>
                </div>
                <md-list ng-if="!$ctrl.isLoading && $ctrl.invoices.length">
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

        // Komplette md-tab-content-Struktur bauen
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

        // Kompilieren
        const compiledTabContent = this.$compile(tabContentTemplate)(newScope);

        // Index für den neuen Tab bestimmen
        const index = tabsCtrl.tabs.length;

        // Tab-Objekt
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
        // Push Tab + Template in DOM-Struktur, die Angular erwartet
        tabsCtrl.tabs.push(newTab);

        // INS md-tabs-content-wrapper einfügen
        const contentWrapper = document.querySelector('md-tabs-content-wrapper');
        if (contentWrapper) {
            angular.element(contentWrapper).append(compiledTabContent);
        } else {
            tabsContainer.append(compiledTabContent);
        }

        newScope.tab = newTab;

        // Watch for language changes and update tab label
        this.$rootScope.$on('$translateChangeSuccess', () => {
            const currentLang = this.$translate.use() || 'de';
            const translatedLabel = this.tabLabels[currentLang] || this.tabLabels['de'];

            // Update all label references
            newScope.label = translatedLabel;
            newTab.label = translatedLabel;
            newTab.parent.label = translatedLabel;

            // Force tab refresh to show new label
            this.$timeout(() => {
                if (tabsCtrl.refreshInkBar) {
                    tabsCtrl.refreshInkBar();
                }
                // Force Angular to re-render the tabs
                this.$scope.$apply();
            }, 0);
        });

        // Angular aktualisieren
        this.$timeout(() => {
            if (tabsCtrl.pagination && typeof tabsCtrl.pagination.updateVisible === 'function') {
                tabsCtrl.pagination.updateVisible();
            }
            if (typeof tabsCtrl.refreshInkBar === 'function') {
                tabsCtrl.refreshInkBar();
            }

            this.$scope.$applyAsync();
        }, 0);

        // Daten laden
        if (!this.invoices.length) {
            this.fetchInvoices();
        }
    }


    updatePagination() {
        const tabsContainer = angular.element(document.querySelector('md-tabs'));
        const tabsCtrl = tabsContainer.controller('mdTabs');
        if (tabsCtrl && tabsCtrl.pagination) {
            tabsCtrl.pagination.shouldPageForward = true;
            tabsCtrl.pagination.shouldPageBack = true;
            tabsCtrl.pagination.updatePagination();
        }
    }


    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            this.invoices = [];
            this.isLoading = false;

            this.$timeout(() => {
                this.addCustomTab();
                // Update tab pagination after adding the new tab
                this.updatePagination();
            }, 500);

            // Setup auto-refresh for invoices every 10 minutes (600000 milliseconds)
            this.refreshInterval = this.$interval(() => {
                console.log('Auto-refreshing invoices...');
                this.fetchInvoices();
            }, 600000); // 10 minutes

            // Cleanup interval when controller is destroyed
            this.$scope.$on('$destroy', () => {
                if (this.refreshInterval) {
                    console.log('Cancelling invoice auto-refresh interval');
                    this.$interval.cancel(this.refreshInterval);
                    this.refreshInterval = null;
                }
            });

        } catch (e) {
            console.error("***SLSP*** an initialization error occured: InvoicesController\n\n");
            // console.error(e.message);
        }
    }

}

slspInvoicesController.$inject = ['$scope', '$element', '$rootScope', '$window', '$http', '$timeout', '$compile', '$location', '$translate', '$interval'];
