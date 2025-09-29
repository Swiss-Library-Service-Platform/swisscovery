import { slspBookRequestFormMsgController } from './slsp-book-request-form-msg.controller';
import { slspBookRequestFormMsgHtml } from './slsp-book-request-form-msg.html';


export const slspBookRequestFormMsgModule = angular
    .module('slspBookRequestFormMsgModule', [])
    .controller('slspBookRequestFormMsgController', slspBookRequestFormMsgController)
    .component('slspBookRequestFormMsgComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspBookRequestFormMsgController',
        template: slspBookRequestFormMsgHtml

    })