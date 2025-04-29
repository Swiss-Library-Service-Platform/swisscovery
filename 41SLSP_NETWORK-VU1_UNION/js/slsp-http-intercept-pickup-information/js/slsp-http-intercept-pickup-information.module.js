export const slspHttpInterceptPickupInformation = angular.module('slspHttpInterceptPickupInformation', ['ng'])
    .config(['$httpProvider', ($httpProvider) => {
        $httpProvider.interceptors.push(['$q', ($q) => {
            return {
                'request': (request) => {
                    return request
                },
                'requestError': (request) => {
                    return $q.reject(request)
                },
                'responseError': (response) => {
                    return $q.reject(response)
                },
                'response': (response) => {
                    try {                        
                        if (/primaws\/rest\/pub\/ngrs\/ngrsPickupInformationUrl/.test(response.config.url)) {                            
                            //get userGroup from JWT 
                            let userGroup = angular.element(document.querySelector('primo-explore')).controller('primo-explore').userSessionManagerService.jwtUtilService.getDecodedToken().userGroup;

                            //list of user groups to change delivery for
                            if (['91','92','02'].includes(userGroup)) {
                                response.data.personalDelivery = 'None';
                            }
                        }
                     
                    } catch (error) {
                        console.log(error)
                    }
                    return response
                }
            }
        }])
    }])
