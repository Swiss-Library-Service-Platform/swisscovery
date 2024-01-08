import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module';
import { slspHoldingCollapseModule } from './slsp-holding-collapse/slsp-holding-collapse.module';


export const prmLocationHoldingsAfterModule = angular
    .module('prmLocationHoldingsAfterModule', [])
    .component('prmLocationHoldingsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
		
        <slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>
        <slsp-holding-collapse-component after-ctrl="$ctrl"></slsp-holding-collapse-component>
        <slsp-location-holdings-after parent-ctrl="$parent.$ctrl"></slsp-location-holdings-after>
        
		`
    });


prmLocationHoldingsAfterModule.requires.push(slspIButtonModule.name);
prmLocationHoldingsAfterModule.requires.push(slspHoldingCollapseModule.name);
