import { slspCollectionIdController } from './slsp-collection-id.controller';
import { slspCollectionIdHtml } from './slsp-collection-id.html';

export const slspCollectionIdModule = angular
    .module('slspCollectionIdModule', [])
    .controller('slspCollectionIdController', slspCollectionIdController)
    .component('slspCollectionIdComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspCollectionIdController',
        template: slspCollectionIdHtml

    })