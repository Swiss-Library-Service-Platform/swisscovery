import {slspInvoicesController} from './slsp-invoices.controller';


export const slspInvoicesModule = angular
    .module('slspInvoicesModule', [])
        .controller('slspInvoicesController', slspInvoicesController)
        .component('slspInvoicesComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'slspInvoicesController'
        })