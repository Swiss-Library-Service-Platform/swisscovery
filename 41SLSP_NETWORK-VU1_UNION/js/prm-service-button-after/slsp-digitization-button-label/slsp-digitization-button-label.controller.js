

//--------CollapseOtherInst ---------------------------------------


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
                               
               
                //if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type !== 'AlmaDigitization'){
                    
                this.digiButtonLabel = digiButtonLabel;
                let digiButtonLabel = document.querySelectorAll('prm-full-view-service-container prm-service-button button span[translate="AlmaDigitization"]');
                let html = `<div class="DigiButtonLabel">CHF</div>`;
                    
                    angular.element(digiButtonLabel).after(this.$compile(html)(this.$scope)).addClass('digiButton');
                //}
                //else {
                //    return
                //}

                
                    
                
            }, 0);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

  
}

slspDigitizationButtonLabelController.$inject =  [ '$scope', '$compile', '$timeout'];

