import { slspRenewItemTextModule } from './slsp-renew-item-text/slsp-renew-item-text.module';
import { slspHideRapidoLoanLinkModule } from './slsp-hide-rapido-loan-link/slsp-hide-rapido-loan-link.module';


export const slspLoanAfterModule = angular
    .module('slspLoanAfterModule', [])
    .component('prmLoanAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-renew-item-text-component after-ctrl="$ctrl"></slsp-renew-item-text-component>
            <slsp-hide-rapido-loan-link-component after-ctrl="$ctrl"></slsp-hide-rapido-loan-link-component>
            <slsp-loan-after parent-ctrl="$parent.$ctrl"></slsp-loan-after>`
    });

slspLoanAfterModule.requires.push(slspRenewItemTextModule.name);
slspLoanAfterModule.requires.push(slspHideRapidoLoanLinkModule.name);