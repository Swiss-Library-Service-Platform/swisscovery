

//--------slspIconLabel ---------------------------------------


export class slspIconLabelLocationsController {

    constructor( $scope, $compile, $timeout ) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    

    $onInit() {
        try{
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
                
                if (this.parentCtrl.serviceScrollId === "getit_link1_0") {
                    
                        this.iconLabelLocations = iconLabelLocations ;
                        let iconLabelLocations = document.querySelectorAll('prm-opac md-tab-content md-content > prm-locations > div.padding-left-medium[ng-if="!$ctrl.enableLibraryLevelList"] > md-list:nth-child(1)');
                        let htmlLocations = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><g><circle cx="130" cy="130" r="10.57" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><path d="M145.26,152.31c-4.34,2.98-9.6,4.69-15.26,4.69-14.91,0-27-12.09-27-27s12.09-27,27-27,27,12.09,27,27v2.35c0,4.54-3.68,8.21-8.21,8.21s-8.22-3.68-8.22-8.21v-2.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g><g><path d="M88.91,130H37c-4.97,0-9-4.03-9-9V55c0-4.96,4.03-9,9-9h108c4.97,0,9,4.04,9,9v42.32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polyline points="151 49 91 97 31 49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg></div><div class="iconLabel">Locations</div></div>`;
                            
                            angular.element(iconLabelLocations).prepend(this.$compile(htmlLocations)(this.$scope)).addClass('icnLblLocations');
                }

               
          
                
            },1000);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    
}

slspIconLabelLocationsController.$inject =  [ '$scope', '$compile', '$timeout'];

