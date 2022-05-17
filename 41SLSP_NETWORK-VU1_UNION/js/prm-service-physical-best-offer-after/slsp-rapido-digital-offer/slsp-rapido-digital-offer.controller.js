
export class slspRapidoDigitalOfferController {

    constructor( $scope, $compile, $timeout ) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try{
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
                
                /* costs per page */
                if (this.parentCtrl.isdigitaloffer === true){
                
                this.rapidoCosts = rapidoCosts;
                let rapidoCosts = document.querySelectorAll('div[ng-if="$ctrl.digitalTileVisible"] .patron_cost.last_line');
                let html = `<div class="rapidoCosts" translate="customized.rapido.digi"></div>`;
                    
                    angular.element(rapidoCosts).after(this.$compile(html)(this.$scope));
                }
               
                
                /* reservation button */
                if (this.parentCtrl.bestoffer == undefined && this.parentCtrl.isdigitaloffer === true){
                
                    this.reservation = reservation;
                    let reservation = document.querySelectorAll('prm-service-physical-best-offer .get_it_btn_physical > span');
                    let html = `<div class="reservationButton" translate="customized.rapido.reservation"></div>`;
                       
                        angular.element(reservation).after(this.$compile(html)(this.$scope)).addClass('noOffer');
    
                    }
                    

                /* reading room POD */
                if (this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer.podId == '377063760090000041'){
                
                    this.readingRoomPod = readingRoomPod;
                    let readingRoomPod = document.querySelectorAll('prm-service-physical-best-offer .keep_for span');
                    let html = `<span class="reading-Room-Pod" translate="customized.rapido.readingroom"></span>`;
                       
                        angular.element(readingRoomPod).after(this.$compile(html)(this.$scope)).addClass('pod');
    
                    }
                    
                
            }, 0);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

  
}

slspRapidoDigitalOfferController.$inject = ['$scope', '$compile', '$timeout'];
        

