
    import {slspRapidoFeesLinkController} from './slsp-rapido-fees-link.controller';
    import {slspRapidoFeesLinkHtml} from './slsp-rapido-fees-link.html';

    export const slspRapidoFeesLinkModule = angular
        .module('slspRapidoFeesLinkModule', [])
            .controller('slspRapidoFeesLinkController', slspRapidoFeesLinkController)
            .component('slspRapidoFeesLinkComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspRapidoFeesLinkController',
                template: slspRapidoFeesLinkHtml
            })