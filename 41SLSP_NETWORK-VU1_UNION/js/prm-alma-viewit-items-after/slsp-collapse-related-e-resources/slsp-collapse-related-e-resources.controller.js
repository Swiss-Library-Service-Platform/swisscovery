export class slspCollapseRelatedEResourcesController {
    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.isCollapsed = false; // Flag to prevent infinite loop
    }

    $onInit() {
        this.parentCtrl = this.afterCtrl ? this.afterCtrl.parentCtrl : null;
    }

    $doCheck() {
        if (this.isCollapsed) return; // Prevent further execution if already collapsed

        try {
            this.$timeout(() => {
                if (this.afterCtrl) {
                    this.parentCtrl = this.afterCtrl.parentCtrl;
                }
                if (this.parentCtrl && (this.parentCtrl.serviceType === 'ELECTRONIC_RELATED' || this.parentCtrl.serviceType === 'DIGITAL_RELATED')) {
                    const relatedDivs = document.querySelectorAll('.ELECTRONIC_RELATED, .DIGITAL_RELATED');
                    relatedDivs.forEach(relatedDiv => {
                        const closestPrmAlmaViewitItems = relatedDiv.closest('prm-alma-viewit-items');
                        const mdListElements = closestPrmAlmaViewitItems.querySelectorAll('md-list');

                        mdListElements.forEach((element, index) => {
                            if (index === 0) { // Adjust the condition as needed
                                element.classList.add('collapsed');
                            }
                        });

                        const existingButton = closestPrmAlmaViewitItems.querySelector('.collapse-related');
                        if (!existingButton) {
                            const buttonElement = document.createElement('button');
                            buttonElement.classList.add('section-title', 'md-button', 'md-primoExplore-theme', 'md-ink-ripple', 'collapse-related', 'collapsed');
                            buttonElement.innerHTML = `<div layout="row" layout-align="start center" class="layout-align-start-center layout-row"><h3 class="medium-uppercase-bold" aria-expanded="false"><br><span translate="c.uresolverServicesForRelatedTitles" class="bold-text"></span><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right" class="arrow-icon" style=""><md-icon ng-if="($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode())" md-svg-icon="primo-ui:chevron-right" role="presentation" class="md-primoExplore-theme"><svg width="100%" height="100%" viewBox="0 0 24 24" y="384" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></md-icon></prm-icon></h3></div>`;

                            buttonElement.addEventListener('click', () => {
                                mdListElements.forEach((element) => {
                                    element.classList.toggle('collapsed');
                                });
                                buttonElement.querySelector('.arrow-icon').classList.toggle('rotate-90');
                            });

                            const titleElement = closestPrmAlmaViewitItems.querySelector('span[translate="c.uresolverServicesForRelatedTitles"]');
                            if (titleElement) {
                                const titleParentElement = titleElement.parentNode;
                                const titleGrandParentElement = titleParentElement.parentNode;
                                titleGrandParentElement.replaceChild(buttonElement, titleParentElement);

                                // Add a timeout to ensure that the element is compiled after the DOM has fully rendered
                                this.$timeout(() => {
                                    this.$compile(buttonElement)(this.$scope);
                                });
                            }
                        }
                    });

                    this.isCollapsed = true; // Set the flag to true to prevent further execution
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    getServiceType() {
        if (this.parentCtrl && this.parentCtrl.serviceType !== undefined) {
            return this.parentCtrl.serviceType;
        }
        return '';
    }
}

slspCollapseRelatedEResourcesController.$inject = ['$scope', '$compile', '$timeout'];