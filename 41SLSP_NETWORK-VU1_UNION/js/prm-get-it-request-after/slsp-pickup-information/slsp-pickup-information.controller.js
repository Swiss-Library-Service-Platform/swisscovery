

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
            if (this.parentCtrl && this.parentCtrl._bestOffer && this.parentCtrl._bestOffer.supplyTime) {
                return this.parentCtrl._bestOffer.supplyTime;
            } else {
                return null; // Rückgabe von null, wenn kein Wert vorhanden ist
            }
        }
        
        getLoanPeriod() {
            if (this.parentCtrl && this.parentCtrl._bestOffer && this.parentCtrl._bestOffer.loanPeriod) {
                return this.parentCtrl._bestOffer.loanPeriod;
            } else {
                return null; // Rückgabe von null, wenn kein Wert vorhanden ist
            }
        }
        
        getPatronCost() {
            if (this.parentCtrl && this.parentCtrl._bestOffer && this.parentCtrl._bestOffer.patronCost) {
                return this.parentCtrl._bestOffer.patronCost;
            } else {
                return null; // Rückgabe von null, wenn kein Wert vorhanden ist
            }
        }
        
        getCurrency() {
            if (this.parentCtrl && this.parentCtrl._bestOffer && this.parentCtrl._bestOffer.currency) {
                return this.parentCtrl._bestOffer.currency;
            } else {
                return null; // Rückgabe von null, wenn kein Wert vorhanden ist
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
