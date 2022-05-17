/**
* @ngdoc service
* @name ethMapongoLibrariesService
*
* @description
*
* Holds informations about the libraries which use mapongo
*
*
* <b>Used by</b><br>
*
* Module {@link ETH.ethMapongoModule}<br>
*
*
 */
export const ethMapongoLibrariesService = [function(){
    // todo: are the locations correct and complete?
    const libraries = [
            {
                    "shortname": "ZHdK-MIZ",
                    "name": "ZHdK-MIZ",
                    "libraryCode": "E65",
                    "baseUrl": "https://zhdk.mapongo.de",
                    "locationCodeWhiteList": ["E65G1","E65G2","E65E1","E65U1","E65U4"],
                    "locationWhiteList": ["Galeriegeschoss","Galeriegeschoss","Eingangsgeschoss","Untergeschoss","Untergeschoss Curating Degree Zero Archive"]
            },
            {
                    "shortname": "ZHAW-HSB-ZH",
                    "name": "ZHAW Hochschulbibliothek Zürich",
                    "libraryCode": "E97",
                    "baseUrl": "https://zhdk.mapongo.de",
                    "locationCodeWhiteList": ["E97E1"],
                    "locationWhiteList": ["Eingangsgeschoss"]
            },
            {
                    "shortname": "ZHAW-HSB-WIN",
                    "name": "ZHAW Hochschulbibliothek Winterthur",
                    "libraryCode": "E51",
                    "baseUrl": "https://zhaw.mapongo.de",
                    "locationCodeWhiteList": ["E51BA","E51B0","E51B9","E51B2","E51B8","E51BN","E51BL","E51BG","E51BT","E51BB","E51BW","E51BA","E51BK","E51BR"],
                    "locationWhiteList": ["Architektur und Bau - 1. ZG","Neuerwerbungen - EG","Handapparate - EG","Compactus, offen - EG","Zeitschriften - EG","Allgemeines und Nachschlagewerke - EG","Angewandte Linguistik - EG","Gesundheit und Medizin - EG","Technik und Naturwissenschaften - 1. ZG","Wissenschaft und Bildung - EG","Wirtschaft und Management - 1. ZG","Architektur und Bau - 1. ZG","Kunst und Unterhaltung - EG","Recht und Politik - 2. ZG"]
            },
            {
                    "shortname": "PHZH",
                    "name": "PH Zürich, Bibliothek",
                    "libraryCode": "UPHZH",
                    "baseUrl": "https://phzh.mapongo.de",
                    "locationCodeWhiteList": ["ULFHF","ULFHG","ULFHN","ULFHS"],
                    "locationWhiteList": ["Stockwerk F - frei zugänglich","Stockwerk G - frei zugänglich", "Stockwerk H Nord - frei zugänglich","Stockwerk H Süd - frei zugänglich"]
            },
            {
                    "shortname": "HGK-MED",
                    "name": "FHNW HGK-Mediathek Basel",
                    "libraryCode": "E75",
                    "baseUrl":"https://mediathek.hgk.fhnw.ch/nebis",
                    "locationCodeWhiteList": ["","HAP"],
		            "locationWhiteList":["", "Handapparat"]
            },
            {
                    "shortname": "HGK-MED",
                    "name": "FHNW Campus Muttenz Bibliothek",
                    "libraryCode": "E44",
                    "baseUrl":"https://fhnw-cmu.mapongo.de",
                    "locationCodeWhiteList": [""],
                    "locationWhiteList":[""]
            }
    ];

    // todo: are the statuses correct and complete?
    const availabilityStatus = ['Exemplar ist vorhanden', 'Item in place', 'Exemplaire en rayon', 'Copia in posizione'];

    function getMapongoLibrary(libraryCode){
      let filterLibraries = libraries.filter( l => {return l.libraryCode === libraryCode;} );
      if (filterLibraries.length > 0)
          return filterLibraries[0];
      else
          return null;
    }

    function isMapongoLibrary(libraryCode){
      let filterLibraries = libraries.filter( l => {return l.libraryCode === libraryCode} );
      if (filterLibraries.length > 0)return true;
      else return false;
    }

    function isMapongoSubLocation(libraryCode, subLocation){
      let filterLibraries = libraries.filter( l => {return l.libraryCode === libraryCode && l.locationWhiteList.indexOf(subLocation)>-1;} );
      if (filterLibraries.length > 0)return true;
      else return false;
    }

    function getSubLocationCode(libraryCode, subLocation){
        let filterLibraries = libraries.filter( l => {return l.libraryCode === libraryCode} );
        if (filterLibraries.length === 0)return null;
        let i = filterLibraries[0].locationWhiteList.indexOf(subLocation);
        return filterLibraries[0].locationCodeWhiteList[i];
    }

    function getBaseUrl(libraryCode){
        let lib = getMapongoLibrary(libraryCode);
        if (lib) {
            return lib.baseUrl;
        }
        else{
            return "";
        }

    }

    function isAvailable(itemstatusname){
        let filterStatus = availabilityStatus.filter( s => {return s === itemstatusname});
        if (filterStatus.length > 0)return true;
        return false;
    }

    return {
        isMapongoLibrary: isMapongoLibrary,
        isMapongoSubLocation: isMapongoSubLocation,
        getBaseUrl: getBaseUrl,
        getSubLocationCode: getSubLocationCode,
        isAvailable: isAvailable
    };


}];
