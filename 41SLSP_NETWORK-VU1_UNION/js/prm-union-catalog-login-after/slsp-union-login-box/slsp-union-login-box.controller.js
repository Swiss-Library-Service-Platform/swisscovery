//-----------------RapidoHideLibrary------------------------------

export class slspUnionLoginBoxController {

    constructor($scope, $compile, $timeout, $rootScope, $window) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.$window = $window;
    }

    $onInit() {
        try {

            this.parentCtrl = this.afterCtrl.parentCtrl;



            //console.log(this.parentCtrl.directLoginService.userSessionManagerService.getInterfaceLanguage());
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
    getLanguage() {       
        let sms = this.$rootScope.$$childHead.$ctrl.userSessionManagerService;
        if (!sms) {
            return 'en';
        } else {
            return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
        }
    }
}

slspUnionLoginBoxController.$inject = ['$scope', '$compile', '$timeout', '$rootScope', '$window'];