//-------- ---------------------------------------


export class slspTranslatePublicNoteController {
    constructor($scope, $compile, $filter) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$filter = $filter;
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            //console.log(this.parentCtrl);

            let noteDe = document.querySelectorAll(".note-de");
            let noteEn = document.querySelectorAll(".note-en");
            let noteFr = document.querySelectorAll(".note-fr");
            let noteIt = document.querySelectorAll(".note-it");
            let noteBreak = document.querySelectorAll('p[ng-if="item.authNote"] br, p[ng-if="item.publicNote"] br');
            angular.element(noteBreak).remove();

            let lang = 'de';
            let sms = this.$scope.$root.$$childHead.$ctrl.userSessionManagerService;
            if (sms) {
                lang = sms.getInterfaceLanguage();
            }
            //console.log(lang);

            if (lang !== 'de') {
                angular.element(noteDe).remove();
            }
            if (lang !== 'en') {
                angular.element(noteEn).remove();
            }
            if (lang !== 'fr') {
                angular.element(noteFr).remove();
            }
            if (lang !== 'it') {
                angular.element(noteIt).remove();
            }

        } catch (e) {
            console.error('***SLSP*** Ein Fehler ist aufgetreten: TranslatePublicNoteController \n\n');
            console.error(e.message);
        }
    }
}

slspTranslatePublicNoteController.$inject = ['$scope', '$compile', '$filter'];
