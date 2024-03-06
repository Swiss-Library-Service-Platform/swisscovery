/**
* @ngdoc module
* @name ethOkmLinkModule
*
* @description
*
* - integrate links to Open Knowledge Maps (Base and PubMed) in Primo VE.
* - Adds a facet group "Send my search to" with two links to OKM Base and OKM PubMed.
*
* <b>AngularJS Dependencies</b><br>
* Service /js/services {@link ETH.ethConfigService}<br>
* Service /js/services {@link ETH.ethOkmLinkConfig}<br>
*
* <b>CSS/Image Dependencies</b><br>
* CSS ./css/eth-okm-link.css
* IMG ./img/Logo_Open_Knowledge_Maps.jpg
*
*/
import {ethConfigService} from './services/eth-config.service';
import {ethOkmLinkConfig} from './eth-okm-link.config';
import {ethOkmLinkHtml} from './eth-okm-link.html';
import {ethOkmLinkController} from './eth-okm-link.controller';

export const ethOkmLinkModule = angular
    .module('ethOkmLinkModule', [])
        .factory('ethConfigService', ethConfigService)
        .factory('ethOkmLinkConfig', ethOkmLinkConfig)
        .controller('ethOkmLinkController', ethOkmLinkController)
        .component('ethOkmLinkComponent',{
            require: {prmFacet: '^^prmFacet' },
            restrict: 'E',
            bindings: {afterCtrl: '<'},
            controller: 'ethOkmLinkController',
            template: ethOkmLinkHtml
        })
