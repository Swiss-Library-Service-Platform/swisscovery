/**
* @ngdoc module
* @name ethMapongoCheckModule
*
* @description
* checks if mapongo should be injected
* - checks if the current library and location (Standort) are registered for Mapongo
* - checks the item status
* - may inject an eth-mapongo directive and specific attributes for it in prm-location-item-after (handled by eth-mapongo.module.js)
*
* A prm controller works only for prmLocationItems. There is no prmLocationItem controller
* $ctrl in prmLocationItemAfter is a reference to prmLocationItems Controller
*
* If there is 1 location: prmLocationItemsAfter
*
* If there are multiple locations: prmLocationAfter;
* after all locations: prmLocationsAfter;
* after choosing a location: prmLocationItemsAfter
*
*
* <b>AngularJS Dependencies</b><br>
* Service {@link ETH.ethMapongoLibrariesService}<br>
*
*
* <b>CSS/Image Dependencies</b><br>
*
*
* @example
* ZHAW MMS IDs: 991128155109705501, 990013732410205503; 2 Exemplare: 990058665580205503; 5 Exemplare: 991129451879705501
*
*/
import {ethMapongoLibrariesService} from './eth-mapongo-libraries.service';
import {ethMapongoCheckController} from './eth-mapongo-check.controller';

export const ethMapongoCheckModule = angular
    .module('ethMapongoCheckModule', [])
        .factory('ethMapongoLibrariesService', ethMapongoLibrariesService)
        .controller('ethMapongoCheckController', ethMapongoCheckController)
        .component('ethMapongoCheck', {
            bindings: {afterCtrl: '<'},
            controller: 'ethMapongoCheckController'
        })
