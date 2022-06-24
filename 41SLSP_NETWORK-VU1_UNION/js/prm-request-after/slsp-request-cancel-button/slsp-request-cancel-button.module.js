
    import {slspRequestCancelButtonController} from './slsp-request-cancel-button.controller';
    

    export const slspRequestCancelButtonModule = angular
        .module('slspRequestCancelButtonModule', [])
            .controller('slspRequestCancelButtonController', slspRequestCancelButtonController)
            .component('slspRequestCancelButtonComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspRequestCancelButtonController',
                
            })