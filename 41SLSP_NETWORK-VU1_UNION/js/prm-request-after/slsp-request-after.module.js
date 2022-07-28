import {bcuFeesLinkModule} from './bcu-fees-link/bcu-fees-link.module';


export const slspRequestAfterModule = angular
    .module('slspRequestAfterModule', [])
        .component('prmRequestAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-fees-link-component after-ctrl="$ctrl"></bcu-fees-link-component><slsp-request-after parent-ctrl="$parent.$ctrl"></slsp-request-after>`
        });

slspRequestAfterModule.requires.push(bcuFeesLinkModule.name);
