import { hsgDisplayItemPolicyController } from './hsg-display-item-policy.controller'


export const hsgDisplayItemPolicyModule = angular
	.module('hsgDisplayItemPolicyModule', [])
	.controller('hsgDisplayItemPolicyController', hsgDisplayItemPolicyController)
	.component('hsgDisplayItemPolicyComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgDisplayItemPolicyController'
	})
