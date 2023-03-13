import { slspLoginBoxModule } from './slsp-login-box/slsp-login-box.module';

export const prmLoginAfterModule = angular
    .module('prmLoginAfterModule', [])
    .component('prmLoginAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-login-box-component after-ctrl="$ctrl"></slsp-login-box-component>
            <slsp-login-after parent-ctrl="$parent.$ctrl"></<slsp-login-after>`
    });


prmLoginAfterModule.requires.push(slspLoginBoxModule.name);