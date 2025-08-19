import { ethOkmLinkModule } from './primo-explore-eth-okm-link/eth-okm-link.module';
import { slspOdnLinkModule } from './slsp-odn-link/slsp-odn-link.module';

export const prmFacetExactAfterModule = angular
    .module('prmFacetExactAfterModule', [])
    .component('prmFacetExactAfter', {
        bindings: { parentCtrl: '<' },
        
        template: `
        <eth-okm-link-component after-ctrl="$ctrl"></eth-okm-link-component>
        <slsp-odn-link-component after-ctrl="$ctrl"></slsp-odn-link-component>
            <slsp-facet-exact-after parent-ctrl="$parent.$ctrl"></<slsp-facet-exact-after>`
    });


prmFacetExactAfterModule.requires.push(ethOkmLinkModule.name);
prmFacetExactAfterModule.requires.push(slspOdnLinkModule.name);