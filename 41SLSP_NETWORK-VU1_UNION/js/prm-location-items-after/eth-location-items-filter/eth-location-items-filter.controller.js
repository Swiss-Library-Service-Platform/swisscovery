export class ethLocationItemsFilterController {

    constructor($timeout, $scope, $compile) {
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.$compile = $compile;
        this.filterLabel = '<span class="filter-label" translate="nui.aria.locationItems.filters"></span>';
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
  
            // Check if the filter button exists
            let filterButton = document.querySelectorAll('button[ng-if="($ctrl.isFilter || $ctrl.isFiltered) && $ctrl.isAnyFilterFilled()"] svg');
            if (filterButton.length > 0) {
                angular.element(filterButton).replaceWith(this.$compile(this.filterLabel)(this.$scope));
            } else {
                // Stop the loop if the element is replaced
                this.filterButtonReplaced = true;
            }
         
         
        }
        catch(e){
            console.error("***SLSP*** an error occured: ethLocationItemsFilterController\n\n");
            console.error(e.message);
        }
    }
}

ethLocationItemsFilterController.$inject = ['$timeout', '$scope', '$compile'];
