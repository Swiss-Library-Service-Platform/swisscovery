import { slspClosedFinesBarController } from './slsp-closed-fines-bar.controller';
import { slspClosedFinesBarHtml } from './slsp-closed-fines-bar.html';


export const slspClosedFinesBarModule = angular
    .module('slspClosedFinesBarModule', [])
    .controller('slspClosedFinesBarController', slspClosedFinesBarController)
    .component('slspClosedFinesBarComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspClosedFinesBarController',
        template: slspClosedFinesBarHtml
    })