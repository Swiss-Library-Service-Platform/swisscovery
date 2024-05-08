/**
* @ngdoc module
* @name slspGitHintModule
*
* @description
*
* Customization for the Top Bar:<br>
* - get text for an error message from a git file
* - render the message at the top of the page
*
* file: https://github.com/eth-library/snippets/tree/main/primo
*       Page: https://eth-library.github.io/snippets/primo/banner.json
*
* <b>CSS/Image Dependencies</b><br>
* CSS slsp-git-hint.css
*
*/
import {slspGitHintService} from './slsp-git-hint.service';
import {slspGitHintController} from './slsp-git-hint.controller';

export const slspGitHintModule = angular
    .module('slspGitHintModule', [])
        .factory('slspGitHintService', slspGitHintService)
        .controller('slspGitHintController', slspGitHintController)
        .component('slspGitHintComponent',{
            controller: 'slspGitHintController'
        })
