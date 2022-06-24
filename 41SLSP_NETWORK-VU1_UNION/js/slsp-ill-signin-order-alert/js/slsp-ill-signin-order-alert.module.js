//--------ILL Signin Order -  if Alert Message ---------------------------------------

angular
    .module('slspIllSigninOrderAlert', [])

    .controller('AlertMsgController', ['$scope', function ($scope) {
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

    }])

    .component('almaHowovpAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'AlertMsgController',
        template: '<div style="display:none">{{$ctrl.getAlert()}}</div><slsp-howovp-after parent-ctrl="$parent.$ctrl"></slsp-howovp-after>'
    });
