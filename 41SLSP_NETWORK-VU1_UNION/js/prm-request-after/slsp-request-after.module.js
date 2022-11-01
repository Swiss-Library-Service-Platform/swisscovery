import {bcuFeesLinkModule} from './bcu-fees-link/bcu-fees-link.module';
import {slspAlmaRequestModule} from './slsp-alma-request/slsp-alma-request.module';


export const slspRequestAfterModule = angular
    .module('slspRequestAfterModule', [])
        .component('prmRequestAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-fees-link-component after-ctrl="$ctrl"></bcu-fees-link-component>
            <slsp-alma-request-component after-ctrl="$ctrl"></slsp-alma-request-component>
            <slsp-request-after parent-ctrl="$parent.$ctrl"></slsp-request-after>`
        });

slspRequestAfterModule.requires.push(bcuFeesLinkModule.name);
slspRequestAfterModule.requires.push(slspAlmaRequestModule.name);
