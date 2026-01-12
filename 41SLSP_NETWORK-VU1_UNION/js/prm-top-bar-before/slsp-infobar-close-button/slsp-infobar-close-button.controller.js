export class slspInfobarCloseButtonController {
    constructor() {
       
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
        }
        catch (e) {
            console.error("***SLSP*** an error occured in slspInfobarCloseButtonController $onInit:");
            console.error(e.message);
        }

       
    }

   
}
slspInfobarCloseButtonController.$inject = ['$scope', '$document'];
