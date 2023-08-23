import { hsgTranslatorService } from './hsg-translator.service'
import { slspCollapseDetailsController } from './slsp-collapse-details.controller';
import { slspCollapseDetailsConfig } from './slsp-collapse-details.config';

export const slspCollapseDetailsModule = angular
    .module('slspCollapseDetailsModule', [])
    .constant('slspCollapseDetailsConfig', slspCollapseDetailsConfig)
    .factory('hsgTranslatorService', hsgTranslatorService)
    .controller('slspCollapseDetailsController', slspCollapseDetailsController)
    .component('slspCollapseDetailsComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCollapseDetailsController',

    })