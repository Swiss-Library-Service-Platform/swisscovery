angular
.module('slspArchivesViewit', [])

    .component('prmSearchResultAvailabilityLineAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'ArchivesAvailabilityLineController',
        template:'<slsp-search-result-availability-line-after parent-ctrl="$parent.$ctrl"></slsp-search-result-availability-line-after>'
    })

    .component('prmAlmaViewitAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'ArchivesViewitController',
        template: `
        <div class="slsp-archives" ng-if="$ctrl.url">
            <md-list layout="column" class="separate-list-items md-primoExplore-theme layout-column" role="list">
                <md-list-item role="listitem" ng-href="{{$ctrl.url}}" target="_blank">
                    <span>{{('customized.archives.' + $ctrl.source + '.linktext' | translate)}}</span>
                    <span>{{$ctrl.label}}</span>
                    <div class="md-secondary">
                        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new" class="layout-margin"/>
                    </div>
                </md-list-item>
            </md-list>
            <div ng-if="$ctrl.source === 'ETH_Hochschularchiv'" class="slsp-archives-additional-hint">
                <div>
                    <span translate="customized.archives.ETH_Hochschularchiv.text1">Informationen zu Bestellung und Benutzung siehe</span>
                    <a target="_blank" rel="noopener" ng-href="http://archivdatenbank-online.ethz.ch/hsa/#/manual">
                        <span translate="customized.archives.ETH_Hochschularchiv.linktext2">Bedienungshinweise</span>
                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
                    </a>
                    <span translate="customized.archives.ETH_Hochschularchiv.text2">.</span>
                </div>
            </div>
        </div><slsp-alma-viewit-after parent-ctrl="$parent.$ctrl"></slsp-alma-viewit-after>
        `
        })

    // viewit section for archives when there are only partial digitized items, e.g. "ETH Hochschularchiv" (CMI STAR)
    .controller('ArchivesViewitController', ['$translate', function ($translate) {
        this.$onInit = function () {
            try{
                if(!this.parentCtrl.item.pnx.display.source || this.parentCtrl.item.pnx.display.source.length === 0){
                    return;
                }
                this.source = this.parentCtrl.item.pnx.display.source[0];
                // CMI STAR sources
                if(this.source === 'ETH_Hochschularchiv'){
                    if(this.parentCtrl.item.delivery.GetIt1 && this.parentCtrl.item.delivery.GetIt1.length > 0 && this.parentCtrl.item.delivery.GetIt1[0].links && this.parentCtrl.item.delivery.GetIt1[0].links.length > 0){

                        // there is an online resource: return and do nothing
                        let aOnlineLink = this.parentCtrl.item.delivery.GetIt1[0].links.filter( l => {
                            if(l.isLinktoOnline && l.link !== ''){
                                return true;
                            }
                            return false;
                        });
                        if (aOnlineLink.length > 0) {
                            return;
                        }

                        // there is no online resource
                        // change section heading
                        $translate('nui.getit.service_howtogetit').then((translation) => {
                            let fullView = document.getElementById('fullView');
                            angular.element(fullView.querySelector("h4[translate='nui.getit.service_viewit']")).text(translation);
                            angular.element(fullView.querySelector("#services-index span[translate='nui.getit.service_viewit']")).text(translation);
                        });

                    }
                    // hide content of viewit section
                    let section = document.getElementById('full-view-container');
                    section.classList.add('slsp-archives-hide');

                    // get guid of CMIStar
                    let sourceid = this.parentCtrl.item.pnx.control.originalsourceid[0];
                    let guid = sourceid.substring(sourceid.lastIndexOf(':') + 1);

                    // different sources: concat url
                    if(this.source === 'ETH_Hochschularchiv'){
                        this.url = 'http://archivdatenbank-online.ethz.ch/hsa/#/content/' + guid;
                        // only for test
                        //this.label = 'Bestellen über Hochschularchiv Online';
                    }
                }
            }
            catch(e){
                console.error("***SLSP*** an error occured: ArchivesViewitController\n\n");
                console.error(e.message);
            }
        }
    }])

    // change availability line, if there is no digitization
    .controller('ArchivesAvailabilityLineController', ['$translate', function ($translate) {
        this.$onInit = function () {
            try{
                this.changeButton = false;
                if(!this.parentCtrl.result.pnx.display.source || this.parentCtrl.result.pnx.display.source.length === 0){
                    return;
                }
                this.source = this.parentCtrl.result.pnx.display.source[0];
                if(!(this.source === 'ETH_Hochschularchiv'))return;
                if(!this.parentCtrl.result.delivery.GetIt1 || this.parentCtrl.result.delivery.GetIt1.length == 0 || !this.parentCtrl.result.delivery.GetIt1[0].links || this.parentCtrl.result.delivery.GetIt1[0].links.length == 0)return;

                let aOnlineLink = this.parentCtrl.result.delivery.GetIt1[0].links.filter( l => {
                    if(l.isLinktoOnline && l.link !== ''){
                        return true;
                    }
                    return false;
                });
                if (aOnlineLink.length === 0) {
                    // there is no online resource
                    $translate('delivery.code.no_inventory').then((translation) => {
                        this.changeButton = true;
                        this.changeButtonText = translation;
                    });
                    let availabilityLine = this.parentCtrl.$element[0];
                    if(availabilityLine) {
                        availabilityLine.classList.add('slsp-hsa-no-online');
                    }
                }
            }
            catch(e){
                console.error("***SLSP*** an error occured: ArchivesAvailabilityLineController\n\n");
                console.error(e.message);
            }
        }

        this.$doCheck = function () {
            try{
                if (this.changeButton){
                    let availabilityLine = this.parentCtrl.$element[0];
                    let button = availabilityLine.querySelector('.availability-status');
                    if(angular.element(button) && angular.element(button).length > 0){
                        angular.element(button).html(this.changeButtonText);
                        this.changeButton = false;
                        this.changeButtonText = '';
                    }
                }
            }
            catch(e){
                console.error("***ETH*** an error occured: ArchivesAvailabilityLineController $doCheck\n\n");
                console.error(e.message);
            }
        }
    }])
