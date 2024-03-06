import { slspCitationSelectModule } from './slsp-citation-select/slsp-citation-select.module';

export const prmCitationAfterModule = angular
    .module('prmCitationAfterModule', [])
    .component('prmCitationAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-citation-select-component after-ctrl="$ctrl"></slsp-citation-select-component>
            <slsp-citation-after parent-ctrl="$parent.$ctrl"></<slsp-citation-after>`
    });


prmCitationAfterModule.requires.push(slspCitationSelectModule.name);