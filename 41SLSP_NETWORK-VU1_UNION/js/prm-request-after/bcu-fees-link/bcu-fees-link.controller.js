export class bcuFeesLinkController {
    constructor($element) {
        this.$element = $element[0];
        this.form = this.$element.parentElement.parentElement;
        this.display = false;
    }

    $doCheck() {
        let form = false;

        if (this.form.children[0].children[1] !== undefined && this.form.children[0].children[1].children[0] !== undefined) {
            form = this.form.children[0].children[1].children[0];
        } else if (this.form.children[0].children[0] !== undefined && this.form.children[0].children[0].children[0] !== undefined) {
            form = this.form.children[0].children[0].children[0];
        }

        if (form && form.children.length >= 2 && this.afterCtrl.parentCtrl.serviceType !== 'AlmaPurchaseRequest') {
            if (!this.display) {
                this.display = true;
                let info = document.createElement('DIV');
                info.className = "courier-info bar alert-bar";
                info.innerHTML =
                    `<h4>${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesTitle')}</h4>
                    <p>${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesInfo')}</p>
                    <p><a href="${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesUrl')}"
                    target="_blank">${this.afterCtrl.parentCtrl.$translate.instant('customize.fullview.feesLinkText')}</a></p>`;
                form.insertBefore(info, form.children[form.children.length - 1]);
            }
        } else {
            if (this.display) {
                this.display = false;
                let feesInfo = this.form.querySelector('.courier-info.bar.alert-bar');
                if (feesInfo) {
                    feesInfo.remove();
                }
            }
        }
    }
}

bcuFeesLinkController.$inject = ['$element'];
