import {slspEditPersonalDetailsModule} from './slsp-edit-personal-details/slsp-edit-personal-details.module';


export const slspPersonalInfoAfterModule = angular
    .module('slspPersonalInfoAfterModule', [])
        .component('prmPersonalInfoAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<slsp-edit-personal-details-component after-ctrl="$ctrl" id="SLSPeditPersonalDetails"></slsp-edit-personal-details-component>`
        });

        slspPersonalInfoAfterModule.requires.push(slspEditPersonalDetailsModule.name);

