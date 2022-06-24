
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
                if (this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '377067383680000041'){
                                                                                                                                                 
                    this.readingRoomPod = readingRoomPod;
                    let readingRoomPod = document.querySelectorAll('div[ng-if="$ctrl.physicalTileVisible"] prm-service-physical-best-offer .keep_for span');
                    let html = `<span class="reading-Room-Pod" translate="customized.rapido.readingroom"></span>`;
                       
                        angular.element(readingRoomPod).after(this.$compile(html)(this.$scope)).addClass('pod');
    
                    }
                    
                /*icon label*/
                if (this.parentCtrl.isdigitaloffer === true) {
                    this.iconLabel = iconLabel;
               
                    let iconLabel = document.querySelectorAll('#item-ngrs > div > div > div[ng-if="$ctrl.digitalTileVisible"] > prm-service-physical-best-offer > div > div.icon-wrapper > prm-icon > md-icon');
                    let html = `<div class="iconLabel">digi</div>`;
                   
                        
                        angular.element(iconLabel).after(this.$compile(html)(this.$scope)).addClass('icnLbl');
                    }

                     if (this.parentCtrl.isdigitaloffer !== true) {
                        this.iconLabel2 = iconLabel2 ;
                        let iconLabel2 = document.querySelectorAll('#item-ngrs > div > div > div[ng-if="$ctrl.physicalTileVisible"] > prm-service-physical-best-offer > div > div.icon-wrapper > prm-icon > md-icon');
                        let html2 = `<div class="iconLabel">courier</div>`;
                            
                            angular.element(iconLabel2).after(this.$compile(html2)(this.$scope)).addClass('icnLbl2');
                     }
                
            }, 2500);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

  
}

slspRapidoDigitalOfferController.$inject = ['$scope', '$compile', '$timeout'];
        

