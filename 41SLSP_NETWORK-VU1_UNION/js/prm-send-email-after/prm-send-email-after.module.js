import { slspSendEmailInfoModule } from './slsp-send-email-info/slsp-send-email-info.module';

export const prmSendEmailAfterModule = angular
    .module('prmSendEmailAfterModule', [])
    .component('prmSendEmailAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-send-email-info-component after-ctrl="$ctrl"></slsp-send-email-info-component>
            <slsp-send-email-after parent-ctrl="$parent.$ctrl"></<slsp-send-email-after>`
    });


prmSendEmailAfterModule.requires.push(slspSendEmailInfoModule.name);