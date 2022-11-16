import {ethDisableRequestButtonController} from './eth-disable-request-button.controller';

export const ethDisableRequestButtonModule = angular
    .module('ethDisableRequestButtonModule', [])
        .controller('ethDisableRequestButtonController', ethDisableRequestButtonController)
        .component('ethDisableRequestButtonComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'ethDisableRequestButtonController',
        })
