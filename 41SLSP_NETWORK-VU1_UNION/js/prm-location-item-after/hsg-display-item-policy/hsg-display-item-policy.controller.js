export class hsgDisplayItemPolicyController {

	constructor($scope, $document, $element) {
		this.$scope = $scope
		this.$document = $document
		this.$element = $element
	}

	$onInit() {
		this.ctrl = this.afterCtrl.parentCtrl
		this.setItemPolicyText()
		console.log(this.ctrl)
	}
	
	setItemPolicyText() {
		const policy = this.selectItem().itemFields[3]
		this.selectItem().itemFields[3] = policy.replace(/^\d{2} /, '')
		/*
		after setting the item policy the first time, register
		a watcher to change it again, in case it gets reset
		*/
		this.registerWatcher()
		return
	}

	registerWatcher() {
		let that = this
		this.$scope.$watch(
			function () {
				return that.selectItem().itemFields[3]
			},
			function (newValue, oldValue) {
				if (newValue !== oldValue) {
					that.setItemPolicyText()
				}
			}
		)
	}

	selectItem() {
		let componentName = this.$element[0].nodeName.toLocaleLowerCase()
		let index = Array.from(this.$document.find(componentName)).findIndex(e => e == this.$element[0])
		return this.ctrl.loc.items[index]
	}
}

hsgDisplayItemPolicyController.$inject = ['$scope', '$document', '$element']
