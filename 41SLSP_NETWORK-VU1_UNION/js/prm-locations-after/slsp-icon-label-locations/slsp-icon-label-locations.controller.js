

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
                        let iconLabelLocations = document.querySelectorAll('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-opac md-tab-content md-content > prm-locations > div.padding-left-medium[ng-if="!$ctrl.enableLibraryLevelList"] > md-list:nth-child(1)');
                        let htmlLocations = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Locations</div></div>`;
                            
                            angular.element(iconLabelLocations).prepend(this.$compile(htmlLocations)(this.$scope)).addClass('icnLblLocations');
                }
                if (this.parentCtrl.serviceScrollId === "getit_link1_1") {
                    
                    this.iconLabelLocations3 = iconLabelLocations3 ;
                    let iconLabelLocations3 = document.querySelectorAll('#getit_link1_1 > div > prm-full-view-service-container > div.section-body > div > prm-opac md-tab-content md-content > prm-locations > div.padding-left-medium[ng-if="!$ctrl.enableLibraryLevelList"] > md-list:nth-child(1)');
                    let htmlLocations3 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Locations</div></div>`;
                        
                        angular.element(iconLabelLocations3).prepend(this.$compile(htmlLocations3)(this.$scope)).addClass('icnLblLocations3');
            }





                if (this.parentCtrl.serviceScrollId === "alma_other_members") {
                    
                    this.iconLabelLocations2 = iconLabelLocations2 ;
                    let iconLabelLocations2 = document.querySelectorAll('prm-alma-other-members prm-opac md-tab-content md-content > prm-locations > div.padding-left-medium[ng-if="!$ctrl.enableLibraryLevelList"] > md-list:nth-child(1)');
                    let htmlLocations2 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Locations2</div></div>`;
                        
                        angular.element(iconLabelLocations2).prepend(this.$compile(htmlLocations2)(this.$scope)).addClass('icnLblLocations2');
            }
               
          
                
            },0);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    
}

slspIconLabelLocationsController.$inject =  [ '$scope', '$compile', '$timeout'];



// md-content > prm-locations > div.padding-left-medium > md-list.separate-list-items.margin-bottom-medium.padding-bottom-zero.md-primoExplore-theme
