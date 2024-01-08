export class slspHideRapidoLoanLinkController {
    constructor($element) {
        this.itemType = null;
        this.itemBarcode = null;
        this.hideTitle = false;
        this.$element = $element;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.itemBarcode = this.parentCtrl.item.itembarcode;
            this.itemType = this.parentCtrl.loansService.requestParams.type;

            if (this.itemBarcode.includes("RAPIDO") || this.itemBarcode.includes("41SLSP")) {
                this.setTitle = setTitle;

                function setTitle() {
                    return this.parentCtrl.item.title;
                }

                this.hideTitle = true;

                // Hinzufügen der hide-title Klasse zum Großelternelement prm-loan
                this.$element.parent().parent().addClass('hide-title');

                //console.log(this.$element.parent().parent())
            }
        } catch (e) {
            console.error("***SLSP*** an error occured: slspHideRapidoLoanLinkController\n\n");
            console.error(e.message);
        }
    }
}
slspHideRapidoLoanLinkController.$inject = ['$element'];