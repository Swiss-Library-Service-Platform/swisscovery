export class bcuLangSwitchController {

    constructor($element, $window) {
        this.$parent = $element.parent().parent()[0];
        
        this.$window = $window;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.languages = ["de","fr","it","en"];
            if (!this.languages.includes(this.parentCtrl.lang)) {
                this.changeLanguage("en");
            }
            
        }
        catch (e) {
            console.error("***BCUFR*** bcuLangSwitchControler $onInit");
            console.error(e.message);
        }
    };

    changeLanguage(lang) {
        
        this.parentCtrl.changeLangService.addLangParamToUrl(lang);
        let t = this.parentCtrl;
        this.parentCtrl.i18nService.setLanguage(lang).then(function(){
            t.$timeout(function(){return t.$state.go(t.$state.current,{lang:lang},{reload:!0})})
        });
 };

}
bcuLangSwitchController.$inject = ['$element'];