
    import {slspIconLabelLocationItemsController} from './slsp-icon-label-location-items.controller';
    import {slspIconLabelLocationItemsHtml} from './slsp-icon-label-location-items.html';

    export const slspIconLabelLocationItemsModule = angular
        .module('slspIconLabelLocationItemsModule', [])
            .controller('slspIconLabelLocationItemsController', slspIconLabelLocationItemsController)
            .component('slspIconLabelLocationItemsComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelLocationItemsController',
                template: slspIconLabelLocationItemsHtml
            })