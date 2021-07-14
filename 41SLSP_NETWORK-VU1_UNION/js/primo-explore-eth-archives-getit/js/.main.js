import 'primo-explore-eth-archives-getit';
var app = angular.module('viewCustom', ['ethArchivesGetitModule']);

app.component('prmAlmaViewitAfter',  {
        bindings: {parentCtrl: '<'},
        controller: 'ethArchivesGetitController',
        template: `<eth-archives-getit-component after-ctrl="$ctrl"></eth-archives-getit-component>`
    })
    .component('almaHtgiSvcAfter',  {
        bindings: {parentCtrl: '<'},
        controller: 'ethArchivesGetitController',
        template: `<eth-archives-getit-component after-ctrl="$ctrl"></eth-archives-getit-component>`
    })
