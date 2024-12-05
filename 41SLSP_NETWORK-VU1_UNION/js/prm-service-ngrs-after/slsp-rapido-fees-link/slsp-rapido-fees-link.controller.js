

//--------Rapido Fees Link ---------------------------------------


export class slspRapidoFeesLinkController {

    constructor( $scope, $compile ) {
        this.$scope = $scope;
        this.$compile = $compile;
        
    }

      
    $onInit() {
            try{
                this.parentCtrl = this.afterCtrl.parentCtrl;
                this.rapidoFeesLink = rapidoFeesLink;

                //console.log(this.parentCtrl);
                //console.log(this.parentCtrl.physicalBestOfferService.getPickupLocation());
                
                let rapidoFeesLink = document.querySelector('#rapidoOffer div.full-view-section-content prm-full-view-service-container div.section-head h4');
                let html = `<div class="rapidoFeesLink neutralized-button arrow-link-button md-button md-primoExplore-theme md-ink-ripple"><a href="${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesUrl')}" target="_blank"><span translate="customized.rapido.fees">see fees details via link</span><prm-icon link-arrow="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right" [display-mode]="::$ctrl.displayMode"><!----><md-icon ng-if="::($ctrl.iconDefinition &amp;&amp; !$ctrl.isCustom &amp;&amp; !$ctrl.isEmailMode())" md-svg-icon="primo-ui:chevron-right" role="presentation" class="md-primoExplore-theme"><svg id="chevron-right_cache76" width="100%" height="100%" viewBox="0 0 24 24" y="384" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            </svg></md-icon><!----><!----><prm-icon-after parent-ctrl="$ctrl"></prm-icon-after></prm-icon></a></div>`;
                        
                    angular.element(rapidoFeesLink).after(this.$compile(html)(this.$scope));
            }
                               
            
            catch(e){
                console.error("***SLSP*** an error occured: Rapido Fees Link\n\n");
                console.error(e.message);
            }
           
        }
    }

    slspRapidoFeesLinkController.$inject = ['$scope', '$compile'];
