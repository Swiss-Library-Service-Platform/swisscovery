/**
* @ngdoc module
* @name ethArchivesGetitModule
*
* @description
*
* - Text and links for resources of archives MFA, TMA, HSA (cmistar)
* - HSA contains online resources (-> viewit-after), the other archives not ( -> htgi-svc-after ).
*
* <b>AngularJS Dependencies</b><br>
* Service /services {@link ETH.ethConfigService}<br>
*
*
* <b>CSS/Image Dependencies</b><br>
* CSS eth-archives-getit.css
*
*
*/
import {ethConfigService} from './services/eth-config.service';
import {ethArchivesGetitConfig} from './eth-archives-getit.config';
import {ethArchivesGetitController} from './eth-archives-getit.controller';
import {ethArchivesGetitHtml} from './eth-archives-getit.html';

export const ethArchivesGetitModule = angular
    .module('ethArchivesGetitModule', [])
        .factory('ethConfigService', ethConfigService)
        .factory('ethArchivesGetitConfig', ethArchivesGetitConfig)
        .controller('ethArchivesGetitController', ethArchivesGetitController)
        .component('ethArchivesGetitComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'ethArchivesGetitController',
            template: ethArchivesGetitHtml
        })
