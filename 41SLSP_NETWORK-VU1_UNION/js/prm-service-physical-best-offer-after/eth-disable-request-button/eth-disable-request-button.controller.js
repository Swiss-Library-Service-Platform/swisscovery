export class ethDisableRequestButtonController {

    constructor($timeout) {
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.observeDomChanges();
        } catch (e) {
            console.error("***slsp*** an error occurred: ethDisableRequestButtonController $onInit \n\n");
            console.error(e.message);
        }
    }

    observeDomChanges() {
        const targetNode = document.querySelector('prm-service-physical-best-offer'); // Das zu beobachtende Element

        if (!targetNode) {
            console.error('***slsp*** Target element not found for DOM observation');
            return;
        }

        const config = { childList: true, subtree: true }; // Konfiguration für Änderungen in den Kind-Elementen und Unterelementen

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.checkAndDisableButton(targetNode);
                }
            }
        });

        // Start der Beobachtung
        observer.observe(targetNode, config);

        // Beobachtung nach Bedarf beenden (falls nötig)
        // observer.disconnect();
    }

    checkAndDisableButton(targetNode) {
        try {
            let noAvailableCopies = targetNode.querySelector('[translate="rapido.tiles.physical.no_best_offer.line_2"]');
            if (noAvailableCopies) {
                let requestButton = targetNode.querySelector('#get_it_btn_physical');
                if (requestButton) {
                    angular.element(requestButton).attr('disabled', 'disabled');
                }
            }
        } catch (e) {
            console.error("***slsp*** an error occurred in checkAndDisableButton\n\n");
            console.error(e.message);
        }
    }
}

ethDisableRequestButtonController.$inject = ['$timeout'];
