
    import {slspIconLabelController} from './slsp-icon-label.controller';
    import {slspIconLabelHtml} from './slsp-icon-label.html';

    export const slspIconLabelModule = angular
        .module('slspIconLabelModule', [])
            .controller('slspIconLabelController', slspIconLabelController)
            .component('slspIconLabelComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelController',
                template: slspIconLabelHtml
            })