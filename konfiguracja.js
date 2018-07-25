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
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)"
	tabela.nazwaTabeliLinku = "Siew 2017";
	tabela.typ = "Siew"
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2017";
	tabela.nazwaTabeli = "Arch SoR Mieszaniny PROD 2017";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)"
	tabela.nazwaTabeliLinku = "SoR 2017";	
	tabela.typ = "SoR"
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2017";
	tabela.nazwaTabeli = "Arch PaPu Nawozenie PROD 2017";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)"
	tabela.nazwaTabeliLinku = "PaPu 2017";	
	tabela.typ = "PaPu"
	listaTabel.push(tabela);

	////// 2018 /////
	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "Siew PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)"
	tabela.nazwaTabeliLinku = "Siew 2018";
	tabela.typ = "Siew"
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "SoR Mieszaniny PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena mieszanki (zl/ha)"
	tabela.nazwaTabeliLinku = "SoR 2018";	
	tabela.typ = "SoR"
	listaTabel.push(tabela);

	var tabela = new Object();
	tabela.sezon = "2018";
	tabela.nazwaTabeli = "PaPu Nawozenie PROD";
	tabela.nazwaTabeliPola = "Pole";
	tabela.obszarRzeczywisty = "Obszar rzeczywisty";
	tabela.obszar = "obszar";
	tabela.cenaMieszanki = "Cena zabiegu (zl/ha)"
	tabela.nazwaTabeliLinku = "PaPu 2018";	
	tabela.typ = "PaPu"
	listaTabel.push(tabela);

	return listaTabel;

}
