export class slspAlmaRequestController {

    constructor($scope, $compile, $timeout) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

                if (this.parentCtrl.serviceType == 'AlmaRequest' || this.parentCtrl.serviceType == 'AlmaItemRequest' || this.parentCtrl.serviceType == 'AlmaRequestAnyItem' || this.parentCtrl.serviceType == 'AlmaRequestOther') {

                    this.requestLoan = requestLoan;
                    let requestLoan = document.querySelectorAll('prm-opac form[name="requestForm"]');
                    
                    angular.element(requestLoan).addClass('almaRequestLoan');

                }

                else if (this.parentCtrl.serviceType == 'AlmaDigitization' || this.parentCtrl.serviceType == 'AlmaDigitizationOther' || this.parentCtrl.serviceType == 'AlmaGeneralDigitization' || this.parentCtrl.serviceType == 'AlmaItemDigitization' || this.parentCtrl.serviceType == 'AlmaResourceSharing' ) {
                    this.requestDigi = requestDigi;
                    let requestDigi = document.querySelectorAll('prm-opac form[name="requestForm"]');
                    angular.element(requestDigi).removeClass('almaRequestLoan');
                }

            } catch (e) {
                console.error("***SLSP*** an error occured: slspAlmaRequestController \n\n");
                console.error(e.message);
            }
        }
    
    
    }
    

            

slspAlmaRequestController.$inject = ['$scope', '$compile', '$timeout'];