import { ethOkmLinkModule } from './primo-explore-eth-okm-link/eth-okm-link.module';

export const prmFacetExactAfterModule = angular
    .module('prmFacetExactAfterModule', [])
    .component('prmFacetExactAfter', {
        bindings: { parentCtrl: '<' },
        
        template: `
        <eth-okm-link-component after-ctrl="$ctrl"></eth-okm-link-component>
            <slsp-facet-exact-after parent-ctrl="$parent.$ctrl"></<slsp-facet-exact-after>`
    });


prmFacetExactAfterModule.requires.push(ethOkmLinkModule.name);