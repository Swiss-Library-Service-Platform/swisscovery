import { slspSendEmailInfoController } from './slsp-send-email-info.controller';
import { slspSendEmailInfoHtml } from './slsp-send-email-info.html';

export const slspSendEmailInfoModule = angular
    .module('slspSendEmailInfoModule', [])
    .controller('slspSendEmailInfoController', slspSendEmailInfoController)
    .component('slspSendEmailInfoComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspSendEmailInfoController',
        template: slspSendEmailInfoHtml

    })