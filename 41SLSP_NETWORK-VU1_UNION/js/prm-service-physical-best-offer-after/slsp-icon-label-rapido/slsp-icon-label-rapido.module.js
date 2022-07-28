
    import {slspIconLabelRapidoController} from './slsp-icon-label-rapido.controller';
    import {slspIconLabelRapidoHtml} from './slsp-icon-label-rapido.html';

    export const slspIconLabelRapidoModule = angular
        .module('slspIconLabelRapidoModule', [])
            .controller('slspIconLabelRapidoController', slspIconLabelRapidoController)
            .component('slspIconLabelRapidoComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelRapidoController',
                template: slspIconLabelRapidoHtml
            })