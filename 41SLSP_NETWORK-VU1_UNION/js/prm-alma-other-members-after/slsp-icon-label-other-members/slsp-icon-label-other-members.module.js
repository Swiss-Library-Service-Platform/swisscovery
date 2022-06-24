
    import {slspIconLabelOtherMembersController} from './slsp-icon-label-other-members.controller';
    import {slspIconLabelOtherMembersHtml} from './slsp-icon-label-other-members.html';

    export const slspIconLabelOtherMembersModule = angular
        .module('slspIconLabelOtherMembersModule', [])
            .controller('slspIconLabelOtherMembersController', slspIconLabelOtherMembersController)
            .component('slspIconLabelOtherMembersComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspIconLabelOtherMembersController',
                template: slspIconLabelOtherMembersHtml
            })