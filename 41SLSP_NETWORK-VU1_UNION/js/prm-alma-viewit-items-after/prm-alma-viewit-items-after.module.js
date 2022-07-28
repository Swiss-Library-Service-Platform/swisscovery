

import {slspIconLabelViewitItemsModule} from './slsp-icon-label-viewit-items/slsp-icon-label-viewit-items.module';

export const prmAlmaViewitItemsAfterModule = angular
    .module('prmAlmaViewitItemsAfterModule', [])
        .component('prmAlmaViewitItemsAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-icon-label-viewit-items-component after-ctrl="$ctrl"></slsp-icon-label-viewit-items-component>
                       <slsp-alma-viewit-items-after parent-ctrl="$parent.$ctrl"></slsp-alma-viewit-items-after>`
        });


prmAlmaViewitItemsAfterModule.requires.push(slspIconLabelViewitItemsModule.name);