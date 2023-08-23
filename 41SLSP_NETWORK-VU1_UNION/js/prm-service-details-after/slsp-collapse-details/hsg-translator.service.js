export const hsgTranslatorService = ['$rootScope', '$log',
	function ($rootScope, $log) {
		this.defaultLang = 'de'

		this.getLang = function () {
			let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService
			if (!sms) {
				$log.error("UserSessionManagerService not available")
				return this.defaultLang
			}
			else {
				return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage
			}
		}

		this.getLabel = function (key, config) {
			if (!config) {
				$log.error('no config object present', key)
				return key
			}
			let labels = config.labels
			if (!labels) {
				throw new Error("Config contains no labels")
			}
			let labelSet = labels[key]
			if (!labelSet) {
				$log.error('label not found: ', key)
				return key
			}
			let lang = this.getLang()
			let label = labelSet[lang]
			if (!label) {
				$log.error('no translation for label', key, lang)
				label = labelSet[this.defaultLang]
			}
			if (!label) {
				$log.error('no translation for label', key, this.defaultLang)
				return key
			}
			return label
		}

		return {
			getLang: this.getLang,
			getLabel: this.getLabel
		}

	}]