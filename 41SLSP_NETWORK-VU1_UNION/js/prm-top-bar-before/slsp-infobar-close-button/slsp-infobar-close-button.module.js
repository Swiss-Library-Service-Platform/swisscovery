import {slspInfobarCloseButtonController} from './slsp-infobar-close-button.controller';

export const slspInfobarCloseButtonModule = angular
    .module('slspInfobarCloseButtonModule', [])
        .controller('slspInfobarCloseButtonController', slspInfobarCloseButtonController)
        .component('slspInfobarCloseButtonComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'slspInfobarCloseButtonController'
        })
