
import {slspIconLabelModule} from './slsp-icon-label/slsp-icon-label.module';

export const prmFullViewAfterModule = angular
    .module('prmFullViewAfterModule', [])
        .component('prmFullViewAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-icon-label-component after-ctrl="$ctrl"></slsp-icon-label-component><slsp-full-view-after parent-ctrl="$parent.$ctrl"></slsp-full-view-after>`
        });

        prmFullViewAfterModule.requires.push(slspIconLabelModule.name);
