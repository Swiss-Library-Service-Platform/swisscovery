

//--------CollapseRelated ---------------------------------------


export class slspCollapseRelatedController {

    constructor($timeout, $scope) {
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

                if (angular.isArray(this.parentCtrl.locations) && this.parentCtrl.locations.length > 0) {
    
                this.parentCtrl.relatedLocationsListLimit = 0;

                }
              
    }    
            
       
        catch (e) {
            console.error("***SLSP*** an error occured: slspCollapseRelatedController\n\n");
            console.error(e.message);
        }
    }
 }


slspCollapseRelatedController.$inject =  ['$timeout', '$scope'];

