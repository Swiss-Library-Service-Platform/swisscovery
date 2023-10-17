import { ethMapongoCheckModule } from './eth-mapongo/eth-mapongo-check.module';
import { ethMapongoModule } from './eth-mapongo/eth-mapongo.module';
import { slspIconLabelLocationItemsModule } from './slsp-icon-label-location-items/slsp-icon-label-location-items.module';
import { ethLocationItemsFilterModule } from './eth-location-items-filter/eth-location-items-filter.module';

export const ethLocationItemsAfterModule = angular
    .module('ethLocationItemsAfterModule', [])
    .component('prmLocationItemsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
		<eth-mapongo-check after-ctrl="$ctrl"></eth-mapongo-check>
        <slsp-icon-label-location-items-component after-ctrl="$ctrl"></slsp-icon-label-location-items-component>
        <eth-location-items-filter-component after-ctrl="$ctrl"></eth-location-items-filter-component>
        <slsp-location-items-after parent-ctrl="$parent.$ctrl"></slsp-location-items-after>
        
		`
    });

ethLocationItemsAfterModule.requires.push(ethMapongoCheckModule.name);
ethLocationItemsAfterModule.requires.push(ethMapongoModule.name);
ethLocationItemsAfterModule.requires.push(slspIconLabelLocationItemsModule.name);
ethLocationItemsAfterModule.requires.push(ethLocationItemsFilterModule.name);