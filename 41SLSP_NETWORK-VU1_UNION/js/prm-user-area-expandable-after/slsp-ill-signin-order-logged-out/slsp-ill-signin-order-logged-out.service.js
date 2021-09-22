

    export const slspIllSigninOrderLoggedOutService = ['jwtHelper', function( jwtHelper ){

        function getDecodedToken(){
            try{
                if (!sessionStorage){
                    console.error("***SLSP*** no session storage")
                    return null;
                }
                let jwt = sessionStorage.getItem('primoExploreJwt');
                if (!jwt){
                    return null;
                }
                return jwtHelper.decodeToken(jwt);
            }
            catch(e){
                console.error("**SLSP*** an error occured: userService.getDecodedToken:");
                console.error(e.message);
            }
        }
  
        function isGuest(){
            try{
                let decodedToken = getDecodedToken();
                if (!decodedToken) {
                    return null;
                }
                let userName= decodedToken.userGroup !== 'GUEST'? decodedToken.userName : '';
                if (userName){
                    return false;
                }
                else{
                    return true;
                }
            }
            catch(e){
                console.error("***SLSP*** an error occured: userService.isGuest:");
                console.error(e.message);
            }
        }
    
        return {
            isGuest: isGuest,
            getDecodedToken: getDecodedToken
        };
    }]
    