
    import {bcuFeesLinkController} from './bcu-fees-link.controller';


    export const bcuFeesLinkModule = angular
        .module('bcuFeesLinkModule', [])
            .controller('bcuFeesLinkController', bcuFeesLinkController)
            .component('bcuFeesLinkComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'bcuFeesLinkController',
                
            })