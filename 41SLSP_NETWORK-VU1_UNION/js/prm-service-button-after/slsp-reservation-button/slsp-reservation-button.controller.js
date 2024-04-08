//--------slspReservationButtonController ---------------------------------------


export class slspReservationButtonController {

    constructor($scope, $compile, $timeout, $rootScope, $window, $element) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.$window = $window;
        this.$element = $element;
        this.itemReservationLabel = '<span translate="customized.rapido.reservation"></span>';
    }

    $onInit() {
        try {
            this.$timeout(() => {
                this.parentCtrl = this.afterCtrl.parentCtrl;
    
                let language = this.getLanguage();
                let serviceType = this.parentCtrl.service.type;
                let statusName = this.parentCtrl.requestParameters.itemstatusname;
    
                // Hier das DOM-Element der Angular-Komponente abrufen
                let currentElement = this.$element[0];
    
                // Das Elternelement ("md-list-item") der Angular-Komponente abrufen
                let prmOpacElement = currentElement.closest('md-list-item');
    
                // Überprüfen, ob prmOpacElement vorhanden ist
                if (prmOpacElement) {
                    // Den Button innerhalb des aktuellen "md-list-item" Teils auswählen
                    let itemReservationButton = prmOpacElement.querySelector('prm-service-button button span[translate="AlmaItemRequest"]');
    
                    // console.log('this.parentCtrl', this.parentCtrl);
                    // console.log('language', language);
                    // console.log('serviceType', serviceType);
                    // console.log('statusName', statusName);
    
                    // Check conditions and execute code if necessary
                    if (serviceType === 'AlmaItemRequest' &&
                        ((language === 'de' && statusName !== 'Exemplar ist vorhanden') ||
                            (language === 'fr' && statusName !== 'Exemplaire en rayon') ||
                            (language === 'it' && statusName !== 'Copia a scaffale') ||
                            (language === 'en' && statusName !== 'Item in place'))) {
    
                        let compiledHtml = this.$compile(this.itemReservationLabel)(this.$scope);
                        angular.element(itemReservationButton).replaceWith(compiledHtml);
    
                        // Execute your code here
                        console.log('Condition met. Executing code...');
                    }
                } else {
                    console.warn('md-list-item element not found.');
                }
    
            }, 0);
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido \n\n");
            console.error(e.message);
        }
    }
    

    getLanguage() {
        let sms = this.$rootScope.$$childHead.$ctrl.userSessionManagerService;

        if (!sms) {
            return 'en';
        } else {
            return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
        }
    }

}

slspReservationButtonController.$inject = ['$scope', '$compile', '$timeout', '$rootScope', '$window', '$element'];


//Exemplar ist vorhanden
//Exemplaire en rayon
//Copia a scaffale
//Item in place