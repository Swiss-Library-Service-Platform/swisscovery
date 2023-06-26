import { slspMultivolumeRequestModule } from './slsp-multivolume-request/slsp-multivolume-request.module';

export const prmOfferDetailsTileAfterModule = angular
    .module('prmOfferDetailsTileAfterModule', [])
    .component('prmOfferDetailsTileAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-multivolume-request-component after-ctrl="$ctrl"></slsp-multivolume-request-component>
            <slsp-offer-details-tile-after parent-ctrl="$parent.$ctrl"></<slsp-offer-details-tile-after>`
    });


prmOfferDetailsTileAfterModule.requires.push(slspMultivolumeRequestModule.name);