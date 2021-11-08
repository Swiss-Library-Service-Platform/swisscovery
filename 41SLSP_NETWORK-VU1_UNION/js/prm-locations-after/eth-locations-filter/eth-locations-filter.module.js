/**
* @ngdoc module
* @name ethLocationsFilterModule
*
* @description
*
* Customization for the locations filter:<br>
* - the locations filter is visible by default
*
* If there is 1 location: prmLocationItemsAfter
*
* If there are multiple locations: prmLocationAfter;
* after all locations: prmLocationsAfter;
* after choosing a location: prmLocationItemsAfter
*
*
* <b>AngularJS Dependencies</b><br>
*
*
* <b>CSS/Image Dependencies</b><br>
* CSS eth-locations-filter.css
*
*
*/
import {ethLocationsFilterController} from './eth-locations-filter.controller';

export const ethLocationsFilterModule = angular
    .module('ethLocationsFilterModule', [])
        .controller('ethLocationsFilterController', ethLocationsFilterController)
        .component('ethLocationsFilterComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'ethLocationsFilterController'
        })
