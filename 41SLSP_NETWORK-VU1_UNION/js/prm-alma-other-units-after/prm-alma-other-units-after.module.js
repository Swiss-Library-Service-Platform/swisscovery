import { slspIconLabelOtherUnitsModule } from './slsp-icon-label-other-units/slsp-icon-label-other-units.module';

export const prmAlmaOtherUnitsAfterModule = angular
    .module('prmAlmaOtherUnitsAfterModule', [])
    .component('prmAlmaOtherUnitsAfter', {
        bindings: { parentCtrl: '<' },
        template: `<slsp-icon-label-other-units-component after-ctrl="$ctrl"></slsp-icon-label-other-units-component><slsp-alma-other-units-after parent-ctrl="$parent.$ctrl"></slsp-alma-other-units-after>`
    });


prmAlmaOtherUnitsAfterModule.requires.push(slspIconLabelOtherUnitsModule.name);