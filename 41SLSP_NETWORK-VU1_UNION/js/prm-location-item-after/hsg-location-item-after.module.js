import { hsgDisplayItemPolicyModule } from './hsg-display-item-policy/hsg-display-item-policy.module'

export const hsgLocationItemAfterModule = angular
	.module('hsgLocationItemAfterModule', [])
.component('prmLocationItemAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<hsg-display-item-policy-component after-ctrl="$ctrl"></hsg-display-item-policy-component>
		`
	})

hsgLocationItemAfterModule.requires.push(hsgDisplayItemPolicyModule.name)
