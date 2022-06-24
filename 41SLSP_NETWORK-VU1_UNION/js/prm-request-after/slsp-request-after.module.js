import {bcuFeesLinkModule} from './bcu-fees-link/bcu-fees-link.module';
import {slspRequestCancelButtonModule} from './slsp-request-cancel-button/slsp-request-cancel-button.module';

export const slspRequestAfterModule = angular
    .module('slspRequestAfterModule', [])
        .component('slspRequestAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-fees-link-component after-ctrl="$ctrl"></bcu-fees-link-component><slsp-request-cancel-button-component after-ctrl="$ctrl"></slsp-request-cancel-button-component>`
        });

slspRequestAfterModule.requires.push(bcuFeesLinkModule.name);
slspRequestAfterModule.requires.push(slspRequestCancelButtonModule.name);