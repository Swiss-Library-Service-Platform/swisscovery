    import { slspHoldingCollapseController } from './slsp-holding-collapse.controller';
    import { slspHoldingCollapseHtml } from './slsp-holding-collapse.html';


    export const slspHoldingCollapseModule = angular
        .module('slspHoldingCollapseModule', [])
        .controller('slspHoldingCollapseController', slspHoldingCollapseController)
        .component('slspHoldingCollapseComponent', {
            bindings: { afterCtrl: '<' },
            controller: 'slspHoldingCollapseController',
            template: slspHoldingCollapseHtml
        })