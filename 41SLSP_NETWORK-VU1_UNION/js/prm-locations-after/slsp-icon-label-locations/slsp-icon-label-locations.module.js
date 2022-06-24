
    import {slspIconLabelLocationsController} from './slsp-icon-label-locations.controller';
    import {slspIconLabelLocationsHtml} from './slsp-icon-label-locations.html';

    export const slspIconLabelLocationsModule = angular
        .module('slspIconLabelLocationsModule', [])
            .controller('slspIconLabelLocationsController', slspIconLabelLocationsController)
            .component('slspIconLabelLocationsComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelLocationsController',
                template: slspIconLabelLocationsHtml
            })