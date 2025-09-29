import { slspMultivolumeRequestModule } from './slsp-multivolume-request/slsp-multivolume-request.module';
import { slspBookRequestFormMsgModule } from './slsp-book-request-form-msg/slsp-book-request-form-msg.module';


export const prmOfferDetailsTileAfterModule = angular
    .module('prmOfferDetailsTileAfterModule', [])
    .component('prmOfferDetailsTileAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-multivolume-request-component after-ctrl="$ctrl"></slsp-multivolume-request-component>
            <slsp-book-request-form-msg-component after-ctrl="$ctrl"></slsp-book-request-form-msg-component>
            <slsp-offer-details-tile-after parent-ctrl="$parent.$ctrl"></slsp-offer-details-tile-after>`
    });


prmOfferDetailsTileAfterModule.requires.push(slspMultivolumeRequestModule.name);
prmOfferDetailsTileAfterModule.requires.push(slspBookRequestFormMsgModule.name);