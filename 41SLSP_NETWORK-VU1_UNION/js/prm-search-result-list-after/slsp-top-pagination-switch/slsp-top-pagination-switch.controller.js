

export class slspTopPaginationSwitchController {

    constructor($scope) {
        this.$scope = $scope;

    }
 
    $onInit() {
        try {
               this.parentCtrl = this.afterCtrl.parentCtrl;

               //console.log(this.parentCtrl);
               this.parentCtrl.enableTopPagination = false;
               //this.parentCtrl.hidePageNumber();
    
       
        } catch (e) {
            console.error("***SLSP*** an error occured: slsp-top-pagination-switch hide Library\n\n");
            console.error(e.message);
        }
    }
    
    
}

slspTopPaginationSwitchController.$inject = ['$scope'];