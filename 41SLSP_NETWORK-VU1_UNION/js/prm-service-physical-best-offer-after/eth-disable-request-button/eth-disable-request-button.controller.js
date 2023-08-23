export class ethDisableRequestButtonController {

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.processDoCheck = true;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethDisableRequestButtonController \n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        try{
            if(!this.processDoCheck || !document.querySelector('prm-service-physical-best-offer .offer_details .rota_line > div > span'))return;
            let noAvailableCopies = document.querySelector('[translate="rapido.tiles.physical.no_best_offer.line_2"]');
            if(noAvailableCopies){
                let requestButton = document.querySelector('#get_it_btn_physical');
                angular.element(requestButton).attr('disabled', 'disabled');
            }
            this.processDoCheck = false;
        }
        catch(e){
            console.error("***ETH*** an error occured: ethDisableRequestButtonController $doCheck\n\n");
            console.error(e.message);
        }
    }
}