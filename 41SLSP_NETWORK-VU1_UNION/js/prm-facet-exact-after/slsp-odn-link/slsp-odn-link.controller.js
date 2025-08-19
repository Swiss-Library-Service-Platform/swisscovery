//-----------------open data navigator link------------------------------

export class slspOdnLinkController {
    constructor($scope) {
        this.$scope = $scope;
    }

    $doCheck() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            const facetGrp = this.parentCtrl.facetGroup.name;
            const searchValue = this.parentCtrl.searchService.searchFieldsService.mainSearch;

            if (
                facetGrp === "Send my search to" ||
                facetGrp === "Meine Suche schicken an" ||
                facetGrp === "Envoyer ma recherche à" ||
                facetGrp === "Invia la mia ricerca a"
            ) {
                const facetElement = angular.element(document.querySelectorAll(`.okm-wrap`));
                // Prüfen, ob der Link schon existiert
                if (!document.getElementById("odn-link-component")) {
                    const odnLink = `<div id="odn-link-component" class="md-chips md-chips-wrap"><div class="md-chip eth-okm-link"><div class="md-chip-content layout-row"><strong><a href="https://opendatanavigator.switch.ch/search?f.%40type=Dataset&q=${searchValue}" target="_blank" class="odnLink md-primoExplore-theme" style="min-width:100%"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 129" fill="none"><g clip-path="url(#clip0_95_350)"><circle cx="64.0001" cy="64.6653" r="61.9518" fill="white" stroke="#D9D9D9" stroke-width="4.09648"/><circle cx="64.0004" cy="64.6654" r="5.18592" fill="#D9D9D9"/><path d="M57.1287 46.3325L47.0392 35.679L105.426 22.863L88.2503 39.1297L57.1287 46.3325Z" fill="#F59900"/><path d="M79.3656 69.8125L89.4551 80.4661L105.425 22.8617L88.2492 39.1284L79.3656 69.8125Z" fill="#00247D"/><path d="M68.9389 79.3262L79.0283 89.9797L20.6411 102.796L37.8172 86.529L68.9389 79.3262Z" fill="#F59900"/><path d="M46.7019 55.8445L36.6124 45.1909L20.6421 102.795L37.8183 86.5286L46.7019 55.8445Z" fill="#00247D"/></g><defs><clipPath id="clip0_95_350"><rect width="128" height="128" fill="white" transform="translate(0 0.665283)"/></clipPath></defs></svg><span >Open Data Navigator (Datasets)</span></a></strong></div></div></div>`;
                    facetElement.append(odnLink);
                }
            }
        } catch (e) {
            console.error("***SLSP*** an error occurred: open data navigator link \n\n");
            console.error(e.message);
        }
    }


}

slspOdnLinkController.$inject = ['$scope'];


