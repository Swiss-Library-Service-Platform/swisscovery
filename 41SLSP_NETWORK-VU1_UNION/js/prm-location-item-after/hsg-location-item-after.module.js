import { hsgDisplayItemPolicyModule } from './hsg-display-item-policy/hsg-display-item-policy.module'
import { slspCugPolicyModule } from './slsp-cug-policy/slsp-cug-policy.module'
//import { slspOvpItemReservationModule } from './slsp-ovp-item-reservation/slsp-ovp-item-reservation.module'

export const hsgLocationItemAfterModule = angular
	.module('hsgLocationItemAfterModule', [])
.component('prmLocationItemAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<hsg-display-item-policy-component after-ctrl="$ctrl"></hsg-display-item-policy-component>
			<slsp-cug-policy-component after-ctrl="$ctrl"></slsp-cug-policy-component>
			<slsp-ovp-item-reservation-component after-ctrl="$ctrl"></slsp-ovp-item-reservation-component>
			<slsp-location-item-after parent-ctrl="$parent.$ctrl"></<slsp-location-item-after>
		`
	})

hsgLocationItemAfterModule.requires.push(hsgDisplayItemPolicyModule.name)
hsgLocationItemAfterModule.requires.push(slspCugPolicyModule.name)
//hsgLocationItemAfterModule.requires.push(slspOvpItemReservationModule.name)
