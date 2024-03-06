// slspOvpItemReservationController.js

export class slspOvpItemReservationController {
    constructor($scope, $element, $compile) {
        this.$scope = $scope;
        this.$element = $element;
        this.$compile = $compile;
        this.itemReservationLabel = '<span translate="customized.rapido.reservation"></span>';
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.processDoCheck = true;
        } catch (e) {
            console.error("***ETH*** Ein Fehler ist aufgetreten: slspOvpItemReservationController \n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        try {
           let unavailability = this.parentCtrl.currLoc.location.singleUnavailableItemProcessType;

            // Hier das DOM-Element der Angular-Komponente abrufen
            let currentElement = this.$element[0];

            // Das Elternelement ("md-list-item") der Angular-Komponente abrufen
            let prmOpacElement = currentElement.closest('md-list-item');

            // Den Button innerhalb des aktuellen "md-list-item" Teils auswählen
            let itemReservationButton = prmOpacElement.querySelector('prm-service-button button span[translate="AlmaItemRequest"]');

            if (!this.processDoCheck && unavailability !== null) {
                // Überprüfen, ob das Element gefunden wurde, bevor auf innerHTML zugegriffen wird
                if (itemReservationButton && !itemReservationButton.innerHTML.includes('customized.rapido.reservation')) {
                    // Element mit "itemReservationLabel" ersetzen
                    let compiledHtml = this.$compile(this.itemReservationLabel)(this.$scope);
                    angular.element(itemReservationButton).replaceWith(compiledHtml);
                }
            }
            //console.log(this.parentCtrl.currLoc);
            this.processDoCheck = false;
        } catch (e) {
            console.error("***SLSP*** Ein Fehler ist aufgetreten: slspOvpItemReservationController \n\n");
            console.error(e.message);
        }
    }
}

slspOvpItemReservationController.$inject = ['$scope', '$element', '$compile'];
