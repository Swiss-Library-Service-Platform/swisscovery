import { slspTranslatePublicNoteController } from './slsp-translate-public-note.controller';

export const slspTranslatePublicNoteModule = angular
    .module('slspTranslatePublicNoteModule', [])
    .controller('slspTranslatePublicNoteController', slspTranslatePublicNoteController)
    .component('slspTranslatePublicNoteComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspTranslatePublicNoteController',

    })