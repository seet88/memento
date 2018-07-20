
/**
 * Uzueplnia pole JSON_ZbiorPozParametry na ZbiorProd, atrybutami i parametrami pozycji zbioru. 
 */

function uzupelnijParametryZbiorPozJson(){
    var zbiorPozycje = libByName("Zbior pozycje PROD").entries();
    var zbiorPozycji = new Object();
    var e = entry();
    zbiorPozycji.zbiorPozycjeLista = [];
    for( i in zbiorPozycje){	
        if( sprawdzCzyLinkiSaTakieSame(zbiorPozycje[i], e) ){		
            var atrybuty = new Object();
            atrybuty.parametry=[];
            atrybuty.ladunek= Number(src(zbiorPozycje[i].field("Suma ladunku")));
            var kolumnaParametry = zbiorPozycje[i].field("Parametry");
            atrybuty.parametry = pobierzListeParametrow(kolumnaParametry,atrybuty.parametry);
            zbiorPozycji.zbiorPozycjeLista.push(atrybuty);
        }	
    }
    var json_string = JSON.stringify(zbiorPozycji);
    //message(json_string);
    e.set("JSON_ZbiorPozParametry",json_string);
}
/**
 * Sprawdzenie czy podany wpis z pozycji zbioru ma podlinkoway obecny zbior prod.
 * @param {Object} -link do zbiorPozycje
 * @param {Object} - obecny wpis
 * @returns {boolean}
 */

function sprawdzCzyLinkiSaTakieSame(zbiorPozycjeKarta, zbior){
	var zbiorProdNazwaLinku=zbior.field("Numer zabiegu")+" "+zbior.field("Nazwa zabiegu");
	if(!isEmpty(zbiorPozycjeKarta.field("Zbior PROD")[0])){
		var zbiorPozycjeProdNazwaLinku =  zbiorPozycjeKarta.field("Zbior PROD")[0].field("Numer zabiegu")+" "+ zbiorPozycjeKarta.field("Zbior PROD")[0].field("Nazwa zabiegu")
		if( zbiorPozycjeProdNazwaLinku == zbiorProdNazwaLinku ){
			return true;
		} else return false;
	}
	else return false;
	
}
/**
 * Pobiera atrybuty dołączone do linku do biblioteki parametry. 
 * @param kolumnaParametry {Object} -jeden link do biblioteki
 * @param listaParametrow {array}
 * @returns listaParametrow {array}
 */

function pobierzListeParametrow(kolumnaParametry, listaParametrow){
	for(l in kolumnaParametry){
		var parametr =new Object();
		parametr.nazwaParametru=kolumnaParametry[l].field("nazwa");
		parametr.wartosc=kolumnaParametry[l].attr("wartosc");
		parametr.uwagi=kolumnaParametry[l].attr("uwagi");
		parametr.dataModyfikacji=kolumnaParametry[l].attr("Data modyfikacji");
		listaParametrow.push(parametr);
	}
	return listaParametrow;	
}
