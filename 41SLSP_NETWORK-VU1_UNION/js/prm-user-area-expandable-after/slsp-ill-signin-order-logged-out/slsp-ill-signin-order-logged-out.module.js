

    //--------ILL Signin Order -  if logged out ---------------------------------------
   

    import {slspIllSigninOrderLoggedOutController} from './slsp-ill-signin-order-logged-out.controller';
    import {slspIllSigninOrderLoggedOutService} from './slsp-ill-signin-order-logged-out.service';

    export const slspIllSigninOrderLoggedOutModule = angular
        .module('slspIllSigninOrderLoggedOutModule', [])
            .factory('slspIllSigninOrderLoggedOutService', slspIllSigninOrderLoggedOutService)
            .controller('slspIllSigninOrderLoggedOutController', slspIllSigninOrderLoggedOutController)
            .component('slspIllSigninOrderLoggedOutComponent',  {
                bindings: {afterCtrl: '<'},
                controller: 'slspIllSigninOrderLoggedOutController',
                
            })
    