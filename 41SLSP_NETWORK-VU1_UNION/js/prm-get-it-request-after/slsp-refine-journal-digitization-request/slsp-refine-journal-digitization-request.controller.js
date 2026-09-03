//-----------------------------------------------


export class slspRefineJournalDigitizationRequestController {

    constructor($scope) {
        this.$scope = $scope;

    }


    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            

            let isDigitalForm = this.parentCtrl.opendigitalform.openDigitalForm;
            let isPhysicalJournal = this.parentCtrl.isPhysicalJournal();
            this.isDigitalForm = isDigitalForm;
            this.isPhysicalJournal = isPhysicalJournal;

            //console.log('isPhysicalJournal', isPhysicalJournal);
            //console.log('opendigitalform', this.parentCtrl.opendigitalform.openDigitalForm);
            //console.log('parentCtrl', this.parentCtrl);

            if (isPhysicalJournal && isDigitalForm) {
                this.ensureRefineButtonBeforeConfirm();
            }
        }

        catch (e) {
            console.error("***SLSP*** an error occured: slsp Refine Journal Digitization Request Controller\n\n");
            console.error(e.message);
        }

    }



    ensureRefineButtonBeforeConfirm() {
        const confirmButton = document.querySelector('#digitalGetItRequest button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple');
        const movedRefineButton = confirmButton && confirmButton.parentNode
            ? confirmButton.parentNode.querySelector('.md-button.button-with-icon.slsp-refine-moved')
            : null;
        const refineButton = document.querySelector('#digitalGetItRequest prm-offer-details-tile .refine-offer-button .md-button.button-with-icon:not(.slsp-refine-moved)');

        // console.log('Refine button:', refineButton);
        // console.log('Confirm button:', confirmButton);

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
slspRefineJournalDigitizationRequestController.$inject = ['$scope'];
