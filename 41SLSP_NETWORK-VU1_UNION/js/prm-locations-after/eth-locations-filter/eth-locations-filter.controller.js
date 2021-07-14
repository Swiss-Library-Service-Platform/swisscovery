export class ethLocationsFilterController {

    constructor($timeout, $scope) {
        this.$timeout = $timeout;
        this.$scope = $scope;
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.$watch('this.$ctrl.parentCtrl.locations[0].location.librarycodeTranslation', (newValue, oldValue, scope) => {
                if(!scope.$ctrl.parentCtrl.isLocationsFilterVisible && newValue && newValue != ''){
                    this.$timeout(() => {
                        scope.$ctrl.parentCtrl.isLocationsFilterVisible = true;
                    }, 0);
                }
            }, true);
        }
        catch(e){
            console.error("***ETH*** an error occured: ethLocationsFilterController\n\n");
            console.error(e.message);
        }
    }
}

ethLocationsFilterController.$inject = ['$timeout', '$scope'];
