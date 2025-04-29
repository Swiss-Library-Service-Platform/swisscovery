export class bcuLangSwitchController {

    constructor($element, $window, $timeout) {
        this.$parent = $element.parent().parent()[0];
        this.$window = $window;
        this.$timeout = $timeout;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.languages = ["de", "fr", "it", "en"];
            if (!this.languages.includes(this.parentCtrl.lang)) {
                this.changeLanguage("en");
            }

            // Dynamische Tooltip-Positionierung initialisieren
            this.$timeout(() => this.initTooltipPositioning());
        }
        catch (e) {
            console.error("***BCUFR*** bcuLangSwitchControler $onInit");
            console.error(e.message);
        }
    };

    changeLanguage(lang) {
        this.parentCtrl.changeLangService.addLangParamToUrl(lang);
        let t = this.parentCtrl;
        this.parentCtrl.i18nService.setLanguage(lang).then(function () {
            t.$timeout(function () { return t.$state.go(t.$state.current, { lang: lang }, { reload: !0 }) })
        });
    };

    getAriaLabelByLanguage(lang) {
       return this.getAriaLabels()[lang]["aria_label_" + lang];
    }

    getAriaLabels() {
        return {
            "de": {
                "aria_label_de": "Deutsch",
                "aria_label_en": "Englisch",
                "aria_label_fr": "Französisch",
                "aria_label_it": "Italienisch"
            },
            "en": {
                "aria_label_de": "German",
                "aria_label_en": "English",
                "aria_label_fr": "French",
                "aria_label_it": "Italian"
            },
            "fr": {
                "aria_label_de": "Allemand",
                "aria_label_en": "Anglais",
                "aria_label_fr": "Français",
                "aria_label_it": "Italien"
            },
            "it": {
                "aria_label_de": "Tedesco",
                "aria_label_en": "Inglese",
                "aria_label_fr": "Francese",
                "aria_label_it": "Italiano"
            }
        }
    }

    initTooltipPositioning() {
        const tooltips = document.querySelectorAll('.custom-tooltip');
        tooltips.forEach(tooltip => {
            const tooltipText = tooltip.querySelector('.tooltip-text');
            tooltip.addEventListener('mouseenter', () => {
                // Tooltip-Position zurücksetzen
                tooltipText.style.left = '50%';
                tooltipText.style.right = 'auto';
                tooltipText.style.transform = 'translateX(-50%)';

                // Tooltip-Position berechnen
                const rect = tooltipText.getBoundingClientRect();
                const viewportWidth = this.$window.innerWidth;

                // Prüfen, ob der Tooltip außerhalb des rechten Fensterrands liegt
                if (rect.right > viewportWidth) {
                    tooltipText.style.left = 'auto';
                    tooltipText.style.right = '0'; // Tooltip an den rechten Rand des Buttons ausrichten
                    tooltipText.style.transform = 'none'; // Zentrierung entfernen
                }
            });
        });
    }
}

bcuLangSwitchController.$inject = ['$element', '$window', '$timeout'];