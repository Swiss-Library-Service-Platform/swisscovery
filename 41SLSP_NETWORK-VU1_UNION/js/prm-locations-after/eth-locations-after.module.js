import {ethLocationsFilterModule} from './eth-locations-filter/eth-locations-filter.module';
import {slspIconLabelLocationsModule} from './slsp-icon-label-locations/slsp-icon-label-locations.module';
import {slspCollapseRelatedModule} from './slsp-collapse-related/slsp-collapse-related.module';

export const ethLocationsAfterModule = angular
    .module('ethLocationsAfterModule', [])
        .component('prmLocationsAfter',  {
            bindings: {parentCtrl: '<'},
            template: `<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component><slsp-icon-label-locations-component after-ctrl="$ctrl"></slsp-icon-label-locations-component><slsp-collapse-related-component after-ctrl="$ctrl"></slsp-collapse-related-component><slsp-locations-after parent-ctrl="$parent.$ctrl"></slsp-locations-after>`
        });

ethLocationsAfterModule.requires.push(ethLocationsFilterModule.name);
ethLocationsAfterModule.requires.push(slspIconLabelLocationsModule.name);
ethLocationsAfterModule.requires.push(slspCollapseRelatedModule.name);