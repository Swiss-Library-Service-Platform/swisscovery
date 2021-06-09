(function () {


    var app = angular.module('centralCustom', ['angularLoad']);

    //--------Fees messages ---------------------------------------

    app.controller('CourierInfoController', ['$element', function ($element) {

        //shortcut for convenience

        this.form = $element[0].parentElement;

        //function for inserting block

        this.$doCheck = function () {
            let form = false;
            if (this.form.children[1].children[1] !== undefined &&
        this.form.children[1].children[1].children[0] !== undefined) {
                form = this.form.children[1].children[1].children[0];
            }
            else if (this.form.children[1].children[0] !== undefined &&
            this.form.children[1].children[0].children[0] !== undefined) {
                form = this.form.children[1].children[0].children[0];
            }

            //create and insert info block if not present

            if (form && form.children.length == 2) {
                let info = document.createElement('DIV');
                info.className = "courier-info bar alert-bar";
                info.innerHTML =
                `<h4>${this.parentCtrl.$translate.instant('customize.fullview.feesTitle')}</h4>
		<p>${this.parentCtrl.$translate.instant('customize.fullview.feesInfo')}</p>
		<p><a href="${this.parentCtrl.$translate.instant('customize.fullview.feesUrl')}"
		target="_blank">${this.parentCtrl.$translate.instant('customize.fullview.feesLinkText')}</a></p>`;
                form.insertBefore(info, form.children[1]);
            }
        }
    }]);

    app.component('prmRequestAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'CourierInfoController'
    });

    //--------"i" button ---------------------------------------

    app.controller('LibInfoController', [function () {
        var vm = this;
        vm.getLibrary = getLibrary;
        vm.biblinkText = "Library";
        vm.biblinkBase = "https:\/\/slsp.ch\/libraries";

        function getLibrary() {
            return vm.parentCtrl.currLoc.location.librarycodeTranslation;
        }

    }]);

    app.component('prmLocationItemsAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'LibInfoController',
        template: '<div layout="row" class="LibInfo" layout-align="start center"><span class="md-subhead"><a ng-href="{{ $ctrl.biblinkBase }}" target="_blank"><img width="35px" ng-src="/discovery/custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png" />{{ $ctrl.getLibrary() }}</a></span></div>'
    });


    //--------ILL Signin Order -  if logged out ---------------------------------------
    app.service('userService', ['jwtHelper', function (jwtHelper) {
        this.isGuest = function () {
            var jwt = sessionStorage.getItem('primoExploreJwt');
            if (!jwt) {
                return true;
            }
            var decodedToken = jwtHelper.decodeToken(jwt);
            let userName = decodedToken.userGroup !== 'GUEST' ? decodedToken.userName : '';
            if (userName) {
                return false
            }
            else {
                return true;
            }
        }
    }])


    app.controller('IllBoxController', function ($scope, userService) {

        $scope.usrNme = userService.isGuest();

        if ($scope.usrNme == true) {
            var myEl = angular.element(document.querySelector('primo-explore'));
            return myEl.addClass('logged-out')
        }

        else {
            var myEl = angular.element(document.querySelector('primo-explore'));
            return myEl.removeClass('logged-out');
        }


    });

    app.component('prmUserAreaExpandableAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'IllBoxController',
        template: ''
    });

    //--------ILL Signin Order -  if Alert Message ---------------------------------------


    app.controller('AlertMsgController', ['$scope', function ($scope) {
        var vm = this;
        vm.getAlert = getAlert

        function getAlert() {
            var ga = vm.parentCtrl.almaHowToGetitService.reqAlert._htmlMsg;
            var myEl2 = angular.element(document.querySelector('primo-explore'));

            if (ga.length > 0) {
                return myEl2.addClass('alert');

            }
            else {

                return myEl2.removeClass('alert');

            }
        }

    }]);

    app.component('almaHowovpAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'AlertMsgController',
        template: '<div style="display:none">{{$ctrl.getAlert()}}</div>'
    });

})();