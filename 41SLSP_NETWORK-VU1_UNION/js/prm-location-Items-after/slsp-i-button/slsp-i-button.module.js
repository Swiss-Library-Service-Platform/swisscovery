

//--------"i" button ---------------------------------------

// angular
//     .module('slspIButton', [])

//     .controller('LibInfoController', [function () {
//         var vm = this;
//         vm.getLibrary = getLibrary;
//         vm.biblinkText = "Library";
//         vm.biblinkBase = "https:\/\/slsp.ch\/libraries";

//         function getLibrary() {
//             return vm.parentCtrl.currLoc.location.librarycodeTranslation;
//         }

//     }])

//     .component('prmLocationItemsAfter', {
//         bindings: { parentCtrl: '<' },
//         controller: 'LibInfoController',
//         template: '<div layout="row" class="LibInfo" layout-align="start center"><span class="md-subhead"><a ng-href="{{ $ctrl.biblinkBase }}" target="_blank"><img width="35px" ng-src="/discovery/custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/information.png" />{{ $ctrl.getLibrary() }}</a></span></div>'
//     });



    import {slspIButtonController} from './slsp-i-button.controller';
    import {slspIButtonHtml} from './slsp-i-button.html';

    export const slspIButtonModule = angular
        .module('slspIButtonModule', [])
            .controller('slspIButtonController', slspIButtonController)
            .component('slspIButtonComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIButtonController',
                template: slspIButtonHtml
            })