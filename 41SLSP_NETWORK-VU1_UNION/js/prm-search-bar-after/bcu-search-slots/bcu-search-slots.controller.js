export class bcuSearchSlotsController {

    $onInit() {
        this.parentCtrl = this.afterCtrl.parentCtrl;
        this.parentCtrl.showTabsAndScopes = true;

        //add the institution code as a class to the primo-explore element
        let instClass = this.parentCtrl.jwtUtilService.getInstitutionCode();
        let institution = angular.element(document.querySelector('primo-explore'));
        return institution.addClass(instClass)
    };

}
