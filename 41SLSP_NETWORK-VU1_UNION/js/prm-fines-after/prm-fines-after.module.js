import { slspClosedFinesBarModule } from './slsp-closed-fines-bar/slsp-closed-fines-bar.module';

export const prmFinesAfterModule = angular
    .module('prmFinesAfterModule', [])
    .component('prmFinesAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-closed-fines-bar-component after-ctrl="$ctrl"></slsp-closed-fines-bar-component>
            <slsp-fines-after parent-ctrl="$parent.$ctrl"></<slsp-fines-after>`
    });


prmFinesAfterModule.requires.push(slspClosedFinesBarModule.name);