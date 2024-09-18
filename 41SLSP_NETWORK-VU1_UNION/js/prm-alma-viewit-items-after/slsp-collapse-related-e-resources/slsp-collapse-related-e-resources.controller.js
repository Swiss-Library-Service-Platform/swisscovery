export class slspCollapseRelatedEResourcesController {
    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            this.$timeout(() => {
                // Alle 'prm-alma-viewit-items' Elemente durchsuchen
                const allViewitItems = document.querySelectorAll('prm-alma-viewit-items');

                allViewitItems.forEach(viewitItem => {
                    // Direkt auf den Controller des Elements zugreifen
                    const viewitCtrl = angular.element(viewitItem).controller('prmAlmaViewitItems');

                    if (viewitCtrl && (viewitCtrl.serviceType === 'ELECTRONIC_RELATED' || viewitCtrl.serviceType === 'DIGITAL_RELATED')) {
                        // Finde das md-list Element in diesem viewitItem
                        const listElement = viewitItem.querySelector('md-list');
                        if (listElement) {
                            listElement.classList.add('collapsed');  // Liste einklappen

                            // Button zum Ein-/Ausklappen hinzufügen
                            const buttonElement = document.createElement('button');
                            buttonElement.classList.add('section-title', 'md-button', 'md-primoExplore-theme', 'md-ink-ripple', 'collapse-related', 'collapsed');
                            buttonElement.innerHTML = `<div layout="row" layout-align="start center" class="layout-align-start-center layout-row"><h3 class="medium-uppercase-bold" aria-expanded="false"><br><span translate="c.uresolverServicesForRelatedTitles" class="bold-text"></span><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right" class="arrow-icon" style=""><md-icon ng-if="($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode())" md-svg-icon="primo-ui:chevron-right" role="presentation" class="md-primoExplore-theme"><svg width="100%" height="100%" viewBox="0 0 24 24" y="384" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></md-icon></prm-icon></h3></div>`;

                            // Event Listener für Klick hinzufügen
                            buttonElement.addEventListener('click', function () {
                                listElement.classList.toggle('collapsed');
                                buttonElement.querySelector('.arrow-icon').classList.toggle('rotate-90');
                            });

                            // Finde den aktuellen Titel und ersetze ihn mit dem Button
                            const titleElement = viewitItem.querySelector('span[translate="c.uresolverServicesForRelatedTitles"]');
                            if (titleElement) {
                                const titleParentElement = titleElement.parentNode;
                                const titleGrandParentElement = titleParentElement.parentNode;
                                titleGrandParentElement.replaceChild(buttonElement, titleParentElement);

                                // Kompilieren des Buttons mit AngularJS
                                this.$timeout(() => {
                                    this.$compile(buttonElement)(this.$scope);
                                });
                            }
                        }
                    }
                });
            }, 50);
        } catch (e) {
            console.error('***SLSP*** an error occured: Rapido \n\n');
            console.error(e.message);
        }
    }
}

slspCollapseRelatedEResourcesController.$inject = ['$scope', '$compile', '$timeout'];
