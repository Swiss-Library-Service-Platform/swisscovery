import { slspUnionLoginBoxController } from './slsp-union-login-box.controller';
import { slspUnionLoginBoxHtml } from './slsp-union-login-box.html';

export const slspUnionLoginBoxModule = angular
    .module('slspUnionLoginBoxModule', [])
    .controller('slspUnionLoginBoxController', slspUnionLoginBoxController)
    .component('slspUnionLoginBoxComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspUnionLoginBoxController',
        template: slspUnionLoginBoxHtml

    })