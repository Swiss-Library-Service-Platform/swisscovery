import {bcuScopesSelectorModule} from './bcu-scopes-selector/bcu-scopes-selector.module';

export const bcuTabsAndScopesSelectorAfterModule = angular
    .module('bcuTabsAndScopesSelectorAfterModule', [])
        .component('prmTabsAndScopesSelectorAfter',  {
            template: '<bcu-scopes-selector after-ctrl="$ctrl"></bcu-scopes-selector>'
        });

bcuTabsAndScopesSelectorAfterModule.requires.push(bcuScopesSelectorModule.name);