export class slspGitHintController {

    constructor($scope, $compile, slspGitHintService) {
        this.$scope = $scope;
        this.$compile = $compile;
        this.slspGitHintService = slspGitHintService;
    }

    $onInit() {
        const currentTime = new Date(); // Aktuelle Zeit
        console.log("Current time:", currentTime);

        this.slspGitHintService.getMessage()
            .then((data) => {
                // Überprüfung, ob Daten vorhanden sind
                if (!data) {
                    return;
                }

                // Daten und Sprache aus der JSON-Datei
                this.data = data;
                this.lang = angular.element(document.querySelector('primo-explore')).injector().get('$rootScope').$$childHead.$ctrl.userSessionManagerService.getUserLanguage() ||
                    window.appConfig['primo-view']['attributes-map'].interfaceLanguage;

                // Start- und Endzeiten aus der JSON-Datei
                console.log("Raw startTime:", data.startTime);
                console.log("Raw endTime:", data.endTime);

                const startTime = new Date(data.startTime);
                const endTime = new Date(data.endTime);

                console.log("Converted startTime:", startTime);
                console.log("Converted endTime:", endTime);


                // Vergleich der aktuellen Zeit mit den Zeitfenstern
                if (currentTime >= startTime && currentTime <= endTime) {
                    // Anzeige des Textes in der entsprechenden Sprache
                    const topBarBefore = document.querySelector('prm-explore-main, prm-back-to-search-results-button md-toolbar, prm-account');
                    const html = `
                        <div class="slsp-git-topbar" layout="row">
                            <svg fill="#a8322d" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            </svg>
                            <span ng-bind-html="$ctrl.data[$ctrl.lang]"></span>
                        </div>
                    `;
                    angular.element(topBarBefore).prepend(this.$compile(html)(this.$scope));
                }
            });
    }
}
slspGitHintController.$inject = ['$scope', '$compile', 'slspGitHintService'];
