import {bcuSearchSlotsModule} from './bcu-search-slots/bcu-search-slots.module';
import {slspRaBetaIconModule} from './slsp-ra-beta-icon/slsp-ra-beta-icon.module';

export const bcuSearchBarAfterModule = angular
    .module('bcuSearchBarAfterModule', [])
        .component('prmSearchBarAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-search-slots-component after-ctrl="$ctrl"></bcu-search-slots-component>
                       <slsp-ra-beta-icon-component after-ctrl="$ctrl"></slsp-ra-beta-icon-component>
                       <slsp-search-bar-after parent-ctrl="$parent.$ctrl"></slsp-search-bar-after>`

        });

bcuSearchBarAfterModule.requires.push(bcuSearchSlotsModule.name);
bcuSearchBarAfterModule.requires.push(slspRaBetaIconModule.name);


