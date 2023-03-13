import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module';



export const prmLocationHoldingsAfterModule = angular
    .module('prmLocationHoldingsAfterModule', [])
    .component('prmLocationHoldingsAfter', {
        bindings: { parentCtrl: '<' },
        template: `
		
        <slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>
      
        <slsp-location-holdings-after parent-ctrl="$parent.$ctrl"></slsp-location-holdings-after>
        
		`
    });


prmLocationHoldingsAfterModule.requires.push(slspIButtonModule.name);