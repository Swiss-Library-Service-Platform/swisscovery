import { slspCitationSelectController } from './slsp-citation-select.controller';
import { slspCitationSelectHtml } from './slsp-citation-select.html';

export const slspCitationSelectModule = angular
    .module('slspCitationSelectModule', [])
    .controller('slspCitationSelectController', slspCitationSelectController)
    .component('slspCitationSelectComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCitationSelectController',
        template: slspCitationSelectHtml

    })