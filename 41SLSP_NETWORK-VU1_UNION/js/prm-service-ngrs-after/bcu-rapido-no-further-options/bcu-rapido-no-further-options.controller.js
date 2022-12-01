export class bcuRapidoNoFurtherOptionsController {

    constructor($scope) {
        this.$scope = $scope;
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            let msg = this.parentCtrl.almaRSServiceAvailable;
            let isi = this.parentCtrl.isSignedIn();

            let rapidoSection = document.getElementById('rapidoOffer');
            let rapidoTOC = document.querySelector('button span[translate="brief.results.tabs.Get_it_from_other_locations"]');

            //console.log("msg:", this.parentCtrl.almaRSServiceAvailable, "isi:", this.parentCtrl.isSignedIn(), rapidoTOC.parentElement, rapidoSection);

            if (msg == "false" && isi == "true") {
                angular.element(rapidoSection).addClass('slsp-hide-rapido');
                angular.element(rapidoTOC.parentElement).addClass('slsp-hide-rapido');
            } else {
                if (angular.element(rapidoSection).hasClass('slsp-hide-rapido')) {
                    angular.element(rapidoSection).removeClass('slsp-hide-rapido');
                }
                if (angular.element(rapidoTOC.parentElement).hasClass('slsp-hide-rapido')) {
                    angular.element(rapidoTOC.parentElement).removeClass('slsp-hide-rapido');
                }
            }
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido no Further Options\n\n");
            console.error(e.message);
        }
    }

}

bcuRapidoNoFurtherOptionsController.$inject = ['$scope'];