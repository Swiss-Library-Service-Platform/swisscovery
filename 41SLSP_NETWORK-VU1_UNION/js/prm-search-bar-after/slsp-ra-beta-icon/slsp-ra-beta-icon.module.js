
import {slspRaBetaIconController} from './slsp-ra-beta-icon.controller';

export const slspRaBetaIconModule = angular
    .module('slspRaBetaIconModule', [])
        .controller('slspRaBetaIconController', slspRaBetaIconController)
        .component('slspRaBetaIconComponent',  {
            bindings: {afterCtrl: '<'},
            controller: 'slspRaBetaIconController'
        })
