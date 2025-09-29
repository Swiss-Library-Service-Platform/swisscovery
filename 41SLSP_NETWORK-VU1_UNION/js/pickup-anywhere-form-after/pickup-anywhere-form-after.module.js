import { slspClosePickupAnywhereFormModule } from './slsp-close-pickup-anywhere-form/slsp-close-pickup-anywhere-form.module';
import { slspHomeDeliveryLabelModule } from './slsp-home-delivery-label/slsp-home-delivery-label.module';

export const pickupAnywhereFormAfterModule = angular
    .module('pickupAnywhereFormAfterModule', [])
    .component('pickupAnywhereFormAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-close-pickup-anywhere-form-component after-ctrl="$ctrl"></slsp-close-pickup-anywhere-form-component>
            <slsp-home-delivery-label-component after-ctrl="$ctrl"></slsp-home-delivery-label-component>
            <slsp-pickup-anywhere-form-after parent-ctrl="$parent.$ctrl"></<slsp-pickup-anywhere-form-after>`
    });


pickupAnywhereFormAfterModule.requires.push(slspClosePickupAnywhereFormModule.name);
pickupAnywhereFormAfterModule.requires.push(slspHomeDeliveryLabelModule.name);