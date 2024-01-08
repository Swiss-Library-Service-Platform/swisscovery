export class slspCollapseDetailsController {
	constructor($scope, $element, $sce, $compile, slspCollapseDetailsConfig, hsgTranslatorService) {
		this.$scope = $scope;
		this.$element = $element;
		this.$sce = $sce;
		this.$compile = $compile;
		this.config = slspCollapseDetailsConfig;
		this.translator = hsgTranslatorService;
		this.waiting = true;
		this.iconExpand = this.config.icons.expand;
		this.iconCollapse = this.config.icons.collapse;
		this.labels = {
			expandButtonLabel: '<span translate="fulldisplay.details.showAll"> </span>',
			collapseButtonLabel: '<span translate="fulldisplay.details.showLess"></span>',
		};

	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl

		this.parentCtrl.NUMBER_OF_DETAILS_TO_SHOW = 1000;
		this.rootEl = this.$element.parent().parent().query('div').children()
		let that = this
		
		// add a watcher to the root element
		// trigger when children are rendered
		// and deregister after first call
		let deregister = this.$scope.$watch(
			function () {
				return that.rootEl.query('div')
			},
			function (newValue, oldValue) {
				if (that.waiting && newValue !== oldValue) {
					that.waiting = false
					that.makeFoldable()
					deregister()
				}
			}
		)
	}

	makeFoldable() {
		let details = this.parentCtrl._details

		for (let key in details) {
			let detail = details[key]
			if (typeof detail != 'object') {
			continue
			}
			if (this.config.ignore.includes(detail.label)) {
			continue
			}
			let values = detail.values[0].values
			
			let textLength = values[0].length
			const configItem = this.config.itemCount;
			const lowerBound = configItem + 3;
			//console.log(values);
			//console.log(this);
			if (textLength > this.config.charCount) {
				this.addMarkup(this.getItemContainer(key), 1, true)
			} else if (values.length > configItem && values.length >= lowerBound) {
				this.addMarkup(this.getItemContainer(key), this.config.itemCount, false)
			}
		}
	}

	getItemContainer(key) {
		let children = this.rootEl.children()
		let child = children[key]
		return child.querySelector('.item-details-element-container')
	}

	addMarkup(itemContainer, count, longtext) {
		itemContainer.classList.add('hsg-collapsed')
		let item = itemContainer.querySelector('.item-details-element')
		let listitems = item.querySelectorAll('[role=listitem]')
		for (let key in listitems) {
			let listitem = listitems[key]
			if (typeof listitem != 'object') {
				continue
			}
			if (longtext && key < count) {
				listitem.classList.add('hsg-foldable-item-longtext')
			}
			if (key >= count) {
				listitem.classList.add('hsg-foldable-item')
			}
		}

		//console.log(longtext);
		
		let expand = document.createElement('div');
		expand.classList.add('hsg-expand-button');
		expand.innerHTML = this.iconExpand + this.labels.expandButtonLabel;
		this.$compile(expand)(this.$scope);
		item.insertBefore(expand, item.children[count]);

		let collapse = document.createElement('div');
		collapse.classList.add('hsg-collapse-button');
		collapse.style.display = 'none';
		item.appendChild(collapse);

		expand.addEventListener('click', () => {
			expand.style.display = 'none';
			collapse.style.display = 'inline-block';
			itemContainer.classList.remove('hsg-collapsed');
			itemContainer.classList.add('hsg-expanded');

			collapse.innerHTML = this.iconCollapse + this.labels.collapseButtonLabel;
			this.$compile(collapse)(this.$scope);
		});

		collapse.addEventListener('click', () => {
			itemContainer.classList.add('hsg-collapsed');
			itemContainer.classList.remove('hsg-expanded');
			expand.style.display = 'inline-block';
			collapse.style.display = 'none';
		});
	}



	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return key
		}
		let msg = this.translator.getLabel(key, this.config)
		return this.$sce.trustAsHtml(msg)
	}
}

slspCollapseDetailsController.$inject = ['$scope', '$element', '$sce', '$compile', 'slspCollapseDetailsConfig', 'hsgTranslatorService']


