import {bcuLangSwitchModule} from './bcu-lang-switch/bcu-lang-switch.module';
import {slspIllSigninOrderLoggedOutModule} from './slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.module';

export const slspUserAreaExpandableAfterModule = angular
    .module('slspUserAreaExpandableAfterModule', [])
        .component('prmUserAreaExpandableAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<bcu-lang-switch-component after-ctrl="$ctrl"></bcu-lang-switch-component><slsp-ill-signin-order-logged-out-component after-ctrl="$ctrl"></slsp-ill-signin-order-logged-out-component>`,
        });

slspUserAreaExpandableAfterModule.requires.push(bcuLangSwitchModule.name);
slspUserAreaExpandableAfterModule.requires.push(slspIllSigninOrderLoggedOutModule.name);