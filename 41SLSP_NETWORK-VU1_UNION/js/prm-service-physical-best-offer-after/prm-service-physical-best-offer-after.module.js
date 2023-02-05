import { slspRapidoDigitalOfferModule } from './slsp-rapido-digital-offer/slsp-rapido-digital-offer.module';
import { slspIconLabelRapidoModule } from './slsp-icon-label-rapido/slsp-icon-label-rapido.module';
import { ethDisableRequestButtonModule } from './eth-disable-request-button/eth-disable-request-button.module';

export const prmServicePhysicalBestOfferAfterModule = angular
    .module('prmServicePhysicalBestOfferAfterModule', [])
    .component('prmServicePhysicalBestOfferAfter', {
        bindings: { parentCtrl: '<' },
        template: `<slsp-rapido-digital-offer-component after-ctrl="$ctrl"></slsp-rapido-digital-offer-component>
            <slsp-icon-label-rapido-component after-ctrl="$ctrl"></slsp-icon-label-rapido-component>
            <eth-disable-request-button-component after-ctrl="$ctrl"></eth-disable-request-button-component>
            <slsp-service-physical-best-offer-after parent-ctrl="$parent.$ctrl"></slsp-service-physical-best-offer-after>`,
    });

prmServicePhysicalBestOfferAfterModule.requires.push(slspRapidoDigitalOfferModule.name);
prmServicePhysicalBestOfferAfterModule.requires.push(slspIconLabelRapidoModule.name);
prmServicePhysicalBestOfferAfterModule.requires.push(ethDisableRequestButtonModule.name);