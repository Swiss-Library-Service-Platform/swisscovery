import { slspUnionLoginBoxModule } from './slsp-union-login-box/slsp-union-login-box.module';

export const prmUnionCatalogLoginAfterModule = angular
    .module('prmUnionCatalogLoginAfterModule', [])
    .component('prmUnionCatalogLoginAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-union-login-box-component after-ctrl="$ctrl"></slsp-union-login-box-component>
            <slsp-union-catalog-login-after parent-ctrl="$parent.$ctrl"></<slsp-union-catalog-login-after>`
    });


prmUnionCatalogLoginAfterModule.requires.push(slspUnionLoginBoxModule.name);