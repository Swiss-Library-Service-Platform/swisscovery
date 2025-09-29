export class ethDisableRequestButtonController {
    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.journalRequest = '<span translate="customized.journal.request"> </span>';
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.observeDomChanges();
        } catch (e) {
            console.error("***ETH*** an error occurred: ethDisableRequestButtonController $onInit\n\n");
            console.error(e.message);
        }
    }

    observeDomChanges() {
        const targetNode = document.querySelector('prm-service-physical-best-offer');

        if (!targetNode) {
            console.error('***ETH*** Target element not found for DOM observation');
            return;
        }

        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.checkAndHandleButton(targetNode);
                }
            }
        });

        observer.observe(targetNode, config);
    }

    checkAndHandleButton(targetNode) {
        try {
            let noAvailableCopies = targetNode.querySelector('[translate="rapido.tiles.physical.no_best_offer.line_2"]');
            let noAvailableCopiesLine1 = targetNode.querySelector('[translate="rapido.tiles.physical.no_best_offer.line_1"]');
            let requestButton = targetNode.querySelector('#get_it_btn_physical');
            let noPersonalDelivery = targetNode.querySelector('[translate="nui.ngrs.pickup.information.noPersonalDeliveryOffer"]');

            // Button deaktivieren, wenn noPersonalDelivery vorhanden ist
            if (noPersonalDelivery && requestButton) {
                angular.element(requestButton).attr('disabled', 'disabled');
                return;
            }

            // Standardfall: Button deaktivieren, falls keine Exemplare verfügbar sind
            if (noAvailableCopies && requestButton) {
                angular.element(requestButton).attr('disabled', 'disabled');
            }

            // Zusätzliche Logik: Überprüfen, ob es sich um ein Journal handelt und ob Alma-P verfügbar ist
            let resType = this.parentCtrl.item.pnx.addata.ristype;
            let delCategory = this.parentCtrl.item.delivery.deliveryCategory;
            let almaInstitutionsList = this.parentCtrl.item.delivery.almaInstitutionsList;

            let hasAlmaP = angular.isArray(delCategory) && delCategory.includes('Alma-P');
            if (angular.isArray(almaInstitutionsList)) {
                const hasAvailableInInstitution = almaInstitutionsList.some(
                    institution => institution.availabilityStatus === "available_in_institution"
                );
                hasAlmaP = hasAlmaP || hasAvailableInInstitution;
            }

            // Falls es sich um ein Journal handelt und Alma-P verfügbar ist, Button aktivieren
            if (String(resType) === 'JOUR' && hasAlmaP && requestButton) {
                // Sofort aktivieren, wenn alles da ist
                angular.element(requestButton).removeAttr('disabled');
                if (noAvailableCopies) {
                    // Sicherstellen, dass das Element existiert und einen Parent hat
                    if (noAvailableCopies.parentNode) {
                        angular.element(noAvailableCopies).replaceWith(this.$compile(this.journalRequest)(this.$scope));
                    }
                }
                if (noAvailableCopiesLine1) {
                    angular.element(noAvailableCopiesLine1).remove();
                }
                console.log('Button enabled and noAvailableCopies replaced');
            } else {
                console.log('Conditions not met: Button remains disabled');
            }
        } catch (e) {
            console.error("***ETH*** an error occurred in checkAndHandleButton\n\n");
            console.error(e.message);
        }
    }
}

ethDisableRequestButtonController.$inject = ['$scope', '$compile', '$timeout'];
