//-----------------RapidoHideLibrary------------------------------

export class slspClosedFinesBarController {
    constructor($scope) {
        this.$scope = $scope;
        this.showClosedFines = false; 
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
        } catch (e) {
            console.error("***SLSP*** an error occurred: RequestCancelButton \n\n");
            console.error(e.message);
        }
    }

    $doCheck() {
        if (this.parentCtrl.finesTypeDropDownSelection === 'closed' || this.parentCtrl.finesTypeDropDownSelection === 'all') {
            const currentFinesArray = this.parentCtrl.totalNumOfFines;
            if (angular.isArray(currentFinesArray) && currentFinesArray.length > 0) {
                let hasClosedFines = false;
                angular.forEach(currentFinesArray, (fine) => {
                    if (fine.fineType === 'CLOSED' && !fine.firstWordRemoved) {
                        hasClosedFines = true;

                        //replace the first 2 words in the line right text with the fine data
                        let fineData = fine.expandedDisplay[0].data;
                        let firstLineRightText = fine.firstLineRight;
                        const words = firstLineRightText.split(/\s+/);
                        words.splice(0, 2);
                        words.unshift(fineData);
                        fine.firstLineRight = words.join(' ');
                        fine.firstWordRemoved = true;
                        //console.log(fine);
                    }
                });
                this.showClosedFines = hasClosedFines;
            } else {
                this.showClosedFines = false;
            }
        } else {
            this.showClosedFines = false;
        }
    }
}

slspClosedFinesBarController.$inject = ['$scope'];