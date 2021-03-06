/**
 * zwraca liste obiektow (tabel) z konfiguracja nazwami pol.
 * @returns {array} listaTabel
 */
function konifiguracja(){
	var listaTabel = [];

	var tabela = new Object();
	tabela.sezon = "2017";
	tabela.nazwaTabeli = "Arch Siew PROD 2017";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)";
	tabela.nazwaTabeliLinku = "Siew 2017";
    	tabela.typ = "Siew";
    	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2017";
	tabela.nazwaTabeli = "Arch SoR Mieszaniny PROD 2017";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)";
	tabela.nazwaTabeliLinku = "SoR 2017";	
	tabela.typ = "SoR";
   	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2017";
	tabela.nazwaTabeli = "Arch PaPu Nawozenie PROD 2017";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)";
	tabela.nazwaTabeliLinku = "PaPu 2017";	
	tabela.typ = "PaPu";
    	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);

	////// 2018 /////
	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "Siew PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)";
	tabela.nazwaTabeliLinku = "Siew 2018";
	tabela.typ = "Siew";
    	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "SoR Mieszaniny PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)";
	tabela.nazwaTabeliLinku = "SoR 2018";	
	tabela.typ = "SoR";
    	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "PaPu Nawozenie PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)";
	tabela.nazwaTabeliLinku = "PaPu 2018";	
	tabela.typ = "PaPu";
    	tabela.wspolczynnikKosztu = -1;
    	listaTabel.push(tabela);
    
	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "Zbior PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)";
	tabela.nazwaTabeliLinku = "Zbior 2018";	
	tabela.typ = "Zbior";
    	tabela.wspolczynnikKosztu = 1;
    	listaTabel.push(tabela);    
    
	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "Zabiegi uprawowe PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)";
	tabela.nazwaTabeliLinku = "Zabiegi uprawowe 2018";	
	tabela.typ = "Zabiegi uprawowe";
    	tabela.wspolczynnikKosztu = -1;
	listaTabel.push(tabela);
	
	
	////// 2019 /////
	var tabela = new Object();
	tabela.sezon = "2019";
	tabela.nazwaTabeli = "Siew 2019 PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)"
	tabela.nazwaTabeliLinku = "Siew 2019";
	tabela.typ = "Siew"
	listaTabel.push(tabela);
	

	return listaTabel;

}
