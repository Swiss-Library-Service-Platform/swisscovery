export class bcuSearchSlotsController {

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.parentCtrl.showTabsAndScopes = true;
    };

}
