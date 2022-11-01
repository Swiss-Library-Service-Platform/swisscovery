
import {slspRapidoFeesLinkModule} from './slsp-rapido-fees-link/slsp-rapido-fees-link.module';
import {bcuRapidoNoFurtherOptionsModule} from './bcu-rapido-no-further-options/bcu-rapido-no-further-options.module';


export const prmServiceNgrsAfterModule = angular
    .module('prmServiceNgrsAfterModule', [])
        .component('prmServiceNgrsAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-rapido-fees-link-component after-ctrl="$ctrl"></slsp-rapido-fees-link-component><bcu-rapido-no-further-options after-ctrl="$ctrl"></bcu-rapido-no-further-options><slsp-service-ngrs-after parent-ctrl="$parent.$ctrl"></<slsp-service-ngrs-after>`
        });

        prmServiceNgrsAfterModule.requires.push(slspRapidoFeesLinkModule.name);
        prmServiceNgrsAfterModule.requires.push(bcuRapidoNoFurtherOptionsModule.name);