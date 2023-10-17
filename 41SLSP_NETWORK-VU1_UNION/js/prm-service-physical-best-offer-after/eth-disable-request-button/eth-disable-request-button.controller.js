export class ethDisableRequestButtonController {
    constructor($scope, $compile) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.journalRequest = '<span translate="customized.journal.request"> </span>';
        this.hasNoAlmaP = true; // Initialisiere die Variable als "true"
        this.hasLinkToSrc = false; // Initialisiere die Variable als "false"
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.processDoCheck = true;
            console.log(this.parentCtrl);
        } catch (e) {
            console.error("***ETH*** an error occurred: ethDisableRequestButtonController \n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        try {
            if (!this.processDoCheck || !document.querySelector('prm-service-physical-best-offer .offer_details .rota_line > div > span')) return;
            let noAvailableCopies = document.querySelector('span[translate="rapido.tiles.physical.no_best_offer.line_2"]');
            let noAvailableCopiesLine1 = document.querySelector('span[translate="rapido.tiles.physical.no_best_offer.line_1"]');
            let resType = this.parentCtrl.item.pnx.addata.ristype;
            let journalRequest = this.$compile(this.journalRequest)(this.$scope);
            let delCategory = this.parentCtrl.item.delivery.deliveryCategory;

            // Überprüfe, ob 'ALMA-P' im Array ist
            if (angular.isArray(delCategory) && delCategory.indexOf('Alma-P') !== -1) {
                this.hasNoAlmaP = false; // Setze die Variable auf "false", wenn 'ALMA-P' vorhanden ist
            }

            // Überprüfe auf linkType "linktorsrc"
            let linkArray = this.parentCtrl.item.delivery.link;
            if (angular.isArray(linkArray)) {
                for (let link of linkArray) {
                    if (link.linkType === 'linktorsrc') {
                        this.hasLinkToSrc = true; // Setze die Variable auf "true", wenn linkType "linktorsrc" vorhanden ist
                        break; // Breche die Schleife ab, da wir das Ergebnis gefunden haben
                    }
                }
            }

            let requestButton = document.querySelector('#get_it_btn_physical');

            console.log('hasNoAlmaP: ' + this.hasNoAlmaP + '\n' + 'resType: ' + resType + '\n' + 'noAvailableCopies: ' + noAvailableCopies + '\n' + 'hasLinkToSrc: ' + this.hasLinkToSrc + '\n' + 'requestButton: ' + requestButton);

            if (noAvailableCopies && resType == 'JOUR' && !this.hasLinkToSrc && !this.hasNoAlmaP) {
                // Button klickbar machen
                angular.element(requestButton).removeAttr('disabled');
                // Ausführung des "else" Codes
                angular.element(noAvailableCopies).replaceWith(journalRequest);
                angular.element(noAvailableCopiesLine1).remove();
            } else if (noAvailableCopies && resType !== 'JOUR') {
                // Button nicht klickbar machen
                angular.element(requestButton).attr('disabled', 'disabled');
            } else {
                // Ausführung des "else" Codes
                angular.element(noAvailableCopies).replaceWith(journalRequest);
                angular.element(noAvailableCopiesLine1).remove();
            }
           
            
            this.processDoCheck = false;
        } catch (e) {
            console.error("***ETH*** an error occurred: ethDisableRequestButtonController $doCheck\n\n");
            console.error(e.message);
        }
    }
}

ethDisableRequestButtonController.$inject = ['$scope', '$compile'];
