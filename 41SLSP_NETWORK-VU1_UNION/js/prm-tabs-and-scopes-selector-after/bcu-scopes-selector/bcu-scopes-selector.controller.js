export class bcuScopesSelectorController {
    $onInit() {
        setTimeout(function(){
            function activateSearch(){
                setTimeout(function(){
                    document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click()
                }, 100)
            }
            let searchScopes = document.querySelectorAll('[id^="select_option_"]');
            for (let i in searchScopes){
                if( typeof searchScopes[i] === 'object' && searchScopes[i] !== null) {
                    searchScopes[i].onclick = function(){
                        activateSearch();
                    };
                }
            }
        }, 100)
    }
}
