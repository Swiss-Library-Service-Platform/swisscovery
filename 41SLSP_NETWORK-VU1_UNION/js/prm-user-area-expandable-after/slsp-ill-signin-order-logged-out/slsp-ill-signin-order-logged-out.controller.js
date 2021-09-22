
export class slspIllSigninOrderLoggedOutController {

    constructor(slspIllSigninOrderLoggedOutService, $scope) {
        this.slspIllSigninOrderLoggedOutService = slspIllSigninOrderLoggedOutService;
        this.$scope = $scope;
    }

    $doCheck() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.usrNme = this.slspIllSigninOrderLoggedOutService.isGuest();

            if (this.$scope.usrNme == true) {
                let myEl = angular.element(document.querySelector('primo-explore'));
                return myEl.addClass('logged-out')
            }
        
            else {
                let myEl = angular.element(document.querySelector('primo-explore'));
                return myEl.removeClass('logged-out');
            }
        }
        catch(e){
            console.error("***SLSP*** an error occured: slspIllSigninOrderLoggedOutController\n\n");
            console.error(e.message);
        }
    }
}

slspIllSigninOrderLoggedOutController.$inject = ['slspIllSigninOrderLoggedOutService', '$scope'];
        

