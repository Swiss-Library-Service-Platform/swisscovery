import { slspIconLabelViewitItemsModule } from './slsp-icon-label-viewit-items/slsp-icon-label-viewit-items.module';
import { slspCollapseRelatedEResourcesModule } from './slsp-collapse-related-e-resources/slsp-collapse-related-e-resources.module';
import { slspTranslatePublicNoteModule } from './slsp-translate-public-note/slsp-translate-public-note.module';

export const prmAlmaViewitItemsAfterModule = angular
    .module('prmAlmaViewitItemsAfterModule', [])
    .component('prmAlmaViewitItemsAfter', {
        bindings: { parentCtrl: '<' },
        template: `<slsp-icon-label-viewit-items-component after-ctrl="$ctrl"></slsp-icon-label-viewit-items-component>
                    <slsp-collapse-related-e-resources-component after-ctrl="$ctrl"></slsp-collapse-related-e-resources-component>
                    <slsp-translate-public-note-component after-ctrl="$ctrl"></slsp-translate-public-note-component>
                    <slsp-alma-viewit-items-after parent-ctrl="$parent.$ctrl"></slsp-alma-viewit-items-after>`
    });


prmAlmaViewitItemsAfterModule.requires.push(slspIconLabelViewitItemsModule.name);
prmAlmaViewitItemsAfterModule.requires.push(slspCollapseRelatedEResourcesModule.name);
prmAlmaViewitItemsAfterModule.requires.push(slspTranslatePublicNoteModule.name);