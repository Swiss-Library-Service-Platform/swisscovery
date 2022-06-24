export class bcuScopesSelectorController {
    $onInit() {
        this.check = true;
//        let searchScopes = document.querySelectorAll('[id^="select_option_"]');
//        console.log (searchScopes);
        /*
        setTimeout(function(){
            function activateSearch(){
                setTimeout(function(){
                    document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click()
                }, 500)
            }
                         
            let searchScopes = document.querySelectorAll('[id^="select_option_"]');
            for (let i in searchScopes){
                if( typeof searchScopes[i] === 'object' && searchScopes[i] !== null) {
                    searchScopes[i].onclick = function(){
                        activateSearch();
                    };
                }
            }
        }, 500)*/
    }
    $doCheck() {
        if(this.check) {
            let searchScopes = document.querySelectorAll('[id^="select_option_"]');
            if (searchScopes.length) {
                console.log('added');
                this.check = false;
                for (let i = 0; i < searchScopes.length; i++) {
                    searchScopes[i].onclick = function() {
                        setTimeout(function(){
                            document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click();
                        }, 0)
                    }
                }
            }
        }
    }
}
