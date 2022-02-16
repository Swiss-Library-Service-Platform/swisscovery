

//--------"i" button ---------------------------------------


    export class slspIButtonController {

        constructor() {}
      
        $doCheck() {
            try{
                this.parentCtrl = this.afterCtrl.parentCtrl;
                this.getLibrary = getLibrary;
                this.getLibraryCode = getLibraryCode;
                this.getLanguage = getLanguage;
                this.biblinkText = "Library";
                this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?search\=";

                function getLibrary() {
                    return this.parentCtrl.currLoc.location.librarycodeTranslation;
                    
                }
                function getLibraryCode() {
                    return this.parentCtrl.currLoc.location.libraryCode;
                    
                }
                function getLanguage() {
                    return this.parentCtrl.userSessionManagerService.$location.$$search.lang;
                    
                }
               
            }
            catch(e){
                console.error("***SLSP*** an error occured: slspIButtonController\n\n");
                console.error(e.message);
            }
        }
    }
    
    slspIButtonController.$inject = [];

    