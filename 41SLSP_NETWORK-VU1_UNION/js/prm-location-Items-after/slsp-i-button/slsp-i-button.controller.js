//--------"i" button ---------------------------------------


export class slspIButtonController {

    constructor() {}

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.getLibrary = getLibrary;
            this.getLibraryCode = getLibraryCode;
            this.getLanguage = getLanguage;
            this.biblinkText = "Library";
            this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?library\=";

            function getLibrary() {
                if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
                    return this.parentCtrl.currLoc.location.librarycodeTranslation;
            }
            else {
                return
            }
        }
            function getLibraryCode() {
                if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
                    return this.parentCtrl.currLoc.location.libraryCode;
            }
            else {
                return
            }
        }

            function getLanguage() {
                if (this.parentCtrl.userSessionManagerService !== undefined) {
                    return this.parentCtrl.userSessionManagerService.$location.$$search.lang;
            }
            else {
                return
            }
        }

        } catch (e) {
            console.error("***SLSP*** an error occured: slspIButtonController\n\n");
            console.error(e.message);
        }
    }
}

slspIButtonController.$inject = [];