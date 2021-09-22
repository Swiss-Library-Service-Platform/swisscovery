/**
* @ngdoc module
* @name bcuLangSwitchModule
*
* @description
* - Add LangSwitch to user area
* @example
* each view
*
*/
import {bcuLangSwitchController} from './bcu-lang-switch.controller';

export const bcuLangSwitchModule = angular
    .module('bcuLangSwitchModule', [])
        .controller('bcuLangSwitchController', bcuLangSwitchController)
        .component('bcuLangSwitchComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'bcuLangSwitchController',
//            template: '<button class="md-button md-lang-button" ng-repeat="(lang, url) in $ctrl.languages" ng-class="{active: $ctrl.afterCtrl.parentCtrl.lang == lang}"><a href="{{url}}">{{lang}}</a></button>'
            template: '<button class="md-button md-lang-button" ng-repeat="lang in $ctrl.languages" ng-class="{active: $ctrl.afterCtrl.parentCtrl.lang == lang}" ng-click="$ctrl.changeLanguage(lang)">{{lang}}</button>'
        })
