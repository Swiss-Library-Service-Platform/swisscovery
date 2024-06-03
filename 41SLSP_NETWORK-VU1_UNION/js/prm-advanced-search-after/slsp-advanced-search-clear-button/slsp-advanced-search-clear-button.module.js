import { slspAdvancedSearchClearButtonController } from './slsp-advanced-search-clear-button.controller';
import { slspAdvancedSearchClearButtonHtml } from './slsp-advanced-search-clear-button.html';

export const slspAdvancedSearchClearButtonModule = angular
    .module('slspAdvancedSearchClearButtonModule', [])
    .controller('slspAdvancedSearchClearButtonController', slspAdvancedSearchClearButtonController)
    .component('slspAdvancedSearchClearButtonComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspAdvancedSearchClearButtonController',
        template: slspAdvancedSearchClearButtonHtml

    })