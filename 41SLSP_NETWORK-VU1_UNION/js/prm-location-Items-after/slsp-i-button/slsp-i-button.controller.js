

//--------"i" button ---------------------------------------


    export class slspIButtonController {

        constructor() {}
      
        $onInit() {
            try{
                this.parentCtrl = this.afterCtrl.parentCtrl;
                this.getLibrary = getLibrary;
                this.biblinkText = "Library";
                this.biblinkBase = "https:\/\/slsp.ch\/libraries";

                function getLibrary() {
                    return this.parentCtrl.currLoc.location.librarycodeTranslation;
                    
                }
            
            }
            catch(e){
                console.error("***SLSP*** an error occured: slspIButtonController\n\n");
                console.error(e.message);
            }
        }
    }
    
    slspIButtonController.$inject = [];