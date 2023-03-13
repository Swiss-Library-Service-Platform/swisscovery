//-----------------RapidoHideLibrary------------------------------

export class slspLoginBoxController {

    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;

                let buttonHelp = '<p class="parallelLoginDescription" translate="parallel.login.description1"><a href="https://help.switch.ch/eduid/" onclick="window.open(https://help.switch.ch/eduid/);return false;" class="md-primoExplore-theme" style="text-decoration:underline"></a></p>';
                let infoLabel = '<p class="parallelLoginDescription" style="color:#fff" translate="parallel.login.description2"></p>'

                let authMeth1 = angular.element(document.querySelectorAll(`prm-login div > md-content > md-list > md-list-item:nth-child(1)`));
                angular.element(authMeth1).append(this.$compile(buttonHelp)(this.$scope)).addClass('authMethSaml');

                let authMeth2 = angular.element(document.querySelectorAll(`prm-login div > md-content > md-list > md-list-item:nth-child(2)`));
                angular.element(authMeth2).append(this.$compile(infoLabel)(this.$scope)).addClass('authMethAlma');

                console.log('authentication Method', authMeth2);

                // this.$scope.$watch('this.$ctrl.afterCtrl.parentCtrl.authenticationMethods', (loginMethodArray) => {
                //     if (angular.isArray(loginMethodArray))
                //         angular.forEach(loginMethodArray, (method) => {
                //             if (
                //                 method.authenticationSystem === 'ALMA'
                //             ) {
                //                 return
                //             }
                //         })
                // })
            }, 0);
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido hide Library\n\n");
            console.error(e.message);
        }
    }
}

slspLoginBoxController.$inject = ['$scope', '$compile', '$timeout'];