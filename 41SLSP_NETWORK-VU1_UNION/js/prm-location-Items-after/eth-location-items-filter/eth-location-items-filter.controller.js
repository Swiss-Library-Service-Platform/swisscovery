export class ethLocationItemsFilterController {

    constructor($timeout, $scope) {
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.$watch('this.$ctrl.parentCtrl.loc.location.librarycodeTranslation', (newValue, oldValue, scope) => {
               
                if(!scope.$ctrl.parentCtrl.isLocationsFilterVisible && newValue && newValue != ''){
                    
                    this.$scope.$watch('this.$ctrl.parentCtrl.loc.items', (currentItemsArray) => {

                        if (angular.isArray(currentItemsArray) && currentItemsArray.length > 1){
                    
                                this.$timeout(() => {
                                    scope.$ctrl.parentCtrl.isLocationsFilterVisible = true;
                                }, 0);
                    
                           }      
                    
                })
            }

            }, true);
           
            
    
                   
          
         
        }
        catch(e){
            console.error("***SLSP*** an error occured: ethLocationItemsFilterController\n\n");
            console.error(e.message);
        }
    }
}

ethLocationItemsFilterController.$inject = ['$timeout', '$scope'];

