




    import {slspRenewItemTextController} from './slsp-renew-item-text.controller';
    import {slspRenewItemTextHtml} from './slsp-renew-item-text.html';

    export const slspRenewItemTextModule = angular
        .module('slspRenewItemTextModule', [])
            .controller('slspRenewItemTextController', slspRenewItemTextController)
            .component('slspRenewItemTextComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspRenewItemTextController',
                template: slspRenewItemTextHtml
            })