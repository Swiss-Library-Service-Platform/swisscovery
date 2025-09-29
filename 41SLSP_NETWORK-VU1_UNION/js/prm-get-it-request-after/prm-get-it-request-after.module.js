import { slspPickupInformationModule } from './slsp-pickup-information/slsp-pickup-information.module';
import { slspRefineJournalRequestModule } from './slsp-refine-journal-request/slsp-refine-journal-request.module';


export const prmGetItRequestAfterModule = angular
    .module('prmGetItRequestAfterModule', [])
    .component('prmGetItRequestAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-pickup-information-component after-ctrl="$ctrl"></slsp-pickup-information-component>
            <slsp-refine-journal-request-component after-ctrl="$ctrl"></slsp-refine-journal-request-component>
            <slsp-get-it-request-after parent-ctrl="$parent.$ctrl"></<slsp-get-it-request-after>`
    });


prmGetItRequestAfterModule.requires.push(slspPickupInformationModule.name);
prmGetItRequestAfterModule.requires.push(slspRefineJournalRequestModule.name);