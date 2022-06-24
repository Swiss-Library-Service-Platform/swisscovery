
import {slspDigitizationButtonLabelModule} from './slsp-digitization-button-label/slsp-digitization-button-label.module';

export const prmServiceButtonAfterModule = angular
    .module('prmServiceButtonAfterModule', [])
        .component('prmServiceButtonAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-digitization-button-label-component after-ctrl="$ctrl"></slsp-digitization-button-label><slsp-service-button-after parent-ctrl="$parent.$ctrl"></slsp-service-button-after>`
        });

        prmServiceButtonAfterModule.requires.push(slspDigitizationButtonLabelModule.name);
