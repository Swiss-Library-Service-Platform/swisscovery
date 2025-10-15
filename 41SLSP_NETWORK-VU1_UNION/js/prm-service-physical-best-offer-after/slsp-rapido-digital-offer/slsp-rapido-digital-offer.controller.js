export class slspRapidoDigitalOfferController {

    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.loaderTemplate = `<div class="slsp-rapido-loader"><prm-spinner class="inline-loader dark-on-light" layout="row" layout-align="start center"></prm-spinner></div>`
    }

    $onInit() {
        try {

            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.isDone = false;
            //console.log(this.parentCtrl);

        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido onInit \n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        try {
           

            // loader
            const loadingText = document.querySelectorAll('span[translate="rapido.tiles.placeholder.text"]')
            if (loadingText) {
                Array.from(loadingText).forEach(text => {
                    if (!text.classList.contains('rapido-loading')) {
                        angular.element(text).after(this.$compile(this.loaderTemplate)(this.$scope)).addClass('rapido-loading')
                    }
                })
            }

            if (this.isDone) return;

            // tilesplaceholderactive is true until the tile is loaded, also by reselecting pickupinfo
            if (this.parentCtrl.tilesplaceholderactive == true) return;


            /* costs per page */
            if (this.parentCtrl.isdigitaloffer === true) {

                this.$timeout(() => {
                    let rapidoCosts = document.querySelectorAll('div[ng-if="$ctrl.digitalTileVisible"] .patron_cost.last_line');
                    let htmlRc = `<div class="rapidoCosts" translate="customized.rapido.digi"></div>`;
                    angular.element(rapidoCosts).after(this.$compile(htmlRc)(this.$scope));
                }, 20);
            }


            /* reservation button */
            if (this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.unavailableInAllMembersPod === true && this.parentCtrl.bestoffer.unavailableResource === true) {
                this.$timeout(() => {
                    let reservation = document.querySelectorAll('prm-service-physical-best-offer .get_it_btn_physical > span');
                    let htmlR1 = `<div class="reservationButton" translate="customized.rapido.reservation"></div>`;

                    angular.element(reservation).after(this.$compile(htmlR1)(this.$scope)).addClass('noOffer');
                }, 20);
            }


            /* reading room POD */
            if (this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '452167832730000041' ||
                this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '452167827350000041' ||
                this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '452497325370000041' ||
                this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '452497929300000041' ||
                this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '452084165700000041' ||
                this.parentCtrl.isdigitaloffer !== true && this.parentCtrl.bestoffer !== undefined && this.parentCtrl.bestoffer.podId == '529457897220000041') {

                this.$timeout(() => {
                    let readingRoomPod = document.querySelectorAll('div[ng-if="$ctrl.physicalTileVisible"] prm-service-physical-best-offer .keep_for span');
                    let pickupInfo = document.querySelectorAll('prm-service-ngrs');
                    let htmlPD = `<span class="reading-Room-Pod" translate="customized.rapido.readingroom"></span>`;

                    angular.element(readingRoomPod).after(this.$compile(htmlPD)(this.$scope)).addClass('pod');
                    angular.element(pickupInfo).addClass('reading-room');
                }, 20);
            }

            this.isDone = true;


        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido doCheck \n\n");
            console.error(e.message);
        }
    }
}



slspRapidoDigitalOfferController.$inject = ['$scope', '$compile', '$timeout'];