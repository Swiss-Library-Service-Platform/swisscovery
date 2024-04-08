import { slspTopPaginationSwitchModule } from './slsp-top-pagination-switch/slsp-top-pagination-switch.module';

export const prmSearchResultToolBarAfterModule = angular
    .module('prmSearchResultToolBarAfterModule', [])
    .component('prmSearchResultToolBarAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-top-pagination-switch-component after-ctrl="$ctrl"></slsp-top-pagination-switch-component>
            <slsp-search-result-tool-bar-after parent-ctrl="$parent.$ctrl"></<slsp-search-result-tool-bar-after>`
    });


prmSearchResultToolBarAfterModule.requires.push(slspTopPaginationSwitchModule.name);