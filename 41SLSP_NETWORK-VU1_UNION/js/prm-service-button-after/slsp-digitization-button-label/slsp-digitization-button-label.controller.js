

//--------slspDigitizationButtonLabelController ---------------------------------------


export class slspDigitizationButtonLabelController {

    constructor( $scope, $compile, $timeout ) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try{
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
                               
               
                if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type === 'AlmaDigitization'){
                    
                this.digiButtonLabel = digiButtonLabel;
                let digiButtonLabel = document.querySelectorAll('prm-full-view-service-container prm-service-button button span[translate="AlmaDigitization"]');
                let html = `<div class="DigiButtonLabel1">CHF</div>`;
                    
                    angular.element(digiButtonLabel).after(html).addClass('digiButton');
                }
                

                if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type === 'AlmaItemDigitization'){
                    this.digiItemButtonLabel = digiItemButtonLabel;
                    let digiItemButtonLabel = document.querySelectorAll('prm-full-view-service-container prm-service-button button span[translate="AlmaItemDigitization"]');
                    
                    //let htmlItem = `<div class="DigiButtonLabel" translate="customized.fee.digi"></div>`;
                    
                        
                        angular.element(digiItemButtonLabel).append(`<div class="DigiButtonLabel">CHF</div>`).addClass('digiButton');
                    }
                        else {
                        return
                    }
                    
                
                
            }, 1000);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

  
}

slspDigitizationButtonLabelController.$inject =  [ '$scope', '$compile', '$timeout'];

