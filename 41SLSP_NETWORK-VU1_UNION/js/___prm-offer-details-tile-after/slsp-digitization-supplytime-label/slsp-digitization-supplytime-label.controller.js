export class slspIButtonController {

    constructor($scope, $rootScope) {
        this.$scope = $scope;

        this.$rootScope = $rootScope;

        this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?library\=";
    }

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.getLibrary = this.getLibrary.bind(this);
        this.getLibraryCode = this.getLibraryCode.bind(this);
        this.getLanguage = this.getLanguage.bind(this);
    }

    getLibrary() {
        if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
            return this.parentCtrl.currLoc.location.librarycodeTranslation;
        } else {
            return;
        }
    }

    getLibraryCode() {
        if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
            return this.parentCtrl.currLoc.location.libraryCode;
        } else {
            return;
        }
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

slspIButtonController.$inject = ['$scope', '$rootScope'];