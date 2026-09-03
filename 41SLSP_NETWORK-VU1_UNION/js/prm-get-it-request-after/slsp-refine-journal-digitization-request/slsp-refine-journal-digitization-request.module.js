
    import {slspRefineJournalDigitizationRequestController} from './slsp-refine-journal-digitization-request.controller';
    

    export const slspRefineJournalDigitizationRequestModule = angular
        .module('slspRefineJournalDigitizationRequestModule', [])
            .controller('slspRefineJournalDigitizationRequestController', slspRefineJournalDigitizationRequestController)
            .component('slspRefineJournalDigitizationRequestComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspRefineJournalDigitizationRequestController',
            
            })