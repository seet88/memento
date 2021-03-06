
/**
 * oblicza koszt zabiegu (zl/ha) w zaleznosci czy zabiegl byl w pelni wykonanyczy tylko na czesci pola
 * - jezeli na czesci to koszty sa czesciowe
 * - jezeli obszar rzeczywisty jest uzupelniony - sprawdza czy czasem w calym polu - w danym sezonie 
 * obszar uzytkowy nie jest pomniejszony. (wycinek pola nie jest uzywany)
 * @param {object|rekord} zabieg 
 * @returns {number} kosztZabiegu
 */
function obliczRealnyKosztZabieguZl_ha(zabieg,tabela){
	if(isEmpty(zabieg.field(tabela.obszarRzeczywisty))){
		var cenaMieszanki = Math.round(Number(src(zabieg.field(tabela.cenaMieszanki))));
		if(!isNumber(cenaMieszanki)){
			message("Bledna cena mieszanki: "+zabieg.name+ "w tabeli:"+tabela.typ+tabela.sezon);
			return 0;
		} else {
			return cenaMieszanki;
		}
	} else {
		return obliczRealnyKosztZabieguWgStosunkuZl_ha(zabieg,tabela);		
	}
}

/**
 * oblicza koszt zabiegu (zl/ha) 
 * jezeli obszar rzeczywisty jest uzupelniony - sprawdza czy czasem w calym polu - w danym sezonie 
 * obszar uzytkowy nie jest pomniejszony. (wycinek pola nie jest uzywany)
 * @param {object|rekord} zabieg 
 * @param {object} tabela 
 * @returns {number} kosztZabiegu
 */
function obliczRealnyKosztZabieguWgStosunkuZl_ha(zabieg,tabela){
	var listaPol= zabieg.field(tabela.nazwaTabeliPola);
	var obszar=0;
	var stosunek=1;
	for(var i in listaPol){
		var obszarUzytkowyPola = znajdzObszarUzytkowyPolaDlaSezonu(listaPol[i],tabela);
		if(!isEmpty(obszarUzytkowyPola)){
			obszar+=obszar+Number(src(obszarUzytkowyPola));	
		}else{
			obszar+=obszar+Number(src(listaPol[i].field(tabela.obszar)));
		}
	}
	if(Number(src(obszar))>0){
		stosunek = zabieg.field(tabela.obszarRzeczywisty)/obszar;
	}
	var cenaMieszanki= Math.round(Number(src(zabieg.field(tabela.cenaMieszanki))));

	if(!isNumber(cenaMieszanki)){
		message("Bledna cena mieszanki: "+zabieg.name+ "w tabeli:"+tabela.typ+tabela.sezon);
		return 0;
	} else {
		return Math.round(cenaMieszanki*stosunek);
	}
}

/**
 * Szuka w atrybutach pol - obszaru uzytkowego dla zadanego pola w podanym sezonie.
 * jezeli znajdzie to zwraca obszar,
 * jezeli nic nie znajdzie- to zwraca pustego stringa.
 * @param {object|link} pole 
 * @param {object} tabela
 * @returns {number|string}  
 */
function znajdzObszarUzytkowyPolaDlaSezonu(pole,tabela){
	var atrybuty = libByName("Atrybuty pol PROD").entries();
	for(var i in atrybuty){
		if(atrybuty[i].field("Nazwa")=="obszar uzytkowy" && atrybuty[i].field("Grupa")=="obszary" && atrybuty[i].field("Sezon")==tabela.sezon){
			if(!isEmpty(atrybuty[i].field("Pole")[0]) && pole.name==atrybuty[i].field("Pole")[0].name){
				var obszarUzytkowyPola = atrybuty[i].field("Wartosc"); 
				return obszarUzytkowyPola;
			}
		}
	}
	return "";
}

/**
 * check if string is number
 * @param {string} n 
 * @returns {boolean}
 */
function isNumber(n) { 
	return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
}

/**
 * Sprawdza czy w liscie pol zawiera sie szukane pole
 * @param {string} szukanePole 
 * @param {array} listaPol 
 * @return {boolean}
 */
function spradzCzyPoleZawieraSieWLiscie(szukanePole,listaPol){
	for(var i in listaPol){
		if(szukanePole==listaPol[i].name){
			return true;
		}
	}
	return false;
}

/**
 * sprawdza czy liscie znajduje sie juz taki status
 * @param {string} status 
 * @param {array} listaKosztowZabiegow 
 * @return {number}
 */
function sprawdzNumerStatusu(status, listaKosztowZabiegow){
	for(var i  in listaKosztowZabiegow){
		if(listaKosztowZabiegow[i].status==status){
			return i;
		}
	} return -1;
}
/**
 * zwraca nazwe uprawy w zaleznosci od sezonu
 * @param {object|string} uprawa 
 * @param {string} sezon 
 * @returns {string}
 */
function pobierzNazweUprawy(uprawa,sezon){
	if(sezon=="2017"){
		return uprawa;
	}else if(!isArrayEmpty(uprawa)){
		return uprawa[0].name
	} else
		return "brakWybranejUprawy";
}

