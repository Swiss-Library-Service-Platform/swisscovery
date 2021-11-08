import {ethLocationsFilterModule} from './eth-locations-filter/eth-locations-filter.module';

export const ethLocationsAfterModule = angular
    .module('ethLocationsAfterModule', [])
        .component('prmLocationsAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component>`
        });

ethLocationsAfterModule.requires.push(ethLocationsFilterModule.name);
