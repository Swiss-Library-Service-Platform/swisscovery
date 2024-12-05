//-----------------------------------------------

export class slspClosePickupAnywhereFormController {
    constructor() {
        this.parentCtrl = null;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            //console.log(this.parentCtrl);
        } catch (e) {
            console.error("***SLSP*** An error occurred: ClosePickupAnywhereForm");
            console.error(e.message);
        }
    }

    closePickupAnywhereForm() {
        if (this.parentCtrl) {
            this.parentCtrl.hidePickupAnywhereForm.emit();
        } else {
            console.error("slspClosePickupAnywhereFormController");
        }
    }
}

slspClosePickupAnywhereFormController.$inject = [];