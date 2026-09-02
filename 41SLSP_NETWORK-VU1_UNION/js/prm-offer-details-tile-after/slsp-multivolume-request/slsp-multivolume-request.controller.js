export class slspMultivolumeRequestController {
    constructor($scope) {
        this.$scope = $scope;
        this.previousUnavailableVolume = null;
        this.refineButtonMoved = false;
    }

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
       
        this.domManipulated = false;

    }

    $doCheck() {
        try {
            const currentUnavailableVolume = this.parentCtrl.isNoOfferAfterRefine();
            const isUnavailableResource = this.parentCtrl.isUnavailableResource();
            const resourceType = this.parentCtrl.getResourceType();
             console.log('currentUnavailableVolume: ' + currentUnavailableVolume);
             console.log('parentCtrl: ', this.parentCtrl);
            // console.log('isUnavailableResource: ' + isUnavailableResource);
            //console.log('resourceType: ' + resourceType);

            if (resourceType != 'journal' && !this.refineButtonMoved) {
                this.refineButtonMoved = this.ensureRefineButtonBeforeConfirm();
            }

            if (!this.domManipulated && resourceType != 'journal') {
                // let volumeField = angular.element(document.querySelector('prm-get-it-request .form_item[ng-if="::$ctrl.isCodeEnabledforForm(\'VOLUME\')"]'));
                // let refineButton = angular.element(document.querySelector('prm-get-it-request .margin-buttons span[ng-if="::!$ctrl.isEbookOffer()"]'));

                let resetButton = angular.element(document.querySelector('span[translate="nui.reset"]'));
                if (resetButton && resetButton.parent()) {
                    resetButton.parent().addClass('hidden');
                }

                this.domManipulated = true;
            }

            // Check und Button steuern
            if (currentUnavailableVolume !== this.previousUnavailableVolume) {
                if (currentUnavailableVolume === true) {
                    this.disableRequestButton();
                } else {
                    this.enableRequestButton();
                }

                this.previousUnavailableVolume = currentUnavailableVolume;
            }

            // Re-apply disabled state in case Primo re-renders the button while the state stays true.
            if (currentUnavailableVolume === true) {
                this.disableRequestButton();
            }

            // Klassen hinzufügen/entfernen
            this.updatePhysicalGetItRequestClass(isUnavailableResource, currentUnavailableVolume);

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

    updatePhysicalGetItRequestClass(isUnavailableResource, isNoOfferAfterRefine) {
        const physicalGetItRequestDiv = angular.element(document.querySelector('#physicalGetItRequest'));
        if (physicalGetItRequestDiv) {
            // Klasse "is-unavailable-resource" hinzufügen/entfernen
            if (isUnavailableResource) {
                physicalGetItRequestDiv.addClass('is-unavailbl-resource');
            } else {
                physicalGetItRequestDiv.removeClass('is-unavailbl-resource');
            }

            // Klasse "no-best-offer" hinzufügen/entfernen
            if (isNoOfferAfterRefine) {
                physicalGetItRequestDiv.addClass('no-best-offer');
            } else {
                physicalGetItRequestDiv.removeClass('no-best-offer');
            }
        }
    }

     ensureRefineButtonBeforeConfirm() {
        const confirmButton = document.querySelector('#physicalGetItRequest button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple');
        const movedRefineButton = confirmButton && confirmButton.parentNode
            ? confirmButton.parentNode.querySelector('.md-button.button-with-icon.slsp-refine-moved')
            : null;
        const refineButton = document.querySelector('#physicalGetItRequest prm-offer-details-tile .refine-offer-button .md-button.button-with-icon:not(.slsp-refine-moved)');

        console.log('Refine button:', refineButton);
        console.log('Confirm button:', confirmButton);

        if (movedRefineButton) {
            return true;
        }

        if (!refineButton || !confirmButton || !confirmButton.parentNode) {
            return false;
        }

        if (refineButton !== confirmButton.previousElementSibling) {
            confirmButton.parentNode.insertBefore(refineButton, confirmButton);
        }

        refineButton.classList.add('slsp-refine-moved');

        return true;
    }

}

slspMultivolumeRequestController.$inject = ['$scope'];
