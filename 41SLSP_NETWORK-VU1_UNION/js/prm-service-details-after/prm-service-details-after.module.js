import { slspCollapseDetailsModule } from './slsp-collapse-details/slsp-collapse-details.module';

export const prmServiceDetailsAfterModule = angular
    .module('prmServiceDetailsAfterModule', [])
    .component('prmServiceDetailsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-collapse-details-component after-ctrl="$ctrl"></slsp-collapse-details-component>
            <slsp-service-details-after parent-ctrl="$parent.$ctrl"></<slsp-service-details-after>`
    });


prmServiceDetailsAfterModule.requires.push(slspCollapseDetailsModule.name);