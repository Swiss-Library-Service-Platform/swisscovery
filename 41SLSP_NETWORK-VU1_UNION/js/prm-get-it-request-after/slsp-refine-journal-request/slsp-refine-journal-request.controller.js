//-----------------------------------------------


export class slspRefineJournalRequestController {

    constructor($scope) {
        this.$scope = $scope;

    }


    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            let isRefined = this.parentCtrl._refined;
            let isPhysicalForm = this.parentCtrl.openphysicalform.openPhysicalForm;
            let isPhysicalJournal = this.parentCtrl.isPhysicalJournal();
            let refineOfferDisabled = this.parentCtrl._refineOfferDisabled;
            let volumeData = this.parentCtrl.formData.myVolume;
            let noteData = this.parentCtrl.formData.myNote;
            let publicationData = this.parentCtrl.formData.myPublicationDate;
            // Prüfen, ob #physicalGetItRequest die Klasse no-best-offer hat
            const physicalGetItRequestElem = document.querySelector('#physicalGetItRequest');
            const hasNoBestOfferClass = physicalGetItRequestElem && physicalGetItRequestElem.classList.contains('no-best-offer');


            // console.log('openphysicalform', this.parentCtrl.openphysicalform.openPhysicalForm);
            // console.log('parentCtrl', this.parentCtrl);
            // console.log('volumeData', volumeData);
            // console.log('_refineOfferDisabled)', this.parentCtrl._refineOfferDisabled);

            /*  console.log('_refined', this.parentCtrl._refined);
             console.log('sendDisabled', this.parentCtrl.sendDisabled());
             
              */

            // console.log('isPhysicalJournal', this.parentCtrl.isPhysicalJournal());
            //
            // console.log('_refineOfferInProgress', this.parentCtrl._refineOfferInProgress);
            // console.log('_isPhysicalJournalFormValid',this.parentCtrl._isPhysicalJournalFormValid);
            // console.log('isJournal',this.parentCtrl.isJournal());
            // console.log('isdigitaloffer',this.parentCtrl.isdigitaloffer);
            // console.log('getNoOfferOfferDetails',this.parentCtrl.getNoOfferOfferDetails());
            //console.log('formData:',this.parentCtrl.formData);
            //console.log('requestSubmitted:',this.parentCtrl._requestSubmitted);

            if (isPhysicalJournal && isPhysicalForm) {
                if (!publicationData) {
                    this.disableRefineButton();
                } else {
                    this.enableRefineButton();
                }
                if (
                    (this._lastVolumeData !== undefined && this._lastVolumeData !== volumeData) ||
                    (this._lastPublicationData !== undefined && this._lastPublicationData !== publicationData)
                ) {
                    this.parentCtrl._refined = false;
                }
                this._lastVolumeData = volumeData;
                this._lastPublicationData = publicationData;

                this.parentCtrl.noteField.label = 'customized.journal.note';

                // Button-Handler nur einmal registrieren
                if (!this._submitHandlerRegistered) {
                    const submitBtn = document.querySelector('button.button-with-icon.button-confirm');
                    if (submitBtn) {
                        submitBtn.addEventListener('click', (event) => {
                            // Mische publicationData und noteData vor dem Absenden
                            let publicationData = this.parentCtrl.formData.myPublicationDate;
                            let noteData = this.parentCtrl.formData.myNote;
                            let currentNote = noteData || '';
                            let alreadyCombined = currentNote.includes(publicationData);
                            let combinedNote = '';
                            if (!alreadyCombined) {
                                if (publicationData && noteData) {
                                    combinedNote = publicationData + ' | ' + noteData;
                                } else if (publicationData) {
                                    combinedNote = publicationData;
                                } else if (noteData) {
                                    combinedNote = noteData;
                                }
                                this.parentCtrl.formData.myNote = combinedNote;
                            }
                        }, true); // Capture-Phase
                        this._submitHandlerRegistered = true;
                    }
                }

                if (!isRefined || hasNoBestOfferClass || refineOfferDisabled) {
                    this.disableRequestButton();
                } else {
                    this.enableRequestButton();
                }

                let resetButton = angular.element(document.querySelector('span[translate="nui.reset"]'));
                if (resetButton && resetButton.parent()) {
                    resetButton.parent().addClass('hidden');
                }
                let getItNgrs = angular.element(document.querySelector('div.getItNgrs'));
                getItNgrs.addClass('physical-journal');

                //console.log('podID:', this.parentCtrl._bestOffer.podId);

                /* reading room POD */
                if (this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '452167832730000041' ||
                    this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '452167827350000041' ||
                    this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '452497325370000041' ||
                    this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '452497929300000041' ||
                    this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '452084165700000041' ||
                    this.parentCtrl._bestOffer !== undefined && this.parentCtrl._bestOffer.podId == '529457897220000041') {

                    let pickupInfo = document.querySelectorAll('prm-service-ngrs');
                    angular.element(pickupInfo).addClass('reading-room');

                }
            }
            // neue Bedingung für Bücher
            if (!isPhysicalJournal && isPhysicalForm) {
                let getItNgrs = angular.element(document.querySelector('div.getItNgrs'));
                getItNgrs.addClass('physical-book');
            }
        }

        catch (e) {
            console.error("***SLSP*** an error occured: slsp Pickup Information Controller\n\n");
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

    disableRefineButton() {
        const requestButton = angular.element(document.querySelector('button[ng-if="$ctrl.refineOfferIsVisible()"]'));
        if (requestButton) {
            requestButton.attr('disabled', 'disabled');
        }
    }

    enableRefineButton() {
        const requestButton = angular.element(document.querySelector('button[ng-if="$ctrl.refineOfferIsVisible()"]'));
        if (requestButton) {
            requestButton.removeAttr('disabled');
        }
    }




}
slspRefineJournalRequestController.$inject = ['$scope'];
