import { slspTopPaginationSwitchController } from './slsp-top-pagination-switch.controller';


export const slspTopPaginationSwitchModule = angular
    .module('slspTopPaginationSwitchModule', [])
    .controller('slspTopPaginationSwitchController', slspTopPaginationSwitchController)
    .component('slspTopPaginationSwitchComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspTopPaginationSwitchController'
        

    })