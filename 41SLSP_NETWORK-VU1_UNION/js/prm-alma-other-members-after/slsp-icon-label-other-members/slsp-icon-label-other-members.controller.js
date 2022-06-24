

//--------slspIconLabel ---------------------------------------


export class slspIconLabelOtherMembersController {

    constructor( $scope, $compile, $timeout ) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    

    $onInit() {
        try{
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
                
                if (this.parentCtrl.availabilityType == "E") {
                    
                        this.iconLabelOtherMembersE = iconLabelOtherMembersE ;
                        let iconLabelOtherMembersE = document.querySelectorAll("#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-alma-other-members:nth-child(2) md-tab-content._md.md-active.md-no-scroll div md-content._md.md-primoExplore-theme md-list.md-primoExplore-theme");
                        let htmlOtherMembersE = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><g><circle cx="130" cy="130" r="10.57" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><path d="M145.26,152.31c-4.34,2.98-9.6,4.69-15.26,4.69-14.91,0-27-12.09-27-27s12.09-27,27-27,27,12.09,27,27v2.35c0,4.54-3.68,8.21-8.21,8.21s-8.22-3.68-8.22-8.21v-2.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g><g><path d="M88.91,130H37c-4.97,0-9-4.03-9-9V55c0-4.96,4.03-9,9-9h108c4.97,0,9,4.04,9,9v42.32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polyline points="151 49 91 97 31 49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                            
                            angular.element(iconLabelOtherMembersE).prepend(this.$compile(htmlOtherMembersE)(this.$scope)).addClass('icnLblOtherMembersE');
                }

                if (this.parentCtrl.availabilityType == "P") {
                    
                    this.iconLabelOtherMembersP = iconLabelOtherMembersP ;
                    let iconLabelOtherMembersP = document.querySelectorAll('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-alma-other-members:nth-child(3) md-tab-content._md.md-active.md-no-scroll div md-content._md.md-primoExplore-theme md-list.md-primoExplore-theme');
                    let htmlOtherMembersP = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_4" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                        
                        angular.element(iconLabelOtherMembersP).prepend(this.$compile(htmlOtherMembersP)(this.$scope)).addClass('icnLblOtherMembersP');
                }

                if (this.parentCtrl.availabilityType == "P") {
                    
                    this.iconLabelOtherMembersP2 = iconLabelOtherMembersP2 ;
                    let iconLabelOtherMembersP2 = document.querySelectorAll('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-alma-other-members md-tab-content._md.md-active.md-no-scroll div md-content._md.md-primoExplore-theme md-list.md-primoExplore-theme');
                    let htmlOtherMembersP2 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_4" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label</div></div>`;
                        
                        angular.element(iconLabelOtherMembersP2).prepend(this.$compile(htmlOtherMembersP2)(this.$scope)).addClass('icnLblOtherMembersP2');
                }


          
                
            },1000);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    
}

slspIconLabelOtherMembersController.$inject =  [ '$scope', '$compile', '$timeout'];

