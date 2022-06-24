import {bcuSearchSlotsModule} from './bcu-search-slots/bcu-search-slots.module';

export const bcuSearchBarAfterModule = angular
    .module('bcuSearchBarAfterModule', [])
        .component('prmSearchBarAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-search-slots-component after-ctrl="$ctrl"></bcu-search-slots-component>`
        });

bcuSearchBarAfterModule.requires.push(bcuSearchSlotsModule.name);
