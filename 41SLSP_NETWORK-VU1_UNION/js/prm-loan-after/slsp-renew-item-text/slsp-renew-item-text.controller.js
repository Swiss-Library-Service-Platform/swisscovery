//--------Renewstatus display of loan items ---------------------------------------

export class slspRenewItemTextController {

    constructor() {

    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.getRenewText = getRenewText;

            function getRenewText() {
                if (this.parentCtrl.item.renewstatuses !== undefined && this.parentCtrl.item.renewstatuses.renewstatus[0] !== undefined) {
                    return this.parentCtrl.item.renewstatuses.renewstatus[0];
                }
                else {
                    return
                }
            }
        }

        catch (e) {
            console.error("***SLSP*** an error occured: slspRenewItemTextController\n\n");
            console.error(e.message);
        }
    }
}

slspRenewItemTextController.$inject = [];

