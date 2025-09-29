
    import {slspRefineJournalRequestController} from './slsp-refine-journal-request.controller';
    import {slspRefineJournalRequestHtml} from './slsp-refine-journal-request.html';

    export const slspRefineJournalRequestModule = angular
        .module('slspRefineJournalRequestModule', [])
            .controller('slspRefineJournalRequestController', slspRefineJournalRequestController)
            .component('slspRefineJournalRequestComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspRefineJournalRequestController',
                template: slspRefineJournalRequestHtml
            })