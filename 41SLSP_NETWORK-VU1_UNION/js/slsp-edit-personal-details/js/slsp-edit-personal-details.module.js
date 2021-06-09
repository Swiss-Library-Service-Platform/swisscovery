

angular
    .module('slspEditPersonalDetails', [])



    //------------------------------ edit personal details  ---------------------------

    .controller('EditPersonalDetailsController', [function () {

        this.detailsBaseEdu = "https:\/\/eduid.ch";
        this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/";
        this.exclude = ['STAFF', '11', '12', '13', '14', '15', '16', '91', '92', '99'];
        this.grpA = ['11', '91', '92'];
        this.grpB = ['12', '13', '14', '15', '16'];


        this.getPatronGrp = function() {
            if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                let patron = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                if (!this.exclude.includes(patron)) {
                    return true;
                }
                else {
                    return false;
            }
        }
            return false;
        }

        this.grpLabelA = function() {
            if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                let labelA = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                if (this.grpA.includes(labelA)) {
                    return true;
                }
                else {
                    return false;
            }
        }
            return false;
        }

    
        this.grpLabelB = function() {
            if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
                let labelB = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
                if (this.grpB.includes(labelB)) {
                    return true;
                }
                else {
                    return false;
            }
        }
            return false;
        }

 
    }])


    .component('prmPersonalInfoAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'EditPersonalDetailsController',
        template: '<md-card ng-if="$ctrl.grpLabelA()" translate="customized.libraries.details" flex="100" class="bar alert-bar courier-info"></md-card><md-card ng-if="$ctrl.grpLabelB()" translate="customized.slsp.details" flex="100" class="bar alert-bar courier-info"></md-card>       <div layout="column"> <md-button ng-if="$ctrl.getPatronGrp()" href="{{ $ctrl.detailsBaseEdu }}" target="_blank" layout="row" class="courier-info bar alert-bar layout-align-left-center layout-row" layout-align="left center"><span class="md-subhead"><prm-icon  class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui" icon-definition="pencil"></prm-icon><span  class="md-subhead" translate="customized.personal.details"></span></md-button>   <br />   <md-button ng-if="$ctrl.getPatronGrp()" href="{{ $ctrl.detailsBaseReg }}" target="_blank" layout="row" class="courier-info bar alert-bar layout-align-left-center layout-row" layout-align="left center"><prm-icon class="rotate-20 margin-right-small" icon-type="svg" svg-icon-set="primo-ui" icon-definition="account-card-details"></prm-icon><span  class="md-subhead" translate="customized.libcard.number"></span></md-button ></div> '

    });
