
//-----------------slspAdvancedSearchClearButton------------------------------

export class slspAdvancedSearchClearButtonController {

    constructor($timeout, $compile, $scope) {
        this.$timeout = $timeout;
        this.$compile = $compile;
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.$timeout(() => {
                this.afterCtrl = this.afterCtrl.parentCtrl;
                this.afterCtrl.limit = 2;
                
                console.log("slspAdvancedSearchClearButtonController: ", this.afterCtrl);

                let incrementButton = angular.element(document.querySelector(`button[ng-click="$ctrl.incrementLimit()"`));
                let decrementButtonHtml = `
                    <button type="button" class="decrement-limit button-with-icon md-primary zero-margin button-with-icon md-button md-primoExplore-theme" ng-click="$ctrl.decrementLimit()" ng-hide="$ctrl.afterCtrl.limit <= 2">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                        <span translate="customized.search-advanced.delete"></span>
                    </button>`;
                let clearButton = angular.element(document.querySelector(`button[ng-click="$ctrl.clearSearchForm()"`));
                let resetButtonHtml = `
                    <button class="button-with-icon zero-margin button-notice button-with-icon md-button md-primoExplore-theme" type="button" ng-click="$ctrl.resetForm()">
                        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="replay">
                            <md-icon ng-if="($ctrl.iconDefinition && !$ctrl.isCustom && !$ctrl.isEmailMode()) && !$ctrl.useFallBack" md-svg-icon="primo-ui:replay" role="presentation" class="md-primoExplore-theme">
                                <svg id="replay_cache250" width="100%" height="100%" viewBox="0 0 24 24" y="960" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z"></path>
                                </svg>
                            </md-icon>
                            <prm-icon-after parent-ctrl="$ctrl"></prm-icon-after>
                        </prm-icon>
                        <span translate="link.title.search.clear"></span>
                    </button>`;
                         
                let resetButton = this.$compile(resetButtonHtml)(this.$scope);
                if (clearButton.length) {
                    clearButton.replaceWith(resetButton);
                }

                let decrementButton = this.$compile(decrementButtonHtml)(this.$scope);
                incrementButton[0].parentNode.insertBefore(decrementButton[0], incrementButton[0].nextSibling);

            }, 0);
        } catch (e) {
            console.error("***SLSP*** an error occured: slspAdvancedSearchClearButton\n\n");
            console.error(e.message);
        }
    }

    decrementLimit() {
        if (this.afterCtrl.limit > 2) {
            this.afterCtrl.limit -= 1;

            const limitIndex = this.afterCtrl.limit; // Index des letzten Elements basierend auf dem Limit
            if (this.afterCtrl.rowArray[limitIndex]) {
                this.afterCtrl.rowArray[limitIndex].boolOperator = "AND";
                this.afterCtrl.rowArray[limitIndex].searchOperator = "contains";
                this.afterCtrl.rowArray[limitIndex].searchCategory = "any";
                this.afterCtrl.rowArray[limitIndex].searchQuery = '';

               
            }
        }
    }
    resetForm() {
        this.afterCtrl.clearSearchForm();
        this.afterCtrl.limit = 2;
    }
}

slspAdvancedSearchClearButtonController.$inject = ['$timeout', '$compile', '$scope'];

