export class slspKeyboardFocusController {
    constructor($scope, $document) {
        this.$scope = $scope;
        this.$document = $document;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
        }
        catch (e) {
            console.error("***SLSP*** an error occured: Rapido Fees Link\n\n");
            console.error(e.message);
        }

        // === Fokussteuerung hinzufügen ===
        const body = angular.element(document.body);

        // Tastatur-Nutzung erkennen
        this.$document.on('keydown', (e) => {
            if (['Tab'].includes(e.key)) {
                body.addClass('using-keyboard');
            }
        });

        // Maus-/Touch-Nutzung erkennen
        this.$document.on('mousedown pointerdown', () => {
            body.removeClass('using-keyboard');
        });
    }

    $onDestroy() {
        // Event Listener sauber entfernen, wenn Controller zerstört wird
        this.$document.off('keydown');
        this.$document.off('mousedown');
        this.$document.off('pointerdown');
    }
}
slspKeyboardFocusController.$inject = ['$scope', '$document'];
