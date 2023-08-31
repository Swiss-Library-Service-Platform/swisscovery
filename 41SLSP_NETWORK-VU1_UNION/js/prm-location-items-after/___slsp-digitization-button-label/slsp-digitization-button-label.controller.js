

//-------- ---------------------------------------


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
                               
               
                //if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type === 'AlmaItemDigitization'){
                this.digiItemButtonLabel = digiItemButtonLabel;
                let digiItemButtonLabel = document.querySelectorAll('prm-full-view-service-container md-list-item div prm-service-button button span[translate="AlmaItemDigitization"]');
                //let htmlItem = `<div class="DigiButtonLabel" translate="customized.fee.digi"></div>`;
                
                    
                    angular.element(digiItemButtonLabel).after(`<div class="DigiButtonLabel">CHF</div>`).addClass('digiButton');
                //}
                    //else {
                    //return
                //}
                
            }, 1000);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

  
}

slspDigitizationButtonLabelController.$inject =  [ '$scope', '$compile', '$timeout'];



//loc.items[0].listOfServices[0].type