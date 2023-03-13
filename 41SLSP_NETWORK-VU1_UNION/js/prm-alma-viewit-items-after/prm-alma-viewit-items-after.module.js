import { slspIconLabelViewitItemsModule } from './slsp-icon-label-viewit-items/slsp-icon-label-viewit-items.module';
import { slspCollapseRelatedEResourcesModule } from './slsp-collapse-related-e-resources/slsp-collapse-related-e-resources.module';

export const prmAlmaViewitItemsAfterModule = angular
    .module('prmAlmaViewitItemsAfterModule', [])
    .component('prmAlmaViewitItemsAfter', {
        bindings: { parentCtrl: '<' },
        template: `<slsp-icon-label-viewit-items-component after-ctrl="$ctrl"></slsp-icon-label-viewit-items-component>
                    <slsp-collapse-related-e-resources-component after-ctrl="$ctrl"></slsp-collapse-related-e-resources-component>
                    <slsp-alma-viewit-items-after parent-ctrl="$parent.$ctrl"></slsp-alma-viewit-items-after>`
    });


prmAlmaViewitItemsAfterModule.requires.push(slspIconLabelViewitItemsModule.name);
prmAlmaViewitItemsAfterModule.requires.push(slspCollapseRelatedEResourcesModule.name);