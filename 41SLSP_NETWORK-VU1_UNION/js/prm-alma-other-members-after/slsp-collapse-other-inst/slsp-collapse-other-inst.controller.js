

//--------CollapseOtherInst ---------------------------------------


export class slspCollapseOtherInstController {

    constructor( $scope, $compile) {
        this.$scope = $scope;
        this.$compile = $compile;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            console.log(this.parentCtrl);
            if (this.parentCtrl.serviceMode !== 'howovp' || this.parentCtrl.availabilityType === 'E') {
           
                this.parentCtrl.isCollapsed = true;
            }
            else  {
               
                    this.parentCtrl.isCollapsed = false;
            }
              

                if (this.parentCtrl.item.delivery.displayedAvailability == 'no_inventory') {
                        this.noItemAtPickupLocation = noItemAtPickupLocation ;
                        let noItemAtPickupLocation = document.querySelectorAll(`prm-alma-other-members:nth-child(2)`);
                        let htmlnoItemAtPickupLocation = `<div class="bar alert-bar zero-margin-bottom layout-align-center-center layout-row"><span class="center" translate="customized.alert.nolocations">​</span></div>`;
                        
                        let almaAlertBar = document.querySelectorAll('alma-htgi-svc');
                            
                            angular.element(noItemAtPickupLocation).prepend(this.$compile(htmlnoItemAtPickupLocation)(this.$scope)).addClass('noItemAtPickupLocation');
                            angular.element(almaAlertBar).addClass('alma-alert-bar-hide');
                }
            }
        
            
            
       
        catch (e) {
            console.error("***SLSP*** an error occured: slspCollapseOtherInstController\n\n");
            console.error(e.message);
        }
    }
 }


slspCollapseOtherInstController.$inject =  ['$scope', '$compile'];

