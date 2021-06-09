export class ethArchivesGetitController {

    constructor( $location, ethConfigService, ethArchivesGetitConfig ) {
        this.$location = $location;
        this.ethConfigService = ethConfigService;
        this.config = ethArchivesGetitConfig;
        this.guidCMIStar = '';
    }

    $onInit() {
        try{
            this.parentCtrl = this.afterCtrl.parentCtrl;
                        
            if(!this.parentCtrl.item.pnx.display.source || this.parentCtrl.item.pnx.display.source.length === 0){
                return;
            }
            this.source= this.parentCtrl.item.pnx.display.source[0];

            if(this.source !== 'ETH_Hochschularchiv' && this.source !== 'ETH_MaxFrischArchiv' && this.source !== 'ETH_ThomasMannArchiv'){
                return;
            }

            // Hochschularchiv: sometimes there is an online link, sometimes not
            if(this.source === 'ETH_Hochschularchiv'){
                if(this.parentCtrl.item.delivery.GetIt1 && this.parentCtrl.item.delivery.GetIt1.length > 0 && this.parentCtrl.item.delivery.GetIt1[0].links && this.parentCtrl.item.delivery.GetIt1[0].links.length > 0){
                    // there is an online resource
                    let aLink = this.parentCtrl.item.delivery.GetIt1[0].links.filter( l => {
                        if(l.isLinktoOnline && l.link !== ''){
                            return true;
                        }
                        return false;
                    });
                    if ( aLink.length > 0 ) {
                        return;
                    }
                    // Fullview: change Heading
                    let fullView = document.getElementById('fullView');
                    if(fullView){
                        fullView.classList.add('eth-fullview-hsa-no-online');
                        fullView.classList.add('eth-fullview-hsa-no-online-' + this.ethConfigService.getLanguage());
                    }
                }
            }
            // get guid of CMIStar for cmistar link
            let sourceid = this.parentCtrl.item.pnx.control.originalsourceid[0];
            this.guidCMIStar = sourceid.substring(sourceid.lastIndexOf(':') + 1);

            // hide content of online section
            let section = document.getElementById('full-view-container');
            section.classList.add('eth-archives-getit-hide');
        }
        catch(e){
            console.error("***ETH*** an error occured: ethArchivesGetitController\n\n");
            console.error(e.message);
        }
    }

}

ethArchivesGetitController.$inject = ['$location', 'ethConfigService', 'ethArchivesGetitConfig' ];
