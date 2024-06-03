import { slspAdvancedSearchClearButtonModule } from './slsp-advanced-search-clear-button/slsp-advanced-search-clear-button.module';

export const prmAdvancedSearchAfterModule = angular
    .module('prmAdvancedSearchAfterModule', [])
    .component('prmAdvancedSearchAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-advanced-search-clear-button-component after-ctrl="$ctrl"></slsp-advanced-search-clear-button-component>
            <slsp-advanced-search-after parent-ctrl="$parent.$ctrl"></<slsp-advanced-search-after>`
    });


prmAdvancedSearchAfterModule.requires.push(slspAdvancedSearchClearButtonModule.name);