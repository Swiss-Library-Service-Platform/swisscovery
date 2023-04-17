import { slspHideRapidoLoanLinkController } from './slsp-hide-rapido-loan-link.controller';
import { slspHideRapidoLoanLinkHtml } from './slsp-hide-rapido-loan-link.html';

export const slspHideRapidoLoanLinkModule = angular
    .module('slspHideRapidoLoanLinkModule', [])
    .controller('slspHideRapidoLoanLinkController', slspHideRapidoLoanLinkController)
    .component('slspHideRapidoLoanLinkComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspHideRapidoLoanLinkController',
        template: slspHideRapidoLoanLinkHtml
    })