/**
 * szuka danego pola w zabiegach
 * @param {string} pole 
 * @param {array} listaZabiegow 
 * @param {object} tabela -konfiguracja z nazwami pol
 */
function obliczKosztDlaDanegoPola(pole,listaZabiegow,tabela){
	var listaKosztowZabiegow = []
	for(var i in listaZabiegow){
		polaWZabiegu=listaZabiegow[i].field(tabela.nazwaTabeliPola);
		if(spradzCzyPoleZawieraSieWLiscie(pole,polaWZabiegu)){
			if(!isEmpty(listaZabiegow[i].field("Uprawa"))){
				var numerStatusu = sprawdzNumerStatusu(listaZabiegow[i].field("Status"), listaKosztowZabiegow);
				if(0<=numerStatusu){
					listaKosztowZabiegow[numerStatusu].koszt_zl_ha += obliczRealnyKosztZabieguZl_ha(listaZabiegow[i], tabela);
					listaKosztowZabiegow[numerStatusu].pole = pole;
					kosztZabiegu.uprawa = pobierzNazweUprawy(listaZabiegow[i].field("Uprawa"),tabela.sezon);
					listaKosztowZabiegow[numerStatusu].rok = tabela.sezon;
					listaKosztowZabiegow[numerStatusu].typ = tabela.typ;
					listaKosztowZabiegow[numerStatusu].status = listaZabiegow[i].field("Status");
					listaKosztowZabiegow[numerStatusu].linki += listaZabiegow[i].name+", ";
				} else{
					var kosztZabiegu = new Object();	
					kosztZabiegu.koszt_zl_ha=0;	
					kosztZabiegu.koszt_zl_ha = obliczRealnyKosztZabieguZl_ha(listaZabiegow[i], tabela);
					kosztZabiegu.pole = pole;
					kosztZabiegu.uprawa = pobierzNazweUprawy(listaZabiegow[i].field("Uprawa"),tabela.sezon);
					kosztZabiegu.rok = tabela.sezon;
					kosztZabiegu.typ = tabela.typ;
					kosztZabiegu.status = listaZabiegow[i].field("Status");
					kosztZabiegu.linki = listaZabiegow[i].name+", ";
					listaKosztowZabiegow.push(kosztZabiegu);					
				}
				
			}	
		}
	}
	return listaKosztowZabiegow;
}

/**
 * funkcja oblicza i dodaje koszty dla wszystkich tabel z konfiguracji
 */
function obliczKosztDlaWszystkichTypowZabiegow(){
	var listaTabel = konifiguracja();
	for(var i in listaTabel){
		obliczKosztDlaTypuZabiegu(listaTabel[i]);
	}

}

/**
 * oblicza koszt dla danego typu zabiegu podanego w parametrze tabela np. siew 2017
 * po obliczeniu dodaje wpis
 * @param {object} tabela -konfiguracja z nazwami pol
 */
function obliczKosztDlaTypuZabiegu(tabela){
	//zmienic nazwe lib jako param werjsciowy
	var zabiegi = libByName(tabela.nazwaTabeli);
	var pola = libByName("pola").entries();
	for(var k in pola){
		var listaZnalezionychZabiegow=zabiegi.find(pola[k].name);
		listaPodsumowanZabiegow=obliczKosztDlaDanegoPola(pola[k].name,listaZnalezionychZabiegow, tabela)
		//message("PodsumowanieZabiegow.pole:"+PodsumowanieZabiegow.pole);
		for(var i in listaPodsumowanZabiegow){			
			if(!isEmpty(listaPodsumowanZabiegow[i].pole)){
				dodajSumeTypuZabiegu(listaPodsumowanZabiegow[i], tabela);
			}
		}
	}
}

/**
 * dodaje nowy wpis do tabeli Oplacalnosc upraw zgodnie z otrzymanym obiektem PodsumowanieZabiegow
 * @param {object} PodsumowanieZabiegow 
 * @param {object} tabela -konfiguracja z nazwami pol
 */
function dodajSumeTypuZabiegu(PodsumowanieZabiegow, tabela){
	var kosztZabiegow = libByName("Oplacalnosc upraw PROD");
	var nowyKosztZabiegow = new Object();
	nowyKosztZabiegow["Koszt (zl/ha)"] = PodsumowanieZabiegow.koszt_zl_ha * tabela.wspolczynnikKosztu;
	nowyKosztZabiegow["Pole"] = PodsumowanieZabiegow.pole;
	nowyKosztZabiegow["Nazwa"] = PodsumowanieZabiegow.typ;
	nowyKosztZabiegow["Uprawa"] = PodsumowanieZabiegow.uprawa;
	nowyKosztZabiegow["Status"] = PodsumowanieZabiegow.status;
	nowyKosztZabiegow["Sezon"] = PodsumowanieZabiegow.rok;
	nowyKosztZabiegow["Lista zabiegow"] = PodsumowanieZabiegow.linki;
	nowyKosztZabiegow[tabela.nazwaTabeliLinku] = PodsumowanieZabiegow.linki;

	kosztZabiegow.create(nowyKosztZabiegow);
	var z = kosztZabiegow.entries();	
}

