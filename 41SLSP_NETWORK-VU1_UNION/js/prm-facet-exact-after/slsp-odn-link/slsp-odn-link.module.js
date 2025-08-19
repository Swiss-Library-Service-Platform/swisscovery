import { slspOdnLinkController } from './slsp-odn-link.controller';
import { slspOdnLinkHtml } from './slsp-odn-link.html';


export const slspOdnLinkModule = angular
    .module('slspOdnLinkModule', [])
    .controller('slspOdnLinkController', slspOdnLinkController)
    .component('slspOdnLinkComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspOdnLinkController',
        template: slspOdnLinkHtml
    })