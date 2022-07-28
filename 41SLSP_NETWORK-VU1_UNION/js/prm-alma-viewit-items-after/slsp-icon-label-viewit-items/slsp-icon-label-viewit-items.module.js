
    import {slspIconLabelViewitItemsController} from './slsp-icon-label-viewit-items.controller';
    import {slspIconLabelViewitItemsHtml} from './slsp-icon-label-viewit-items.html';

    export const slspIconLabelViewitItemsModule = angular
        .module('slspIconLabelViewitItemsModule', [])
            .controller('slspIconLabelViewitItemsController', slspIconLabelViewitItemsController)
            .component('slspIconLabelViewitItemsComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelViewitItemsController',
                template: slspIconLabelViewitItemsHtml
            })