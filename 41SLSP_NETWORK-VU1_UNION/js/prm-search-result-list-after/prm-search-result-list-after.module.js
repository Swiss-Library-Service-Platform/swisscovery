import { slspTopPaginationSwitchModule } from './slsp-top-pagination-switch/slsp-top-pagination-switch.module';

export const prmSearchResultListAfterModule = angular
    .module('prmSearchResultListAfterModule', [])
    .component('prmSearchResultListAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-top-pagination-switch-component after-ctrl="$ctrl"></slsp-top-pagination-switch-component>
            <slsp-search-result-list-after parent-ctrl="$parent.$ctrl"></<slsp-search-result-list-after>`
    });


prmSearchResultListAfterModule.requires.push(slspTopPaginationSwitchModule.name);