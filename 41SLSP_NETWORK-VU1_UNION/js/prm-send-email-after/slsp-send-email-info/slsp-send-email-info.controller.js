

export class slspSendEmailInfoController {

    constructor( $scope, $compile) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.sendEmailInfoLabel = '<div class="send-email-info-box"><span translate="customized.email.infobox"></span></div>';
        
    }
 
    $onInit() {
        try {
            
            this.parentCtrl = this.afterCtrl.parentCtrl;

            let sendEmailForm = angular.element(document.querySelectorAll(`form[name="emailForm"]`));

            if (sendEmailForm && !sendEmailForm.html().includes('customized.email.infobox')) {
                let compiledHtml = this.$compile(this.sendEmailInfoLabel)(this.$scope);
                sendEmailForm.prepend(compiledHtml);
            }
            
            
            console.log(this.parentCtrl);
            console.log(this.parentCtrl.jwtUtilService.getDecodedToken());
            console.log(this.parentCtrl.jwtUtilService.decodeJWT());
    
      
    
        } catch (e) {
            console.error("***SLSP*** an error occured: slspSendEmailInfoController\n\n");
            console.error(e.message);
        }
    }
    
    
}

slspSendEmailInfoController.$inject = [ '$scope', '$compile'];