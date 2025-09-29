import { slspGitHintModule } from './slsp-git-hint/slsp-git-hint.module';
import { slspKeyboardFocusModule } from "./slsp-keyboard-focus/slsp-keyboard-focus.module";

export const prmTopBarBeforeModule = angular
    .module('prmTopBarBeforeModule', [])
    .component('prmTopBarBefore', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-git-hint-component after-ctrl="$ctrl"></slsp-git-hint-component>
            <slsp-keyboard-focus-component after-ctrl="$ctrl"></slsp-keyboard-focus-component>
            <slsp-top-bar-before parent-ctrl="$parent.$ctrl"></slsp-top-bar-before>`
    });


prmTopBarBeforeModule.requires.push(slspGitHintModule.name);
prmTopBarBeforeModule.requires.push(slspKeyboardFocusModule.name);