    import { slspIButtonController } from './slsp-i-button.controller';
    import { slspIButtonHtml } from './slsp-i-button.html';


    export const slspIButtonModule = angular
        .module('slspIButtonModule', [])
        .controller('slspIButtonController', slspIButtonController)
        .component('slspIButtonComponent', {
            bindings: { afterCtrl: '<' },
            controller: 'slspIButtonController',
            template: slspIButtonHtml
        })