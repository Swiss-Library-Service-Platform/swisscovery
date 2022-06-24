angular
    .module('slspArchivesHtgi', [])

    // "how to get it" section for resources of archives MFA, TMA (CMI STAR)

    .controller('ArchivesHtgiController', [function () {

        this.$onInit = function () {
            try{
                if(!this.parentCtrl.item.pnx.display.source || this.parentCtrl.item.pnx.display.source.length === 0){
                    return;
                }
                this.source = this.parentCtrl.item.pnx.display.source[0];
                // CMI STAR sources
                if(this.source === 'ETH_MaxFrischArchiv' || this.source === 'ETH_ThomasMannArchiv'){
                    // hide content of htgi section
                    let section = document.getElementById('full-view-container');
                    section.classList.add('slsp-archives-hide');

                    // get guid of CMIStar
                    let sourceid = this.parentCtrl.item.pnx.control.originalsourceid[0];
                    let guid = sourceid.substring(sourceid.lastIndexOf(':') + 1);

                    // different sources: concat url
                    if(this.source === 'ETH_ThomasMannArchiv'){
                        this.url = 'http://www.online.tma.ethz.ch/home/#/content/' + guid;
                        // only for test
                        //this.label = 'Detailed information in Thomas Mann-Archiv Online (metadata only)';
                    }
                    else if (this.source === 'ETH_MaxFrischArchiv') {
                        this.url = 'http://maxfrischarchiv-online.ethz.ch/home/#/content/' + guid;
                        // only for test
                        //this.label = 'Request via Max Frisch-Archiv Online';
                    }
                }
            }
            catch(e){
                console.error("***SLSP*** an error occured: ArchivesHtgiController\n\n");
                console.error(e.message);
            }
        }
    }])

    .component('almaHtgiSvcAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'ArchivesHtgiController',
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
            <div ng-if="$ctrl.source === 'ETH_ThomasMannArchiv'" class="slsp-archives-additional-hint">
                <div>
                    <span translate="customized.archives.ETH_ThomasMannArchiv.text1">No request possible. The digitized item can be consulted in the Thomas Mann Archives reading room upon advance registration (</span>
                    <a target="_blank" rel="noopener" ng-href="https://tma.ethz.ch/utils/kontakt.html">
                        <span translate="customized.archives.ETH_ThomasMannArchiv.linktext2">Contact</span>
                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
                    </a>
                    <span translate="customized.archives.ETH_ThomasMannArchiv.text2">).</span>
                </div>
            </div>
            <div ng-if="$ctrl.source === 'ETH_MaxFrischArchiv'" class="slsp-archives-additional-hint">
                <div>
                    <span translate="customized.archives.ETH_MaxFrischArchiv.text1">Informationen zu Bestellung und Benutzung siehe</span>
                    <a target="_blank" rel="noopener" ng-href="http://maxfrischarchiv-online.ethz.ch/home/#/manual">
                        <span translate="customized.archives.ETH_MaxFrischArchiv.linktext2">Bedienungshinweise</span>
                        <prm-icon external-link icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>
                    </a>
                    <span translate="customized.archives.ETH_MaxFrischArchiv.text2">.</span>
                </div>
            </div>
        </div><slsp-htgi-svc-after parent-ctrl="$parent.$ctrl"></slsp-htgi-svc-after>
        `
    });
