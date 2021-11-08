import {slspEditPersonalDetailsController} from './slsp-edit-personal-details.controller';
import {slspEditPersonalDetailsHtml} from './slsp-edit-personal-details.html';


export const slspEditPersonalDetailsModule = angular
    .module('slspEditPersonalDetailsModule', [])
        .controller('slspEditPersonalDetailsController', slspEditPersonalDetailsController)
        .component('slspEditPersonalDetailsComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'slspEditPersonalDetailsController',
            template: slspEditPersonalDetailsHtml
        })