import { slspIconLabelOtherUnitsController } from './slsp-icon-label-other-units.controller';
import { slspIconLabelOtherUnitsHtml } from './slsp-icon-label-other-units.html';

export const slspIconLabelOtherUnitsModule = angular
    .module('slspIconLabelOtherUnitsModule', [])
    .controller('slspIconLabelOtherUnitsController', slspIconLabelOtherUnitsController)
    .component('slspIconLabelOtherUnitsComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspIconLabelOtherUnitsController',
        template: slspIconLabelOtherUnitsHtml
    })