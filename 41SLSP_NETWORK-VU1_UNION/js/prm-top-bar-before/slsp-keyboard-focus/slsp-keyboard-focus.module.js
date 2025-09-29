import {slspKeyboardFocusController} from './slsp-keyboard-focus.controller';

export const slspKeyboardFocusModule = angular
    .module('slspKeyboardFocusModule', [])
        .controller('slspKeyboardFocusController', slspKeyboardFocusController)
        .component('slspKeyboardFocusComponent',{
            bindings: {afterCtrl: '<'},
            controller: 'slspKeyboardFocusController'
        })
