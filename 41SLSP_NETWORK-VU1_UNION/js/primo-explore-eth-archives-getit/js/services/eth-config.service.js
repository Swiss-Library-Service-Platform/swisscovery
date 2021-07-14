/**
* @ngdoc service
* @key ethConfigService
*
* @description
*
* Service to get and handle informations from a module config:
* - getLabel()
* - getUrl()
* - getLanguage()
*
 */
export const ethConfigService = ['$rootScope', function( $rootScope ){

    function getLanguage(){
        try{
            let sms = $rootScope.$$childHead.$ctrl.userSessionManagerService;
            if (!sms) {
                console.error("***ETH*** ethConfigService: userSessionManagerService not available");
                return 'en';
            }
            else{
                return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLanguage():");
            console.error(e.message);
            return 'en';
        }
    }


    function getLabel(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.label[key]) {
                console.error("***ETH*** ethConfigService.getLabel: '" + key + "' not in config");
                return key;
            }
            if(config.label[key][lang]){
                return config.label[key][lang];
            }
            else{
                return config.label[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getLabel():");
            console.error(e.message);
            return '';
        }
    }

    function getUrl(config, key) {
        try{
            let lang = this.getLanguage();
            if (!config.url[key]) {
                console.error("***ETH*** ethConfigService.getUrl: '" + key + "' not in config");
                return '';
            }
            if(config.url[key][lang]){
                return config.url[key][lang];
            }
            else{
                return config.url[key]['en'];
            }
        }
        catch(e){
            console.error("***ETH*** an error occured: ethConfigService.getUrl():");
            console.error(e.message);
            return '';
        }
    }

    return {
        getLanguage: getLanguage,
        getLabel: getLabel,
        getUrl: getUrl
    };
}]
