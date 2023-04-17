import { slspRequestCancelButtonModule } from './slsp-request-cancel-button/slsp-request-cancel-button.module';


export const slspRequestsAfterModule = angular
    .module('slspRequestsAfterModule', [])
    .component('prmRequestsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-request-cancel-button-component after-ctrl="$ctrl"></slsp-request-cancel-button-component>
            <slsp-requests-after parent-ctrl="$parent.$ctrl"></slsp-requests-after>
            `
    });


slspRequestsAfterModule.requires.push(slspRequestCancelButtonModule.name);