

    //--------ILL Signin Order -  if logged out ---------------------------------------
   

angular
    .module('slspIllSigninOrderLoggedOut', [])

    .service('userService', ['jwtHelper', function (jwtHelper) {
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


    .controller('IllBoxController', ['$scope', 'userService', function ($scope, userService) {

    $scope.usrNme = userService.isGuest();

    if ($scope.usrNme == true) {
        var myEl = angular.element(document.querySelector('primo-explore'));
        return myEl.addClass('logged-out')
    }

    else {
        var myEl = angular.element(document.querySelector('primo-explore'));
        return myEl.removeClass('logged-out');
    }


}])

.component('prmUserAreaExpandableAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'IllBoxController',
    template: ''
});

