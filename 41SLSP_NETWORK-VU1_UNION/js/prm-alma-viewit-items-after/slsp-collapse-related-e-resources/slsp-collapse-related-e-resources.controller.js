//-------- ---------------------------------------


export class slspCollapseRelatedEResourcesController {
    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;

                if (this.parentCtrl.serviceType === 'ELECTRONIC_RELATED') {
                    const list2Element = document.querySelector('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-alma-viewit > prm-alma-viewit-items:nth-child(2) > md-list');
                    list2Element.classList.add('collapsed');

                    const buttonElement = document.createElement('button');
                    buttonElement.classList.add('section-title', 'md-button', 'md-primoExplore-theme', 'md-ink-ripple', 'layout-fill', 'collapsed');
                    buttonElement.innerHTML = `<div layout="row" layout-align="start center" class="layout-align-start-center layout-row"><h3 class="medium-uppercase-bold" aria-expanded="false"><br><span translate="c.uresolverServicesForRelatedTitles" class="bold-text"></span><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right" class="arrow-icon" style=""><md-icon ng-if="($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode())" md-svg-icon="primo-ui:chevron-right" role="presentation" class="md-primoExplore-theme"><svg width="100%" height="100%" viewBox="0 0 24 24" y="384" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></md-icon></prm-icon></h3></div>`;

                    buttonElement.addEventListener('click', function() {
                        list2Element.classList.toggle('collapsed');
                        buttonElement.querySelector('.arrow-icon').classList.toggle('rotate-90');
                    });

                    const titleElement = document.querySelector('#getit_link1_0 span[translate="c.uresolverServicesForRelatedTitles"]');
                    const titleParentElement = titleElement.parentNode;
                    const titleGrandParentElement = titleParentElement.parentNode;
                    titleGrandParentElement.replaceChild(buttonElement, titleParentElement);

                    // Add a timeout to ensure that the element is compiled after the DOM has fully rendered
                    this.$timeout(() => {
                        this.$compile(buttonElement)(this.$scope);
                    });

                    console.log(buttonElement);

                } else {
                    return;
                }
            }, 50);
        } catch (e) {
            console.error('***SLSP*** an error occured: Rapido \n\n');
            console.error(e.message);
        }
    }


}

slspCollapseRelatedEResourcesController.$inject = ['$scope', '$compile', '$timeout'];