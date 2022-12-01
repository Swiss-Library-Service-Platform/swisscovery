import { slspRapidoHideLibraryModule } from './slsp-rapido-hide-library/slsp-rapido-hide-library.module';

export const pickupAnywhereFormAfterModule = angular
    .module('pickupAnywhereFormAfterModule', [])
    .component('pickupAnywhereFormAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-rapido-hide-library-component after-ctrl="$ctrl"></slsp-rapido-hide-library-component>
            <slsp-pickup-anywhere-form-after parent-ctrl="$parent.$ctrl"></<slsp-pickup-anywhere-form-after>`
    });


pickupAnywhereFormAfterModule.requires.push(slspRapidoHideLibraryModule.name);