export class ethLocationsFilterController {

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
            let filterButton = document.querySelectorAll('button[ng-if="$ctrl.displayFiltersButton && !$ctrl.locationsPrefilterActive"] svg');
            if (filterButton.length > 0) {
                angular.element(filterButton).replaceWith(this.$compile(this.filterLabel)(this.$scope));
            } else {
                // Stop the loop if the element is replaced
                this.filterButtonReplaced = true;
            }
        } catch (e) {
            console.error("***ETH*** an error occurred: ethLocationsFilterController\n\n");
            console.error(e.message);
        }
    }
}

ethLocationsFilterController.$inject = ['$timeout', '$scope', '$compile'];