import { slspCollapseRelatedEResourcesController } from './slsp-collapse-related-e-resources.controller';

export const slspCollapseRelatedEResourcesModule = angular
    .module('slspCollapseRelatedEResourcesModule', [])
    .controller('slspCollapseRelatedEResourcesController', slspCollapseRelatedEResourcesController)
    .component('slspCollapseRelatedEResourcesComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCollapseRelatedEResourcesController',

    })