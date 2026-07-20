
    import {slspScoreRequestController} from './slsp-score-request.controller';
    import {slspScoreRequestHtml} from './slsp-score-request.html';

    export const slspScoreRequestModule = angular
        .module('slspScoreRequestModule', [])
            .controller('slspScoreRequestController', slspScoreRequestController)
            .component('slspScoreRequestComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspScoreRequestController',
                template: slspScoreRequestHtml
            })