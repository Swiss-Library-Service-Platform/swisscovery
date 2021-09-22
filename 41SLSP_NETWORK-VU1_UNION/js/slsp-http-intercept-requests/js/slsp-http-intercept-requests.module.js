angular.module('slspHttpInterceptRequests', ['ng'])
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
                        if (/primaws\/rest\/priv\/myaccount\/requests/.test(response.config.url)) {
                            let interfaceLanguage = angular.element(document.querySelector('primo-explore')).injector().get('$rootScope').$$childHead.$ctrl.userSessionManagerService.getUserLanguage() ||
                                window.appConfig['primo-view']['attributes-map'].interfaceLanguage

                            let list_of_hold_states = {
                                'en': ["in transit", "in process", "on hold shelf"],
                                'de': ["transfer", "in bearbeitung", "bereitgestellt"],
                                'fr': ["en cours de transfert", "en cours", "sur le rayon des réservations"],
                                'it': ["in transito", "in processo", "scaffale prenotazioni"]
                            }

                            if (Object.keys(list_of_hold_states).includes(interfaceLanguage)) {
                                let list_of_hold_states_regexp = RegExp(list_of_hold_states[interfaceLanguage].map(m => m.toLowerCase()).join('|'))
                                if (response.status == 200 && response.data.status == "ok") {

                                    //rewrite all cancellable holds.
                                    response.data.data.holds.hold.map((m) => {
                                        if (list_of_hold_states_regexp.test(m.holdstatus.toLowerCase())) {
                                            m.cancel = 'N'
                                        }
                                    })

                                }
                            } else {
                                throw `No mapping found for ${interfaceLanguage}`
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