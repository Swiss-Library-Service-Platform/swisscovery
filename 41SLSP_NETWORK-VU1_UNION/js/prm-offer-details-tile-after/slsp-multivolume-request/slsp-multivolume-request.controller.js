//-----------------MultivolumeRequest------------------------------

export class slspMultivolumeRequestController {
    constructor($scope) {
        this.$scope = $scope;
        this.previousUnavailableResource = null; 
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            const currentUnavailableResource = this.parentCtrl.bestoffer.unavailableResource;
           
            if (currentUnavailableResource !== this.previousUnavailableResource) {
              
                //console.log(this.parentCtrl);
             
                if (currentUnavailableResource !== false) {
                    //console.log("Request nicht möglich");
                    this.disableRequestButton();
                } else {
                    //console.log("Request möglich");
                    this.enableRequestButton();
                }

                this.previousUnavailableResource = currentUnavailableResource; 
            }
        } catch (e) {
            console.error("***SLSP*** an error occurred: Multivolume Request\n\n");
            console.error(e.message);
        }
    }

    disableRequestButton() {
        const requestButton = document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple');
        if (requestButton) {
            requestButton.disabled = true;
        }
    }

    enableRequestButton() {
        const requestButton = document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple');
        if (requestButton) {
            requestButton.disabled = false;
        }
    }
}

slspMultivolumeRequestController.$inject = ['$scope'];