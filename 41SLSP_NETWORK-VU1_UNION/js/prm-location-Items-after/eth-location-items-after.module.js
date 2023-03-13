import { ethMapongoCheckModule } from './eth-mapongo/eth-mapongo-check.module';
import { ethMapongoModule } from './eth-mapongo/eth-mapongo.module';
import { slspIconLabelLocationItemsModule } from './slsp-icon-label-location-items/slsp-icon-label-location-items.module';


export const ethLocationItemsAfterModule = angular
    .module('ethLocationItemsAfterModule', [])
    .component('prmLocationItemsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
		<eth-mapongo-check after-ctrl="$ctrl"></eth-mapongo-check>
        <slsp-icon-label-location-items-component after-ctrl="$ctrl"></slsp-icon-label-location-items-component>
        <slsp-location-items-after parent-ctrl="$parent.$ctrl"></slsp-location-items-after>
        
		`
    });

ethLocationItemsAfterModule.requires.push(ethMapongoCheckModule.name);
ethLocationItemsAfterModule.requires.push(ethMapongoModule.name);
ethLocationItemsAfterModule.requires.push(slspIconLabelLocationItemsModule.name);