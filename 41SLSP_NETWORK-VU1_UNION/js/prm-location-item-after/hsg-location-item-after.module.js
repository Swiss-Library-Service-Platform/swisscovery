import { hsgDisplayItemPolicyModule } from './hsg-display-item-policy/hsg-display-item-policy.module'
import { slspCugPolicyModule } from './slsp-cug-policy/slsp-cug-policy.module'

export const hsgLocationItemAfterModule = angular
	.module('hsgLocationItemAfterModule', [])
.component('prmLocationItemAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<hsg-display-item-policy-component after-ctrl="$ctrl"></hsg-display-item-policy-component>
			<slsp-cug-policy-component after-ctrl="$ctrl"></slsp-cug-policy-component>
			<slsp-location-item-after parent-ctrl="$parent.$ctrl"></<slsp-location-item-after>
		`
	})

hsgLocationItemAfterModule.requires.push(hsgDisplayItemPolicyModule.name)
hsgLocationItemAfterModule.requires.push(slspCugPolicyModule.name)
