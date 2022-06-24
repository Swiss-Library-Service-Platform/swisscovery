

//--------CollapseOtherInst ---------------------------------------


export class slspCollapseOtherInstController {

    constructor($timeout, $scope) {
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            this.$scope.$watch('this.$ctrl.parentCtrl.almaInstitutionsList', (currentInstArray) => {

                if (angular.isArray(currentInstArray) && currentInstArray.length > 1) {
                   
                    this.$timeout(() => {
                        this.parentCtrl.isCollapsed = true;
                    }, 0);
        
                }
            })
            
        }
        catch (e) {
            console.error("***SLSP*** an error occured: slspCollapseOtherInstController\n\n");
            console.error(e.message);
        }
    }

}

slspCollapseOtherInstController.$inject =  ['$timeout', '$scope'];

