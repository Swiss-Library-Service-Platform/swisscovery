import { slspDigitizationSupplytimeLabelModule } from './slsp-digitization-supplytime-label/slsp-digitization-supplytime-label.module';



export const prmOfferDetailsTileAfterModule = angular
    .module('prmOfferDetailsTileAfterModule', [])
    .component('prmOfferDetailsTileAfter', {
        bindings: { parentCtrl: '<' },
        template: `
        <slsp-digitization-supplytime-label-component after-ctrl="$ctrl"></slsp-digitization-supplytime-label-component>
        <slsp-offer-details-tile-after parent-ctrl="$parent.$ctrl"></slsp-offer-details-tile-after>
		`
    });


prmOfferDetailsTileAfterModule.requires.push(slspDigitizationSupplytimeLabelModule.name);