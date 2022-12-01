//--------slspIconLabel ---------------------------------------


export class slspIconLabelRapidoController {

    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }



    $onInit() {
        try {
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;

                /*icon label*/
                if (this.parentCtrl.isdigitaloffer === true) {
                    this.iconLabel = iconLabel;

                    let iconLabel = document.querySelectorAll('#item-ngrs > div > div > div[ng-if="$ctrl.digitalTileVisible"] > prm-service-physical-best-offer > div > div.icon-wrapper');
                    let html1 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><g><circle cx="130" cy="130" r="10.57" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><path d="M145.26,152.31c-4.34,2.98-9.6,4.69-15.26,4.69-14.91,0-27-12.09-27-27s12.09-27,27-27,27,12.09,27,27v2.35c0,4.54-3.68,8.21-8.21,8.21s-8.22-3.68-8.22-8.21v-2.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g><g><path d="M88.91,130H37c-4.97,0-9-4.03-9-9V55c0-4.96,4.03-9,9-9h108c4.97,0,9,4.04,9,9v42.32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polyline points="151 49 91 97 31 49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg></div><div class="iconLabel" translate="customized.fee.digi"></div></div>`;


                    angular.element(iconLabel).after(this.$compile(html1)(this.$scope)).addClass('icnLbl');
                }

                if (this.parentCtrl.isdigitaloffer !== true) {
                    this.iconLabel2 = iconLabel2;
                    let iconLabel2 = document.querySelectorAll('#item-ngrs > div > div > div[ng-if="$ctrl.physicalTileVisible"] > prm-service-physical-best-offer > div > div.icon-wrapper');
                    let html2 = `<div class="icnWrp"><div class="iconDiv"><svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g><line x1="6.16" y1="82.58" x2="29.16" y2="82.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="17.66" y1="97.91" x2="29.16" y2="97.95" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="25.33" y1="113.24" x2="29.16" y2="113.28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><g><circle cx="151.84" cy="125.5" r="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><circle cx="67.84" cy="125.5" r="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><polyline points="163.84 125.5 178.84 125.5 178.84 98.5 160.47 65.84 124.84 65.84 124.84 47.5 40.84 47.5 40.84 125.5 55.84 125.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="139.84" y1="125.5" x2="79.84" y2="125.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="124.84" y1="53.5" x2="124.84" y2="125.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/><line x1="178.84" y1="98.5" x2="124.84" y2="98.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg></div><div class="iconLabel" translate="customized.fee.courier">Courier</div><div class="courierInfo" translate="customized.fee.localcourier">blabla bla Blaabl bla</div></div>`;

                    angular.element(iconLabel2).after(this.$compile(html2)(this.$scope)).addClass('icnLbl2');
                }


            }, 0);
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }

}

slspIconLabelRapidoController.$inject = ['$scope', '$compile', '$timeout'];



// md-content > prm-locations > div.padding-left-medium > md-list.separate-list-items.margin-bottom-medium.padding-bottom-zero.md-primoExplore-theme