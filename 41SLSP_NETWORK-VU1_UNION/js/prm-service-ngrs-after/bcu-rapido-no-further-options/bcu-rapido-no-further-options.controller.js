export class bcuRapidoNoFurtherOptionsController {

    constructor($scope) {   
        this.$scope = $scope;    
    }
      
    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            let msg = this.parentCtrl.almaRSServiceAvailable;
            let isi = this.parentCtrl.isSignedIn();
            let elem = document.getElementById('rapidoOffer');
            let span = document.querySelector('button span[translate="brief.results.tabs.Get_it_from_other_locations"]');
            
            if (elem !== null && span !== null && msg == "false" && isi == "true") {
                elem.remove();
                span.parentElement.remove();
            }
        }
        catch(e){
            console.error("***SLSP*** an error occured: Rapido no Further Options\n\n");
            console.error(e.message);
        }
    }
    
}

bcuRapidoNoFurtherOptionsController.$inject = ['$scope'];