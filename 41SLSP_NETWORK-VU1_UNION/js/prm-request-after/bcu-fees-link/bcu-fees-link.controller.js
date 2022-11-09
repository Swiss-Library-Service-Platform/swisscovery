export class bcuFeesLinkController {

    constructor($element) {
        this.$element = $element[0];
        this.form = this.$element.parentElement.parentElement;
        this.display = false;
    }

    $doCheck() {
      let form = false;
      //console.log('old-module');
            if (this.form.children[0].children[1] !== undefined && this.form.children[0].children[1].children[0] !== undefined) {
                form = this.form.children[0].children[1].children[0];
            }
            else if (this.form.children[0].children[0] !== undefined && this.form.children[0].children[0].children[0] !== undefined) {
                form = this.form.children[0].children[0].children[0];
            }

            //create and insert info block if not present

            if (form && form.children.length >= 2 && this.display === false) {
                this.display = true;
                let info = document.createElement('DIV');
                info.className = "courier-info bar alert-bar";
                info.innerHTML =
                `<h4>${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesTitle')}</h4>
		<p>${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesInfo')}</p>
		<p><a href="${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesUrl')}"
		target="_blank">${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesLinkText')}</a></p>`;
                form.insertBefore(info, form.children[form.children.length -1]);
            }
        }
}

bcuFeesLinkController.$inject = ['$element'];