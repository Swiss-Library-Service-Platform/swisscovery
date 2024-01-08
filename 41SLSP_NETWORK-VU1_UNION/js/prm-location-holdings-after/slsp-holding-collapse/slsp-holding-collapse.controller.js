export class slspHoldingCollapseController {
    constructor($scope, $element, $compile, $timeout) {
        this.$scope = $scope;
        this.$element = $element;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.labels = {
            holdingExpandLabel: '<md-icon md-svg-icon="hardware:ic_keyboard_arrow_down_24px" class="md-primoExplore-theme" role="img" aria-label="hardware:ic_keyboard_arrow_down_24px"><svg width="100%" height="100%" viewBox="0 0 24 24" id="ic_keyboard_arrow_down_24px_cache189" y="264" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg></md-icon><span translate="customized.holdings.expand"></span>',
            holdingCollapseLabel: '<md-icon class="hsg-fold-icon-collapse md-primoExplore-theme" md-svg-icon="hardware:ic_keyboard_arrow_down_24px" role="img" aria-label="hardware:ic_keyboard_arrow_down_24px"><svg width="100%" height="100%" viewBox="0 0 24 24" id="ic_keyboard_arrow_down_24px_cache231" y="264" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg></md-icon><span translate="customized.holdings.collapse"></span>'
        };
    }

    $doCheck() {
        try {
            let holdingExpand = document.querySelectorAll('button[ng-if="($ctrl.currLoc.locationNoItems ?  $ctrl.summaryLinesVisible : !$ctrl.summaryLinesVisible) && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData"] > span[translate="nui.locations.viewMore"]');
            let holdingExpandButton = document.querySelectorAll('button[ng-if="($ctrl.currLoc.locationNoItems ?  $ctrl.summaryLinesVisible : !$ctrl.summaryLinesVisible) && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData"]');
            holdingExpand.forEach(element => {
                if (!element.__replaced) {
                    angular.element(element).replaceWith(this.$compile(this.labels.holdingExpandLabel)(this.$scope));
                    element.__replaced = true;
                }
                angular.element(holdingExpandButton).addClass('holding-expand-button');
            });

            let holdingCollapse = document.querySelectorAll('button[ng-if="($ctrl.currLoc.locationNoItems ?  !$ctrl.summaryLinesVisible : $ctrl.summaryLinesVisible) && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData"] > span[translate="nui.locations.viewLess"]');
            let holdingCollapseButton = document.querySelectorAll('button[ng-if="($ctrl.currLoc.locationNoItems ?  !$ctrl.summaryLinesVisible : $ctrl.summaryLinesVisible) && $ctrl.currLoc.summaryHoldings.baseSummaryShort.length > 0 && $ctrl.currLoc.isHoldingExpandedData"]');
            holdingCollapse.forEach(element => {
                if (!element.__replaced) {
                    angular.element(element).replaceWith(this.$compile(this.labels.holdingCollapseLabel)(this.$scope));
                    element.__replaced = true;
                }
                angular.element(holdingCollapseButton).addClass('holding-collapse-button');
            });
        } catch (e) {
            console.error("***SLSP*** an error occurred: Rapido hide Library\n\n");
            console.error(e.message);
        }
    }
}

slspHoldingCollapseController.$inject = ['$scope', '$element', '$compile', '$timeout'];
