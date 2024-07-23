//-----------------RapidoHideLibrary------------------------------

export class slspUnionLoginBoxController {

    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            
                this.parentCtrl = this.afterCtrl.parentCtrl;

                
                console.log();
                console.log(this.parentCtrl);
                //console.log(this.parentCtrl.cancelLogin());
                //console.log(this.parentCtrl.isUnionCatalogLogin());


 
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido hide Library\n\n");
            console.error(e.message);
        }
    }
    cancelUnionLogin() {
                    this.parentCtrl.cancelLogin();
                }
}

slspUnionLoginBoxController.$inject = ['$scope', '$compile', '$timeout'];