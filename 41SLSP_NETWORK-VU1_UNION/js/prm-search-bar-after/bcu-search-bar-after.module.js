import {bcuSearchSlotsModule} from './bcu-search-slots/bcu-search-slots.module';

export const bcuSearchBarAfterModule = angular
    .module('bcuSearchBarAfterModule', [])
        .component('prmSearchBarAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-search-slots-component after-ctrl="$ctrl"></bcu-search-slots-component><slsp-search-bar-after parent-ctrl="$parent.$ctrl"></slsp-search-bar-after>`
        });

bcuSearchBarAfterModule.requires.push(bcuSearchSlotsModule.name);
