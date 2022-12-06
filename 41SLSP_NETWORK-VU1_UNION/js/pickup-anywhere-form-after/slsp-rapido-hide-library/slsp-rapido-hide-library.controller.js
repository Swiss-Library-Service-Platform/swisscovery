//-----------------RapidoHideLibrary------------------------------

export class slspRapidoHideLibraryController {

    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {
        try {
            this.parentCtrl = this.afterCtrl.parentCtrl;
            this.$scope.$watch('this.$ctrl.afterCtrl.parentCtrl.pickupLibraryField.options', (pickupLibraryArray) => {
                if (angular.isArray(pickupLibraryArray))
                    angular.forEach(pickupLibraryArray, (library) => {

                        if (
                            //UBS-----------------------------
                            //UBH Fernleihe
                            library.value === '12900830000231' ||
                            //Aaarau
                            library.value === '112074320005504' ||
                            //Swiss TPH
                            library.value === '112070130005504' ||
                            //BZG Gesundheit
                            library.value === '112073630005504' ||
                            //Mission 21
                            library.value === '112058770005504' ||
                            //Ges. f. Volkskunde
                            library.value === '112056850005504' ||
                            //Autographensammlung Geigy-Hagenbach
                            library.value === '11304577870005504' ||
                            //Anglistik
                            library.value === '112062250005504' ||
                            //Maiengasse
                            library.value === '112067110005504' ||
                            //Gender studies
                            library.value === '112074910005504' ||
                            //Geographie
                            library.value === '112068850005504' ||
                            //Kulturwissenschaft
                            library.value === '112062530005504' ||
                            //Mathematik
                            library.value === '112057620005504' ||
                            //Slavistik
                            library.value === '112071430005504' ||
                            //Soziologie
                            library.value === '112061840005504' ||
                            //Studienberatung
                            library.value === '112074090005504' ||
                            //Frauenfeld
                            library.value === '112068670005504' ||
                            //Schaulager
                            library.value === '112075370005504' ||
                            //St Gallen Stift
                            library.value === '112061200005504' ||
                            //St Gallen Vadiana
                            library.value === '112063910005504' ||
                            //Trogen
                            library.value === '112066290005504' ||
                            //Zofingen
                            library.value === '112067340005504' ||
                            //UBE-------------------------------
                            //PH Mediothek
                            library.value === '112061070005511' ||
                            //BEWI
                            library.value === '112056880005511' ||
                            //Geographie
                            library.value === '112061350005511' ||
                            //JFB
                            library.value === '112062500005511' ||
                            //Medizingeschichte
                            library.value === '112062730005511' ||
                            //Muesmatt
                            library.value === '112061810005511' ||
                            //Pflanzenwissenschaft
                            library.value === '112060560005511' ||
                            //Public Health
                            library.value === '112063750005511' ||
                            //Speichermagazin
                            library.value === '112063420005511' ||
                            //Sportwissenschaft
                            library.value === '112057320005511' ||
                            //Vetsuisse
                            library.value === '112062040005511' ||
                            //Weiterbildung ZUW
                            library.value === '112057550005511' ||
                            //Wirschaftswissenschaften
                            library.value === '112060330005511' ||
                            //Zahnmedizin
                            library.value === '112062270005511' ||
                            //Bibliothek für Gestaltung Bern
                            library.value === '112047360005527' ||
                            //Bildungszentrum Pflege Online
                            library.value === '112048510005527' ||
                            //Campus Muristalden Bern
                            library.value === '112046900005527' ||
                            //Gosteli-Stiftung
                            library.value === '112048690005527' ||
                            //Naturhistorisches Museum Bern Bibliothek
                            library.value === '112047820005527' ||
                            //Staatsarchiv des Kantons Bern
                            library.value === '112048280005527' ||
                            //Alexandria------------------------
                            //Musikautomaten
                            library.value === '13298420001791' ||
                            //Vela
                            library.value === '13294580001791' ||
                            //RUAG
                            library.value === '13293660001791' ||
                            //SECO
                            library.value === '13293890001791' ||
                            //BAR
                            library.value === '13295770001791' ||
                            //IGE
                            library.value === '13297690001791' ||
                            //CMM
                            library.value === '13297000001791' ||
                            //BWO
                            library.value === '13296770001791' ||
                            //swisstopo
                            library.value === '13297960001791' ||
                            //SWR
                            library.value === '13294350001791' ||
                            //DEZA
                            library.value === '2237435119010001791' ||
                            //Oskar
                            library.value === '13294120001791' ||
                            //ZHAW
                            library.value === '13298650001791' ||
                            //UNINE---------------------------
                            //Empty library
                            library.value === '112045850005517' ||
                            //PHZH----------------------------
                            //PHZH, Bibliothek
                            library.value === '112047180005521' ||
                            //PHZH, Pestalozzianum
                            library.value === '112046950005521' ||
                            //OSTGR---------------------------
                            //FHO CDI Library
                            library.value === '693177870005515' ||
                            //UNIGE---------------------------
                            //Observatoire
                            library.value === '112048390005502' ||
                            //RZH-----------------------------
                            //MUG
                            library.value === '112059990005526' ||
                            //RZS-----------------------------
                            //Hochdorf (PMZ-Kurier Dienstag)
                            library.value === '1007807780005505' ||
                            //Luzern ZHB Speicherbibliothek
                            library.value === '112054640005505' ||
                            //Mediothek XUND
                            library.value === '112051600005505' ||
                            //PH Schwyz, Standort Goldau
                            library.value === '112050940005505' ||
                            //PH Schwyz, Standort Pfaeffikon
                            library.value === '112051270005505' ||
                            //PH Zug
                            library.value === '112050610005505' ||
                            //PMZ Luzern
                            library.value === '112049720005505' ||
                            //Schuepfheim (PMZ-Kurier Dienstag)
                            library.value === '1007808000005505' ||
                            //Sursee (PMZ-Kurier Dienstag)
                            library.value === '1007808220005505' ||
                            //Willisau (PMZ-Kurier Dienstag)
                            library.value === '1007808440005505' ||
                            //UZH / UZB------------------------
                            //Speicherbibliothek, ZB-Bestand
                            library.value === '112070490005508' ||
                            //Speicherbibliothek, UZH-Bestand
                            library.value === '112055100005508' ||
                            //ZB, Musikabteilung
                            library.value === '112071870005508' ||
                            //UB Zuerich, Forschungsbibliothek Jakob Jud
                            library.value === '112050270005508' ||
                            //UB Zuerich, Graezistik, Latinistik und  Aegyptologie I
                            library.value === '112051190005508' ||
                            //UB Zuerich, Graezistik, Latinistik und  Aegyptologie
                            library.value === '112049810005508' ||
                            //UB Zuerich, Kinderspital
                            library.value === '112056250005508' ||
                            //UB Zuerich, Klassische Archaeologie
                            library.value === '112047790005508' ||
                            //UB Zuerich, Kommunikationswissenschaft
                            library.value === '112053490005508' ||
                            //UB Zuerich, Osteuropaeische Geschichte
                            library.value === '112069340005508' ||
                            //UB Zuerich, Phonetisches Labor
                            library.value === '112050730005508' ||
                            //UB Zuerich, Politikwissenschaft
                            library.value === '112048660005508' ||
                            //UB Zuerich, Praehistorische Archaeologie
                            library.value === '112052570005508' ||
                            //UB Zuerich, Rechtswissenschaften
                            library.value === '112071640005508' ||
                            //UB Zuerich, Wirtschafts- und Sozialgeschichte
                            library.value === '112050960005508' ||
                            //UB Zuerich,  UniversitaetsSpital
                            library.value === '112051420005508' ||
                            //UZH und ETH Zuerich, Selbstlernzentrum Sprachenzentrum
                            library.value === '112054870005508' ||
                            //UZH und ETH Zuerich, Sprachenzentrum
                            library.value === '112046410005508' ||
                            //ETH Math
                            library.value === '112048250005503' ||
                            //UZH, Anthropologisches Institut und Museum
                            library.value === '112049580005508' ||
                            //UZH, Bibliothek fuer Biomedizinische Ethik
                            library.value === '112056020005508' ||
                            //UZH, Palaeontologisches Institut und Museum
                            library.value === '112055790005508' ||
                            //UZH, Psychiatrische Universitaetsklinik
                            library.value === '112046870005508' ||
                            //ZB, Alte Drucke
                            library.value === '112069800005508' ||
                            //ZB, Graphische Sammlung
                            library.value === '112070030005508' ||
                            //ZB, Musikwissenschaftliches Institut der UZH
                            library.value === '112057630005508' ||
                            //ZB, Handschriften
                            library.value === '112070260005508' ||
                            //ZB, Karten
                            library.value === '112070950005508' ||
                            //ZB, VAR
                            library.value === '112070720005508' ||
                            //HPH 
                            //PHSG  Studienbereichsbibliotheken Mariaberg
                            library.value === '112062440005520' ||
                            //Empty Library
                            library.value === '112069930005520' ||
                            //PHSG Online Dokumente
                            library.value === '112063820005520' ||
                            //PHSG  Infomedis Web App
                            library.value === '734691490005520' ||
                            //SFUVET - Infomedis Web App
                            library.value === '1333405650005520' ||
                            //Zollikofen EHB Online
                            library.value === '112056780005520' ||
                            //Empty Library
                            library.value === '112046060005514' ||
                            //HES CDI Library
                            library.value === '332743630005514'


                        ) {
                            console.log('hidden Library', library);
                            library.value = 'undefined';
                        }
                    })
            })
        } catch (e) {
            console.error("***SLSP*** an error occured: Rapido hide Library\n\n");
            console.error(e.message);
        }
    }
}

slspRapidoHideLibraryController.$inject = ['$scope'];