
    import {slspAlmaRequestController} from './slsp-alma-request.controller';


    export const slspAlmaRequestModule = angular
        .module('slspAlmaRequestModule', [])
            .controller('slspAlmaRequestController', slspAlmaRequestController)
            .component('slspAlmaRequestComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspAlmaRequestController',
                
            })

