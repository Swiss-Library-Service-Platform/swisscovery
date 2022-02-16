

//--------CollapseOtherInst ---------------------------------------


export class slspCollapseOtherInstController {

    constructor() {
       
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.parentCtrl.isCollapsed = true;
        
        }   
        
    }


slspCollapseOtherInstController.$inject = [];

