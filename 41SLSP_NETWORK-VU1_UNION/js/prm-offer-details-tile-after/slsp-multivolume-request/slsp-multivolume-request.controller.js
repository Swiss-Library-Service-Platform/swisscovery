export class slspMultivolumeRequestController {
    constructor($scope) {
        this.$scope = $scope;
        this.previousUnavailableVolume = null;
    }

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.domManipulated = false;
        // console.log(this);
    }

    $doCheck() {
        try {
            const currentUnavailableVolume = this.parentCtrl.isNoOfferAfterRefine();


            //console.log('currentUnavailableVolume: ' + currentUnavailableVolume);
            
            if (!this.domManipulated) {
                let volumeField = angular.element(document.querySelector('prm-get-it-request .form_item[ng-if="::$ctrl.isCodeEnabledforForm(\'VOLUME\')"]'));
                let refineButton = angular.element(document.querySelector('span[ng-if="::$ctrl._tempRapidoLocateSerialMultivolumeOffers"]'));

                volumeField.append(refineButton);

                //console.log(volumeField);
                //console.log(refineButton);

                this.domManipulated = true;


            }

            //console.log('isNoOfferAfterRefine:' + this.parentCtrl.isNoOfferAfterRefine() + '\n' + 'resType: ' + resType + '\n' + 'currentUnavailableVolume: ' + currentUnavailableVolume + '\n' + 'previousUnavailableVolume: ' + this.previousUnavailableVolume);



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