

//--------CollapseOtherInst ---------------------------------------


export class slspCollapseOtherInstController {

    constructor($scope) {
        
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            if (this.parentCtrl.serviceMode !== 'howovp') {
           
                this.parentCtrl.isCollapsed = true;
            }
            else {
                this.parentCtrl.isCollapsed = false;
            }
        
        }
            
            
       
        catch (e) {
            console.error("***SLSP*** an error occured: slspCollapseOtherInstController\n\n");
            console.error(e.message);
        }
    }
 }


slspCollapseOtherInstController.$inject =  ['$scope'];

