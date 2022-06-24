/**
* @ngdoc module
* @name bcuSearchSlotsModule
*
* @description
*
* Customization for the search bar:<br>
* - Tabs and scopes are displayed even if the search has not yet taken place (empty searchfield).
*
* <b>AngularJS Dependencies</b><br>
*
*
* <b>CSS/Image Dependencies</b><br>
*
*
* @example
*
*/
import {bcuSearchSlotsController} from './bcu-search-slots.controller';

export const bcuSearchSlotsModule = angular
    .module('bcuSearchSlotsModule', [])
        .controller('bcuSearchSlotsController', bcuSearchSlotsController)
        .component('bcuSearchSlotsComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'bcuSearchSlotsController'
        })
