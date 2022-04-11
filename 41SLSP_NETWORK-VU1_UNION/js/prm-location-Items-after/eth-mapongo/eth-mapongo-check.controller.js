export class ethMapongoCheckController {

    constructor( $scope, $compile, $element, ethMapongoLibrariesService ) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$element = $element;
        this.ethMapongoLibrariesService = ethMapongoLibrariesService;
        this.isMapongoLibrary = true;
        this.noLocationItemAfter = 0;
     }

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
    }

    $doCheck() {
        try{
            // are location item elements loaded and rendered? Or "show more items" pushed?
            let locationItemAfter = this.$element[0].parentElement.parentElement.getElementsByTagName('prm-location-item-after');
            let noLocationItemAfter = locationItemAfter.length;
            if(noLocationItemAfter <= this.noLocationItemAfter){
                return;
            }
            this.noLocationItemAfter = noLocationItemAfter;

            // mapongo library?
            if(!this.isMapongoLibrary)return;
            if (!this.ethMapongoLibrariesService.isMapongoLibrary(this.parentCtrl.loc.location.libraryCode)) {
                this.isMapongoLibrary = false;
                return;
            }

            // array of html collection prm-location-item-after
            let aPrmLocationItemAfter = [].slice.call(locationItemAfter);
            this.recordid = this.parentCtrl.item.pnx.control.sourcerecordid[0];

            // iterate items of a location (Exemplare), get reference to after directive of location-item and inject eth-mapongo-directive
            for(let i = 0; i < this.parentCtrl.loc.items.length; i++){
                if(i >= aPrmLocationItemAfter.length){
                    // more items than initially rendered
                    return;
                }

                let item = this.parentCtrl.loc.items[i];
                let prmLocationItemAfter = aPrmLocationItemAfter[i];

                // is mapongo directive already injected?
                let ethMapongo = prmLocationItemAfter.querySelector('eth-mapongo');
                if(!!ethMapongo){
                    continue;
                }

                if (!this.ethMapongoLibrariesService.isMapongoSubLocation(this.parentCtrl.loc.location.libraryCode, item._additionalData.secondarylocationname)) {
                    continue;
                }
				
                if(!this.ethMapongoLibrariesService.isAvailable(item._additionalData.itemstatusname)){
                    continue;
                }
				

                this.subLocationCode = this.ethMapongoLibrariesService.getSubLocationCode(this.parentCtrl.loc.location.libraryCode, item._additionalData.secondarylocationname);
                this.callnumber = item._additionalData.callnumber;
                let addCallnumberEntry = item.fullItemFields.filter(function(e) {return e.indexOf("Zusätzliche Signatur:") > -1 || e.indexOf("Additional call number:") > -1;} );
                this.addCallnumber = "";
                if (addCallnumberEntry.length > 0) {
                    this.addCallnumber = addCallnumberEntry[0].replace("Zusätzliche Signatur: ","").replace("Additional call number: ","");
                }
                if(this.addCallnumber != ""){
                    // todo: is it always correct to use 'Additional call number' if it exists?
                    this.callnumber = this.addCallnumber;
                }

                let barcodeEntry = item.fullItemFields.filter(function(e) {return e.indexOf("Barcode:") > -1 || e.indexOf("Strichcode:") > -1;} );
                this.barcode = "";
                if (barcodeEntry.length > 0) {
                    this.barcode = barcodeEntry[0].replace("Barcode: ","").replace("Strichcode: ","");
                }
				
                // inject eth-mapongo element (handled by eth-mapongo.module)
                angular.element(prmLocationItemAfter).append(this.$compile('<eth-mapongo after-ctrl="$ctrl" class="eth-mapongo-container" recordid="' + this.recordid + '" barcode="' + this.barcode + '" callnumber="' + this.callnumber + '" sublocation="' + this.subLocationCode + '"parent-ctrl="$ctrl.parentCtrl"></eth-mapongo>')(this.$scope));
            }
        }
        catch(e){
            console.error("***ETH*** ethMapongoCheckController.$doCheck:");
            console.error(e.message);
        }

    }
}

ethMapongoCheckController.$inject = [ '$scope', '$compile', '$element', 'ethMapongoLibrariesService'];
