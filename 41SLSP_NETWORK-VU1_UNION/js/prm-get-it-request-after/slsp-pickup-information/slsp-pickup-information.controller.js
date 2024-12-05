

//-----------------------------------------------


export class slspPickupInformationController {

    constructor( $scope ) {
        this.$scope = $scope;
        
    }

      
    $onInit() {
            try{
                this.parentCtrl = this.afterCtrl.parentCtrl;
                this.getInstitutionName = this.getInstitutionName.bind(this);
                this.getLibraryName = this.getLibraryName.bind(this);
                this.getSupplyTime = this.getSupplyTime.bind(this);
                this.getLoanPeriod = this.getLoanPeriod.bind(this);
                this.getPatronCost = this.getPatronCost.bind(this);
                this.getCurrency = this.getCurrency.bind(this);
                this.getChosenPlaceRadio = this.getChosenPlaceRadio.bind(this);
                //this.getIsUnavailableResource = this.getIsUnavailableResource.bind(this);

                //console.log(this.parentCtrl);
                //console.log(this.parentCtrl.jwtUtilService.getDecodedToken());             
                //if="!$ctrl.isDigitalOffer() && !$ctrl.isUnavailableResource()"
                
            }
                               
            
            catch(e){
                console.error("***SLSP*** an error occured: slsp Pickup Information Controller\n\n");
                console.error(e.message);
            }
            
        }
        getInstitutionName() {
            if (this.parentCtrl.pickupAnywhereService !== undefined) {
                return this.parentCtrl.pickupAnywhereService.getSelectedPickupInformation().institutionName;
            } else {
                return;
            }
        }
        getLibraryName() {
            if (this.parentCtrl.pickupAnywhereService !== undefined) {
                return this.parentCtrl.pickupAnywhereService.getSelectedPickupInformation().libraryName;
            } else {
                return;
            }
        }
        getSupplyTime() {
            if (this.parentCtrl.bestoffer !== null) {
                return this.parentCtrl.bestoffer.supplyTime;
            } else {
                return;
            }
        }
        getLoanPeriod() {
            if (this.parentCtrl.bestoffer !== null) {
                return this.parentCtrl.bestoffer.loanPeriod;
            } else {
                return;
            }
        }
        getPatronCost() {
            if (this.parentCtrl.bestoffer !== null) {
                return this.parentCtrl.bestoffer.patronCost;
            } else {
                return;
            }
        }
        getCurrency() {
            if (this.parentCtrl.bestoffer !== null) {
                return this.parentCtrl.bestoffer.currency;
            } else {
                return;
            }
           
        }
        getChosenPlaceRadio() {
            if (this.parentCtrl.pickupAnywhereService !== undefined) {
                return this.parentCtrl.pickupAnywhereService.getSelectedPickupInformation().chosenPlaceRadio;
            } else {
                return;
            }
        }

    }
    slspPickupInformationController.$inject = ['$scope'];
