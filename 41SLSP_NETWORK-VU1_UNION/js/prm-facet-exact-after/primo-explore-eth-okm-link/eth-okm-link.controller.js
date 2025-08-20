export class ethOkmLinkController {

    constructor($location, ethConfigService, ethOkmLinkConfig, $element) {
        this.$location = $location;
        this.ethConfigService = ethConfigService;
        this.config = ethOkmLinkConfig;
        this.$element = $element;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.groupName = this.ethConfigService.getLabel(this.config, 'groupName');
            //console.log(this);
            // is group already added?
            let filteredFacets = this.prmFacet.facets.filter(f => {
                return (f.name === this.groupName)
            })
            // push new Group to facetGroup array, if not already done
            if (filteredFacets.length === 0) {
                this.prmFacet.facets.push({
                    name: this.groupName,
                    displayedType: 'exact',
                    limitCount: 0,
                    facetGroupCollapsed: false,
                    values: []
                })
            }
            // Controller for new facetGroup
            if (this.parentCtrl.facetGroup.name === this.groupName) {
                let q1 = this.$location.search().query;
                let aQ = Array.isArray(q1) ? q1 : [q1];
                let searchValue = aQ.map(e => {
                    return e.split(",")[2] || '';
                }).join(' ');
                let vid = window.appConfig.vid.replace(':', '-');
                this.searchAlternatives = [
                    {
                        label: "Open Knowledge Maps (BASE)",
                        url: "https://openknowledgemaps.org/search?service=base&type=get&sorting=most-relevant&min_descsize=300&q=" + encodeURIComponent(searchValue),
                        image: "custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/logo-okmaps.png"
                    },
                    {
                        label: "Open Knowledge Maps (Pubmed)",
                        url: "https://openknowledgemaps.org/search?service=pubmed&type=get&sorting=most-relevant&min_descsize=300&q=" + encodeURIComponent(searchValue),
                        image: "custom/41SLSP_NETWORK-CENTRAL_PACKAGE/img/logo-okmaps.png"
                    }
                ]
                let currentElement = this.$element[0];
                let prmOkmElement = currentElement.closest('prm-facet-exact');
                angular.element(prmOkmElement).addClass('send-my-search-facet-group');
            }



        }
        catch (e) {
            console.error("***ETH*** an error occured: ethOkmLinkController.onInit()\n\n");
            console.error(e.message);
        }
    }
}

ethOkmLinkController.$inject = ['$location', 'ethConfigService', 'ethOkmLinkConfig', '$element'];
