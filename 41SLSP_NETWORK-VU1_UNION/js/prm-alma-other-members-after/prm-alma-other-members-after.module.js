
import {slspCollapseOtherInstModule} from './slsp-collapse-other-inst/slsp-collapse-other-inst.module';

export const prmAlmaOtherMembersAfterModule = angular
    .module('prmAlmaOtherMembersAfterModule', [])
        .component('prmAlmaOtherMembersAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-collapse-other-inst-component after-ctrl="$ctrl"></slsp-collapse-other-inst-component><slsp-alma-other-members-after parent-ctrl="$parent.$ctrl"></slsp-alma-other-members-after>`
        });

prmAlmaOtherMembersAfterModule.requires.push(slspCollapseOtherInstModule.name);
