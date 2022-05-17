

angular
    .module('slspRequestCancelButton', [])



    //------------------------------ edit personal details  ---------------------------

    .controller('slspRequestCancelButtonController', ['$scope', function ($scope) {

        
        this.scope = $scope;

        this.scope.$watch('$parent.$ctrl.requestsDisplay', (currentRequestArray) => {

            if (angular.isArray(currentRequestArray) && currentRequestArray.length > 0)

                angular.forEach(currentRequestArray, (request) => {

                    
                    if (request.requestType === 'ill' ) {
                        if (request.statusCode === 'DELIVERED' || 
                            request.statusCode === 'LOST_COMMUNICATED' || 
                            request.statusCode === 'RECALLED_BOR' || 
                            request.statusCode === 'RECEIVED_DIGITALLY' || 
                            request.statusCode === 'RECEIVED_NOT_FOR_LOAN' || 
                            request.statusCode === 'RECEIVED_PHYSICALLY' || 
                            request.statusCode === 'RENEWED' || 
                            request.statusCode === 'RENEW_NOT_ACCEPTED' || 
                            request.statusCode === 'RENEW_REQUESTED' || 
                            request.statusCode === 'REQUEST_COMPLETED' || 
                            request.statusCode === 'SHIPPED_DIGITALLY' || 
                            request.statusCode === 'SHIPPED_PHYSICALLY') {

                                request.isCancelable = false;

                        }
                        else {
                                request.isCancelable = true;
                        }
                    }
                }
           )   
        }
     )
    }])

            .component('prmRequestsAfter', {
                bindings: { parentCtrl: '<' },
                controller: 'slspRequestCancelButtonController',
               
            });


