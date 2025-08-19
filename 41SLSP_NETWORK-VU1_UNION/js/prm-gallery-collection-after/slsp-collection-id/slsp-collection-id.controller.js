//-----------------slspCollectionIdController------------------------------

export class slspCollectionIdController {

    constructor($scope, $element) {
        this.$scope = $scope;
        this.$element = $element;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            //console.log(this.$scope);
            //console.log(this.$element);

            // Set collection-id attribute on the parent prm-gallery-collection element
            const collectionId = this.getCollectionId();
            if (collectionId) {
                const prmGalleryCollection = this.$element[0].closest('prm-gallery-collection');
                if (prmGalleryCollection) {
                    prmGalleryCollection.setAttribute('collection-id', collectionId);
                }
            }

        } catch (e) {
            console.error("***SLSP*** an error occured: slspCollectionIdController\n\n");
            console.error(e.message);
        }
    }

    getCollectionId() {
        if (this.parentCtrl.collection !== undefined && this.parentCtrl.collection.pid !== undefined) {
            return this.parentCtrl.collection.pid.value;
        } else {
            return;
        }
    }
}


slspCollectionIdController.$inject = ['$scope', '$element'];