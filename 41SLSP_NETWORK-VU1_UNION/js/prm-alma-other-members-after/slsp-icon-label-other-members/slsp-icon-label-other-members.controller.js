

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
                        let iconLabelOtherMembersE = document.querySelectorAll(`prm-alma-other-members[ng-if="$ctrl.ifShowOther('E')"] md-tab-content._md.md-active.md-no-scroll div md-content._md.md-primoExplore-theme md-list.md-primoExplore-theme`);
                        let htmlOtherMembersE = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g id="Outline_Icons"><g><path d="M155.98,92.26c0,35.19-28.5,63.72-63.66,63.72-35.16,0-63.3-29.68-63.3-64.87S55.9,30.44,89.77,29.08c.92-.04,1.83-.06,2.76-.06,35.16,0,63.45,28.05,63.45,63.24Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><path d="M89.77,29.08c-33.12,35.88-33.12,82.69,0,126.85" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><path d="M95.29,29.08c33.12,35.88,33.12,82.67,0,126.83" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="39.43" y1="56.62" x2="145.06" y2="56.62" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="29.04" y1="89.74" x2="155.98" y2="89.74" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="37.22" y1="122.86" x2="148.17" y2="122.86" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg></div><div class="iconLabel">Label-e</div></div>`;
                            
                            angular.element(iconLabelOtherMembersE).prepend(this.$compile(htmlOtherMembersE)(this.$scope)).addClass('icnLblOtherMembersE');
                }

                if (this.parentCtrl.availabilityType == "P") {
                    
                                        
                    this.iconLabelOtherMembersP2 = iconLabelOtherMembersP2 ;
                    let iconLabelOtherMembersP2 = document.querySelectorAll(`prm-alma-other-members[ng-if="$ctrl.ifShowOther('P')"] md-tab-content._md.md-active.md-no-scroll div md-content._md.md-primoExplore-theme md-list.md-primoExplore-theme`);
                    let htmlOtherMembersP2 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_4" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><rect x="32.65" y="139.75" width="119.7" height="12.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><rect x="38.95" y="70.45" width="107.1" height="69.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="164.95" y1="152.35" x2="20.05" y2="152.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="51.55" y1="70.45" x2="51.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="83.05" y1="70.45" x2="83.05" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="70.45" y1="70.45" x2="70.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="101.95" y1="70.45" x2="101.95" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="114.55" y1="70.45" x2="114.55" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="133.45" y1="70.45" x2="133.45" y2="139.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polygon points="158.65 70.45 26.35 70.45 92.5 32.65 158.65 70.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></svg></div><div class="iconLabel">Label-p2</div></div>`;
                        
                        angular.element(iconLabelOtherMembersP2).prepend(this.$compile(htmlOtherMembersP2)(this.$scope)).addClass('icnLblOtherMembersP2');
                }


          
                
            },0);   
        }
        
        catch(e){
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    
}

slspIconLabelOtherMembersController.$inject =  [ '$scope', '$compile', '$timeout'];

