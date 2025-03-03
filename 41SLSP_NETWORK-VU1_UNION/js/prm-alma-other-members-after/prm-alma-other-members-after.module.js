
import {slspCollapseOtherInstModule} from './slsp-collapse-other-inst/slsp-collapse-other-inst.module';
import {slspIconLabelOtherMembersModule} from './slsp-icon-label-other-members/slsp-icon-label-other-members.module';


export const prmAlmaOtherMembersAfterModule = angular
    .module('prmAlmaOtherMembersAfterModule', [])
        .component('prmAlmaOtherMembersAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-collapse-other-inst-component after-ctrl="$ctrl"></slsp-collapse-other-inst-component>
            <slsp-icon-label-other-members-component after-ctrl="$ctrl"></slsp-icon-label-other-members-component>
            <slsp-alma-other-members-after parent-ctrl="$parent.$ctrl"></slsp-alma-other-members-after>`
        });

prmAlmaOtherMembersAfterModule.requires.push(slspCollapseOtherInstModule.name);
prmAlmaOtherMembersAfterModule.requires.push(slspIconLabelOtherMembersModule.name);