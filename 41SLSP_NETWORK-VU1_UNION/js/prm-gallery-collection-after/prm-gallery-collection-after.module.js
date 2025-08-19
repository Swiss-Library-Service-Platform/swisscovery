import { slspCollectionIdModule } from './slsp-collection-id/slsp-collection-id.module';

export const prmGalleryCollectionAfterModule = angular
    .module('prmGalleryCollectionAfterModule', [])
    .component('prmGalleryCollectionAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-collection-id-component after-ctrl="$ctrl"></slsp-collection-id-component>
            <slsp-gallery-collection-after parent-ctrl="$parent.$ctrl"></slsp-gallery-collection-after>`
    });


prmGalleryCollectionAfterModule.requires.push(slspCollectionIdModule.name);