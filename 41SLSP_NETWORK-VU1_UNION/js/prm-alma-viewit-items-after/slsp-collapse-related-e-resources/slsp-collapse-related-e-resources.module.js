import { slspCollapseRelatedEResourcesController } from './slsp-collapse-related-e-resources.controller';
import {slspCollapseRelatedEResourcesHtml} from './slsp-collapse-related-e-resources.html';

export const slspCollapseRelatedEResourcesModule = angular
    .module('slspCollapseRelatedEResourcesModule', [])
    .controller('slspCollapseRelatedEResourcesController', slspCollapseRelatedEResourcesController)
    .component('slspCollapseRelatedEResourcesComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCollapseRelatedEResourcesController',
        template: slspCollapseRelatedEResourcesHtml

    })