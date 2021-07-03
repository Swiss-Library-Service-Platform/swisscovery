app.controller('EditPersonalDetailsController', ['$scope', function ($scope) {

    let lang = 'en';
    let sms = $scope.$root.$$childHead.$ctrl.userSessionManagerService;
    if (sms) {
        lang = sms.getInterfaceLanguage();
    }
    this.detailsBaseEdu = "https:\/\/eduid.ch\/web\/change-account-data\/2\/?lang=" + lang;
    this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/?lang=" + lang;
    this.grpA = ['11', '91', '92'];
    this.grpB = ['12', '13', '14', '15', '16'];
    this.noShow = ['STAFF', '99'];
    this.showButtons = this.showA = this.showB = false;

    this.$doCheck = function () {
        if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
            let patron = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
            if (this.grpA.includes(patron)) {
                this.showA = true;
            }
            else if (this.grpB.includes(patron)) {
                this.showB = true;
            }
            else if (!this.noShow.includes(patron)) {
                this.showButtons = true;
            }
        }
    }
}]);

app.component('prmPersonalInfoAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'EditPersonalDetailsController',
    template: '<md-card ng-show="$ctrl.showA || $ctrl.showB">\
                    <md-card-content>\
                        <p>\
                            <span ng-show="$ctrl.showA" translate="customized.libraries.details"></span>\
                            <span ng-show="$ctrl.showB" translate="customized.slsp.details"></span>\
                        </p>\
                    </md-card-content>\
                </md-card>\
                <div ng-show="$ctrl.showButtons">\
                    <md-button class="md-button-confirm button-link" href="{{ $ctrl.detailsBaseEdu }}" target="_blank">\
                        <prm-icon  class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui" icon-definition="pencil"></prm-icon>\
                        <span translate="customized.personal.details"></span>\
                    </md-button>\
                    <br>\
                    <md-button class="md-button-confirm button-link" href="{{ $ctrl.detailsBaseReg }}" target="_blank">\
                        <prm-icon class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui" icon-definition="account-card-details"></prm-icon>\
                        <span translate="customized.libcard.number"></span>\
                    </md-button>\
                </div>'

});