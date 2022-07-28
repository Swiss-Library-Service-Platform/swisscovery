

//--------slspIconLabel ---------------------------------------


export class slspIconLabelLocationItemsController {

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
                    
                        this.iconLabelLocationItems = iconLabelLocationItems ;
                        let iconLabelLocationItems = document.querySelectorAll("#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-opac md-content > prm-location-items > md-list.separate-list-items.margin-left-medium.md-primoExplore-theme.layout-column");
                        let htmlLocationItems = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                                                                                        
                            angular.element(iconLabelLocationItems).prepend(this.$compile(htmlLocationItems)(this.$scope)).addClass('icnLblLocationItems');
                }
                if (this.parentCtrl.serviceScrollId === "getit_link1_1") {
                    
                    this.iconLabelLocationItems3 = iconLabelLocationItems3 ;
                    let iconLabelLocationItems3 = document.querySelectorAll("#getit_link1_1 > div > prm-full-view-service-container > div.section-body > div > prm-opac md-content > prm-location-items > md-list.separate-list-items.margin-left-medium.md-primoExplore-theme.layout-column");
                    let htmlLocationItems3 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                                                                                    
                        angular.element(iconLabelLocationItems3).prepend(this.$compile(htmlLocationItems3)(this.$scope)).addClass('icnLblLocationItems3');
            }





                if (this.parentCtrl.serviceScrollId === "alma_other_members") {
                    
                    this.iconLabelLocationItems2 = iconLabelLocationItems2 ;
                    let iconLabelLocationItems2 = document.querySelectorAll("prm-alma-other-members md-content > prm-location-items > md-list.separate-list-items.margin-left-medium.md-primoExplore-theme.layout-column");
                    let htmlLocationItems2 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                                                                                    
                        angular.element(iconLabelLocationItems2).prepend(this.$compile(htmlLocationItems2)(this.$scope)).addClass('icnLblLocationItems2');
            }


                         
                
            },0);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    
}

slspIconLabelLocationItemsController.$inject =  [ '$scope', '$compile', '$timeout'];

