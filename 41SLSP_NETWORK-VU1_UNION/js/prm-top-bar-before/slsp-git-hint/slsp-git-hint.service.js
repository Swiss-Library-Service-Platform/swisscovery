/**
* @ngdoc service
* @name ethGitHintService
*
* @description
* Service to get test for an error message from a git file
*
* <b>Used by</b><br>
* Module {@link ETH.slspGitHintModule}<br>
*
*
- */
export const slspGitHintService = ['$http', '$sce', function ($http, $sce) {

    function getMessage() {
        const timestamp = new Date().getTime(); // Aktuelle Zeit als Timestamp
        const url = `https://swiss-library-service-platform.github.io/snippets/slsp-banner-text.json?timestamp=${timestamp}`;


        $sce.trustAsResourceUrl(url);

        return $http.get(url, { headers: { "X-From-ExL-API-Gateway": undefined } })
            .then(
                function (response) {
                    // Rückgabe der Daten aus der JSON-Datei
                    return response.data;
                },
                function (httpError) {
                    console.error("***slsp*** An error occurred: slspGitHintService.getData error callback: " + httpError);
                    return null;
                }
            );
    }

    return {
        getMessage: getMessage
    };
}];
