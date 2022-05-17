   

    import {slspRapidoDigitalOfferController} from './slsp-rapido-digital-offer.controller';
   

    export const slspRapidoDigitalOfferModule = angular
        .module('slspRapidoDigitalOfferModule', [])
            .controller('slspRapidoDigitalOfferController', slspRapidoDigitalOfferController)
            .component('slspRapidoDigitalOfferComponent',  {
                bindings: {afterCtrl: '<'},
                controller: 'slspRapidoDigitalOfferController',
                
            })
    