import { slspClosePickupAnywhereFormModule } from './slsp-close-pickup-anywhere-form/slsp-close-pickup-anywhere-form.module';

export const pickupAnywhereFormAfterModule = angular
    .module('pickupAnywhereFormAfterModule', [])
    .component('pickupAnywhereFormAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-close-pickup-anywhere-form-component after-ctrl="$ctrl"></slsp-close-pickup-anywhere-form-component>
            <slsp-pickup-anywhere-form-after parent-ctrl="$parent.$ctrl"></<slsp-pickup-anywhere-form-after>`
    });


pickupAnywhereFormAfterModule.requires.push(slspClosePickupAnywhereFormModule.name);