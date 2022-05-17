
import {slspRapidoDigitalOfferModule} from './slsp-rapido-digital-offer/slsp-rapido-digital-offer.module';

export const prmServicePhysicalBestOfferAfterModule = angular
    .module('prmServicePhysicalBestOfferAfterModule', [])
        .component('prmServicePhysicalBestOfferAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-rapido-digital-offer-component after-ctrl="$ctrl"></slsp-rapido-digital-offer-component>`,
        });

prmServicePhysicalBestOfferAfterModule.requires.push(slspRapidoDigitalOfferModule.name);