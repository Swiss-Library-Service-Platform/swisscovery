import 'primo-explore-eth-okm-link';

var app = angular.module('viewCustom', ['ethOkmLinkModule']);

app.component('prmFacetExactAfter',  {
        bindings: {parentCtrl: '<'},
        template: `<eth-okm-link-component after-ctrl="$ctrl"></eth-okm-link-component>`
    })
