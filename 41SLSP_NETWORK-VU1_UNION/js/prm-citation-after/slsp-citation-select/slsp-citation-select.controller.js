

export class slspCitationSelectController {

    constructor($scope, $timeout, $compile) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$compile = $compile;
    }
 
    $onInit() {
        try {
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
    
                let citationSelectRadio = '<div class="md-container slsp-citation-select"><div class="md-off"></div><div class="md-on"></div></div>';
    
                let citationSelectList = document.querySelectorAll('prm-citation ul li button');
                
                angular.forEach(citationSelectList, (citationSelect) => {
                    angular.element(citationSelect).append(this.$compile(citationSelectRadio)(this.$scope)).addClass('slsp-citation-select-radio');
                });
    
                //console.log(citationSelectRadio);
    
            }, 0);
    
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido hide Library\n\n");
            console.error(e.message);
        }
    }
    
    
}

slspCitationSelectController.$inject = ['$scope', '$timeout', '$compile'];