//-----------------slsp-save-label-button------------------------------

export class slspSaveLabelButtonController {
    constructor($scope, $compile, $element) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$element = $element;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;

            // Erstellen Sie den "Add" -Button
            let buttonAdd = '<button type="submit" class="slsp-save-label-button"><md-icon class="md-primoExplore-theme"><svg width="100%" height="100%" viewBox="0 0 24 24" id="ic_add_24px_cache88" x="24" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></md-icon></button>';

            // Holen Sie sich alle passenden Formulare
            let labelForms = document.querySelectorAll('form[ng-submit="$ctrl.addNewLabel()"]');

            // Fügen Sie den "Add"-Button für jedes Formular hinzu, wenn er noch nicht hinzugefügt wurde
            labelForms.forEach(form => {
                if (!angular.element(form).data('buttonAdded')) {
                    let mdInputContainer = angular.element(form).find('md-input-container');
                    mdInputContainer.after(buttonAdd);
                    angular.element(form).data('buttonAdded', true);
                }
            });
        } catch (e) {
            console.error("***SLSP*** an error occured: slsp-save-label-button\n\n");
            console.error(e.message);
        }
    }
}

slspSaveLabelButtonController.$inject = ['$scope', '$compile', '$element'];
