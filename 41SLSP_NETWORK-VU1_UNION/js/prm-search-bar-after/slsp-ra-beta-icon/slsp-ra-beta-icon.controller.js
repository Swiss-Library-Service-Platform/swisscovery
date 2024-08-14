export class slspRaBetaIconController {
    constructor($scope, $compile) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.filterLabel = `<div class="raBetaLogo">BETA</div>`;
        this.aiLogoAppended = false;
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            // Check if the filter button exists
            let aiLogoElements = document.querySelectorAll('div[ng-if="::$ctrl.isResearchAssistantByIcon"] .md-button.button-link');

            if (aiLogoElements.length > 0) {
                let aiLogoElement = aiLogoElements[0];
                if (!aiLogoElement.querySelector('.raBetaLogo')) {
                    angular.element(aiLogoElement).append(this.$compile(this.filterLabel)(this.$scope));
                    //console.log(aiLogoElements);
                }
                this.aiLogoAppended = true;
            }
        } catch (e) {
            console.error("***SLSP*** an error occured: slspRaBetaIconController\n\n");
            console.error(e.message);
        }
    }
}

slspRaBetaIconController.$inject = ['$scope', '$compile'];
