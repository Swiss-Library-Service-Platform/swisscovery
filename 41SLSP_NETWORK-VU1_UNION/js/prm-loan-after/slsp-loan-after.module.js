
import {slspRenewItemTextModule} from './slsp-renew-item-text/slsp-renew-item-text.module';

export const slspLoanAfterModule = angular
    .module('slspLoanAfterModule', [])
        .component('prmLoanAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-renew-item-text-component after-ctrl="$ctrl"></slsp-renew-item-text-component><slsp-loan-after parent-ctrl="$parent.$ctrl"></slsp-loan-after>`
        });

slspLoanAfterModule.requires.push(slspRenewItemTextModule.name);
