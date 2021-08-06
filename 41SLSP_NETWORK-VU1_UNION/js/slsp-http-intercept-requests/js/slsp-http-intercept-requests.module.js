angular.module('slspHttpInterceptRequests', [])
    .config(['$httpProvider', ($httpProvider) => {
        $httpProvider.interceptors.push(($q) => {
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
                            //We can also get the language from userSessionManagerService but it is costly
                            let interfaceLanguage = window.appConfig['primo-view']['attributes-map'].interfaceLanguage
                            
                            let list_of_hold_states = {
                                'en': ["in transit", "process started", "on hold shelf"],
                                'de': ["in transit", "process started", "on hold shelf"],
                                'fr': ["in transit", "process started", "on hold shelf"],
                                'it': ["in transit", "process started", "on hold shelf"]
                            }

                            if (Object.keys(list_of_hold_states).includes(interfaceLanguage)) {

                                let list_of_hold_states_regexp = RegExp(list_of_hold_states[interfaceLanguage].map(m => m.toLowerCase()).join('|'))
                                if (response.status == 200 && response.data.status == "ok") {
                                    //rewrite all cancellable holds.
                                    console.log(response.data.data.holds.hold);
                                    response.data.data.holds.hold.map((m) => {
                                        if (list_of_hold_states_regexp.test(m.holdstatus.toLowerCase())) {
                                            m.cancel = 'N'
                                        }
                                    })
                                }
                            } else {
                                raise `No mapping found for ${interfaceLanguage}`
                            }
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    return response
                }
            }
        })
    }])