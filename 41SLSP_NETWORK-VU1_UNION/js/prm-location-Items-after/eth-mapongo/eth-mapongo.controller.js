export class ethMapongoController {

    constructor(ethMapongoLibrariesService, ethConfigService, ethMapongoConfig) {
        this.ethMapongoLibrariesService = ethMapongoLibrariesService;
        this.ethConfigService = ethConfigService;
        this.config = ethMapongoConfig;
        this.lang = this.ethConfigService.getLanguage();
    }

    $onInit() {
        // reference to prmLocationItemsController (all items)
        this.parentCtrl = this.afterCtrl.parentCtrl;
    };

    getMapongoImageSrc() {
        let src = "";
        try{
            if (!this.parentCtrl.loc || !this.parentCtrl.loc.location) {
                console.error("***ETH*** ethMapongoController.getMapongoImageSrc: loc or loc.location not available");
                return;
            }
            let loc = this.parentCtrl.loc.location;
            let baseUrl = this.ethMapongoLibrariesService.getBaseUrl(loc.libraryCode);

            src = baseUrl + "/static_images/projects/1/search_thumbnail.jpg?project_id=1&search_key=" + encodeURIComponent(this.callnumber);
            if (loc.libraryCode === "E51" || loc.libraryCode === "UPHZH" ) {
                src += "&search_context2=" + encodeURIComponent(this.sublocation);
            }
            if (loc.libraryCode === "E65") {
                src += "&e=" + encodeURIComponent(this.recordid);
            }
        }
        catch(e){
            console.error("***ETH*** EthMapongoController.getMapongoImageSrc:");
            console.error(e.message);
        }
        return src;
    }

    getMapongoUrl() {
        let url = "";
        try{
            let loc = this.parentCtrl.loc.location;
            let baseUrl = this.ethMapongoLibrariesService.getBaseUrl(loc.libraryCode);

            url = baseUrl + "/viewer?project_id=1&search_key=" + encodeURIComponent(this.callnumber) + "&language=" + this.lang + "&e=" + encodeURIComponent(this.recordid);
            // ZHAW-HSB-WIN
            if (loc.libraryCode === "E51" || loc.libraryCode === "UPHZH" ) {
                url += "&search_context2=" + encodeURIComponent(this.sublocation);
            }
            if (this.barcode != "") {
                    url += "&bcd=" + this.barcode;
            }

        }
        catch(e){
            console.error("***ETH*** EthMapongoController.getMapongoUrl:");
            console.error(e.message);
        }
        return url;
    }

    getMapongoQRC() {
        let src = "";
        try{
            let loc = this.parentCtrl.loc.location;
            let baseUrl = this.ethMapongoLibrariesService.getBaseUrl(loc.libraryCode);

            src = baseUrl + "/static_images/projects/1/search_qrcode.png?project_id=1&search_key=" + encodeURIComponent(this.callnumber) + "&language=" + this.lang + "&e=" + encodeURIComponent(this.recordid);
            if (loc.libraryCode === "E51" || loc.libraryCode === "UPHZH" ) {
                src += "&search_context2=" + encodeURIComponent(this.sublocation);
            }
            if (this.barcode != "") {
                src += "&bcd=" + this.barcode;
            }
        }
        catch(e){
            console.error("***ETH*** EthMapongoController.getMapongoQRC:");
            console.error(e.message);
        }
        return src;
    }


}

ethMapongoController.$inject = [ 'ethMapongoLibrariesService', 'ethConfigService', 'ethMapongoConfig'];
