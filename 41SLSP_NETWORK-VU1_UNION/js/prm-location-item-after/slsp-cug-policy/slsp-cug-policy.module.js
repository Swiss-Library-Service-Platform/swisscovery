import { slspCugPolicyController } from './slsp-cug-policy.controller';


export const slspCugPolicyModule = angular
    .module('slspCugPolicyModule', [])
    .controller('slspCugPolicyController', slspCugPolicyController)
    .component('slspCugPolicyComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCugPolicyController',

    })