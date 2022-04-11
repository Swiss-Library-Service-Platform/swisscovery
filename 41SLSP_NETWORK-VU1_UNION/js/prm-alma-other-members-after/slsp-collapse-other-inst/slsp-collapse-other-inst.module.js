
    import {slspCollapseOtherInstController} from './slsp-collapse-other-inst.controller';
    import {slspCollapseOtherInstHtml} from './slsp-collapse-other-inst.html';

    export const slspCollapseOtherInstModule = angular
        .module('slspCollapseOtherInstModule', [])
            .controller('slspCollapseOtherInstController', slspCollapseOtherInstController)
            .component('slspCollapseOtherInstComponent', {
                bindings: {afterCtrl: '<'},
                controller: 'slspCollapseOtherInstController',
                template: slspCollapseOtherInstHtml
            })