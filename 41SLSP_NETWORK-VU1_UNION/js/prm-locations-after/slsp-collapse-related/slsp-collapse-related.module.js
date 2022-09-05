
    import {slspCollapseRelatedController} from './slsp-collapse-related.controller';
    import {slspCollapseRelatedHtml} from './slsp-collapse-related.html';

    export const slspCollapseRelatedModule = angular
        .module('slspCollapseRelatedModule', [])
            .controller('slspCollapseRelatedController', slspCollapseRelatedController)
            .component('slspCollapseRelatedComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspCollapseRelatedController',
                template: slspCollapseRelatedHtml
            })