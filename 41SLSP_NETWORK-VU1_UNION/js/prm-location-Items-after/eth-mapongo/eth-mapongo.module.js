/**
 * @ngdoc module
 * @name ethMapongoModule
 *
 * @description
 * - renders Link, map and QRCode for mapongo
 *
 *
 * <b>AngularJS Dependencies</b><br>
 * Service {@link ETH.ethMapongoLibrariesService}<br>
 * Service /js/services {@link ETH.ethConfigService}<br>
 * Service {@link ETH.ethMapongoConfig}<br>
 *
 *
 * <b>CSS/Image Dependencies</b><br>
 * CSS /css/mapongo.css
 *
 * @example
 * ZHAW MMS IDs: 991128155109705501, 990013732410205503; 2 Exemplare: 990058665580205503; 5 Exemplare: 991129451879705501
 *
 */
import { ethConfigService } from './eth-config.service';
import { ethMapongoConfig } from './eth-mapongo.config';
import { ethMapongoLibrariesService } from './eth-mapongo-libraries.service';
import { ethMapongoController } from './eth-mapongo.controller';
import { ethMapongoHtml } from './eth-mapongo.html';

export const ethMapongoModule = angular
    .module('ethMapongoModule', [])
    .factory('ethConfigService', ethConfigService)
    .factory('ethMapongoConfig', ethMapongoConfig)
    .factory('ethMapongoLibrariesService', ethMapongoLibrariesService)
    .controller('ethMapongoController', ethMapongoController)
    .component('ethMapongo', {
        bindings: {
            afterCtrl: '<',
            recordid: '@',
            callnumber: '@',
            barcode: '@',
            sublocation: '@'
        },
        controller: 'ethMapongoController',
        template: ethMapongoHtml
    })