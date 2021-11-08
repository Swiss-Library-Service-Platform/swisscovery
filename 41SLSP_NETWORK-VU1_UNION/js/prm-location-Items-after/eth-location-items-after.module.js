import {ethLocationItemsFilterModule} from './eth-location-items-filter/eth-location-items-filter.module';
import {slspIButtonModule} from './slsp-i-button/slsp-i-button.module';

export const ethLocationItemsAfterModule = angular
    .module('ethLocationItemsAfterModule', [])
        .component('prmLocationItemsAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<eth-location-items-filter-component after-ctrl="$ctrl"></eth-location-items-filter-component><slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>`
        });

ethLocationItemsAfterModule.requires.push(ethLocationItemsFilterModule.name);
ethLocationItemsAfterModule.requires.push(slspIButtonModule.name);
