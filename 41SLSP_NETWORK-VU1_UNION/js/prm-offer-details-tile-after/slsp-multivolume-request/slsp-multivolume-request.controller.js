export class slspMultivolumeRequestController {
    constructor($scope) {
        this.$scope = $scope;
        this.previousUnavailableVolume = null;
    }

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;

    }

    $doCheck() {
        try {
            const currentUnavailableVolume = this.parentCtrl.isNoOfferAfterRefine();

            if (currentUnavailableVolume !== this.previousUnavailableVolume) {
                if (currentUnavailableVolume == true) {
                    this.disableRequestButton();
                } else {
                    this.enableRequestButton();
                }

                this.previousUnavailableVolume = currentUnavailableVolume;
            }
        } catch (e) {
            console.error("***SLSP*** an error occurred: Multivolume Request\n\n");
            console.error(e.message);
        }
    }

    disableRequestButton() {
        const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'));
        if (requestButton) {
            requestButton.attr('disabled', 'disabled');
        }
    }

    enableRequestButton() {
        const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'));
        if (requestButton) {
            requestButton.removeAttr('disabled');
        }
    }

}

slspMultivolumeRequestController.$inject = ['$scope'];