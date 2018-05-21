function UzupelnijKosztDlaWszystkichTabel(){
	var strukturaElementuSkladnika = {Nazwa: "Nazwa skladnika 1", Wartosc: "Wartosc skl 1"};
	var strukturaSkladnikuZabiegu = {Nazwa: "Nazwa skladnika 1", Wartosc: "wartość skł. 1 (zł/ha)", Dawka: "Dawka 1", IloscSkladnika: "ils skl 1", element: strukturaElementuSkladnika};
	var listaStrukturTabel = [
		{Nazwa: "Arch Siew PROD 2017", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2017", Zrodlo: "Siew", poleUprawa: "lista", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa nasion", iloscSkladnikow: 8},
		{Nazwa: "Arch SoR Mieszaniny PROD 2017", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2017", Zrodlo: "SoR", poleUprawa: "lista", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa srodka", iloscSkladnikow: 8},
		{Nazwa: "Arch PaPu Nawozenie PROD 2017", NazwaCenyZabiegu: "Cena zabiegu (zl/ha)", NazwaZabiegu: "Nazwa zabiegu", NumerZabiegu: "Numer zabiegu", Sezon: "2017", Zrodlo: "PaPu", poleUprawa: "lista", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa nawozu", iloscSkladnikow: 1},
		{Nazwa: "PaPu Nawozenie PROD", NazwaCenyZabiegu: "Cena zabiegu (zl/ha)", NazwaZabiegu: "Nazwa zabiegu", NumerZabiegu: "Numer zabiegu", Sezon: "2018", Zrodlo: "PaPu", poleUprawa: "biblioteka", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa nawozu", iloscSkladnikow: 1},
		{Nazwa: "Siew PROD", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2018", Zrodlo: "Siew", poleUprawa: "biblioteka", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa nasion", iloscSkladnikow: 8},
		{Nazwa: "SoR Mieszaniny PROD", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2018", Zrodlo: "SoR", poleUprawa: "biblioteka", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa srodka", iloscSkladnikow: 8}
	// ];
	// message("to moze potrwac kilka minut");
	// for(var i in listaStrukturTabel){	
		// UzupelnijUzyteProduktyDlaTabeli(listaStrukturTabel[i]);
	// }
// }
		{Nazwa: "SoR Mieszaniny PROD", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2018", Zrodlo: "SoR", poleUprawa: "biblioteka", skladnik: strukturaSkladnikuZabiegu, nazwaPolaSkladnika: "Nazwa srodka", iloscSkladnikow: 8}
	];
function UzupelnijUzyteProduktyDlaTabeli(StrukturaTabeli){
	var zabiegi = libByName(StrukturaTabeli.Nazwa).entries();
	for(var i in zabiegi){	
		UzupelnijUzyteProduktyDlaZabiegu(StrukturaTabeli,zabiegi[i]);
	}
}

function UzupelnijUzyteProduktyDlaZabiegu(StrukturaTabeli,zabieg){
	var daneZabiegu= {
		nazwaZabiegu: zabieg.field(StrukturaTabeli.NazwaZabiegu),
		numerZabiegu: zabieg.field(StrukturaTabeli.NumerZabiegu),
		status: zabieg.field("Status"),
		obszarRzeczywisty: zabieg.field("Obszar"),
		koszt_zl_ha: Math.round(Number(src(zabieg.field(StrukturaTabeli.NazwaCenyZabiegu)))),
		pola: zabieg.field("Pole")	
	};
	if(StrukturaTabeli.poleUprawa==="biblioteka" && !isNull(zabieg.field("Uprawa"))){						
		daneZabiegu.uprawa = zabieg.field("Uprawa")[0].field("Nazwa");
	}else{
		daneZabiegu.uprawa = zabieg.field("Uprawa");
	}
	
	daneZabiegu=DodajSkladnikiZabiegu(StrukturaTabeli,daneZabiegu,zabieg)
	DodajUzyteProduktu(StrukturaTabeli,daneZabiegu);
		
}

function DodajSkladnikiZabiegu(StrukturaTabeli,daneZabiegu,zabieg){
	var strukturaSkladnikuZabiegu=StrukturaTabeli.skladnik;	
	var listaSkladnikow = [];
	for(var i=1; i<=StrukturaTabeli.iloscSkladnikow;i++){	
		if(!isNull(zabieg.field(strukturaSkladnikuZabiegu.Nazwa.replace("1",String(i))))){
			var skladnik = new Object();
			skladnik.Nazwa=zabieg.field(strukturaSkladnikuZabiegu.Nazwa.replace("1",String(i)));
			skladnik.Wartosc=zabieg.field(strukturaSkladnikuZabiegu.Wartosc.replace("1",String(i)));
			skladnik.Dawka=zabieg.field(strukturaSkladnikuZabiegu.Dawka.replace("1",String(i)));
			skladnik.IloscSkladnika=zabieg.field(strukturaSkladnikuZabiegu.IloscSkladnika.replace("1",String(i)));
			var daneSkladnika=[skladnik.Nazwa,skladnik.Dawka]
			var listaElementowSkladnika = DodajElementSkladnika(StrukturaTabeli,daneSkladnika);
			skladnik.listaElementowSkladnika=listaElementowSkladnika;
			listaSkladnikow.push(skladnik);
		}
	}
	daneZabiegu.skladniki=listaSkladnikow;
	return daneZabiegu
}

function DodajElementSkladnika(StrukturaTabeli,daneSkladnika){
	var listaElementowSkladnika= [];
	var skladnik=daneSkladnika[0];
	var dawkaSkladnika=daneSkladnika[1];
	var strukturaElementuSkladnika = StrukturaTabeli.skladnik.element;
	if(StrukturaTabeli.Sezon==="2017" && StrukturaTabeli.Zrodlo==="Siew") return;
	for(var i=1; i<=6;i++){
		if(!isEmpty(skladnik[0].field(strukturaElementuSkladnika.Wartosc.replace("1",String(i))))){
			var element = new Object();
			if(i==4)
				element.Nazwa=skladnik[0].field("Nazwa slładnika 4");
			else
				element.Nazwa=skladnik[0].field(strukturaElementuSkladnika.Nazwa.replace("1",String(i)));
			
			element.IloscElementu=skladnik[0].field(strukturaElementuSkladnika.Wartosc.replace("1",String(i)));
			if(isNumeric(element.IloscElementu) && isNumeric(dawkaSkladnika))
				element.WartoscElementu=dawkaSkladnika * element.IloscElementu;
			element.Jednostka="kg/ha"; //Do zastanowienia sie
			
			listaElementowSkladnika.push(element);
		}	
	}	
	return listaElementowSkladnika;
}



function DodajUzyteProduktu(StrukturaTabeli,daneZabiegu){
	pola=daneZabiegu.pola;
	for(var i in pola){
		var listaSkladnikow=daneZabiegu.skladniki;
		for(var j in listaSkladnikow){	
			var listaElementowSkladnika = listaSkladnikow[j].listaElementowSkladnika;
			if(!isNaN(listaElementowSkladnika)){
				for(var k in listaElementowSkladnika){
					var uzyteProdukty = libByName("Uzyte produkty PROD"); 
					var nowyUzytyProdukt = new Object();
					nowyUzytyProdukt["Koszt (zl/ha)"] = daneZabiegu.koszt_zl_ha;
					nowyUzytyProdukt["Pole"] = pola[i].field("nazwa");
					nowyUzytyProdukt["Nazwa"] = StrukturaTabeli.Zrodlo;
					nowyUzytyProdukt["Uprawa"] = daneZabiegu.uprawa;
					nowyUzytyProdukt["Status"] = daneZabiegu.status;
					nowyUzytyProdukt["Sezon"] = StrukturaTabeli.Sezon;
					nowyUzytyProdukt["Nazwa zabiegu"] = daneZabiegu.numerZabiegu+" "+daneZabiegu.nazwaZabiegu;
					nowyUzytyProdukt["Nazwa skladnika"] = listaSkladnikow[j].Nazwa[0].field(StrukturaTabeli.nazwaPolaSkladnika)+" >R: "+listaSkladnikow[j].Nazwa[0].field("REF");
					nowyUzytyProdukt["Dawka"] = listaSkladnikow[j].Dawka;
					nowyUzytyProdukt["Wartosc skladnika"] = listaSkladnikow[j].Wartosc;
					nowyUzytyProdukt["Ilosc skladnika"] = listaSkladnikow[j].IloscSkladnika;
					nowyUzytyProdukt["Obszar rzeczywisty"] = daneZabiegu.obszarRzeczywisty;
					nowyUzytyProdukt["Cena sr wazona"] = listaSkladnikow[j].Nazwa[0].field("Cena sr wazona (zl/l)");
					nowyUzytyProdukt["Jednostka"] = listaSkladnikow[j].Nazwa[0].field("jednostka opakowania");
					nowyUzytyProdukt["Nazwa elementu skladnika"] = listaElementowSkladnika[k].Nazwa;
					nowyUzytyProdukt["Ilosc elementu skladnika"] = listaElementowSkladnika[k].IloscElementu;
					nowyUzytyProdukt["Jednostka elementu skladnika"] = listaElementowSkladnika[k].Jednostka;
					nowyUzytyProdukt["Wartosc elementu skladnika"] = listaElementowSkladnika[k].WartoscElementu;
					
					uzyteProdukty.create(nowyUzytyProdukt);
				}
			}else{
				var uzyteProdukty = libByName("Uzyte produkty PROD"); 
				var nowyUzytyProdukt = new Object();
				nowyUzytyProdukt["Koszt (zl/ha)"] = daneZabiegu.koszt_zl_ha;
				nowyUzytyProdukt["Pole"] = pola[i].field("nazwa");
				nowyUzytyProdukt["Nazwa"] = StrukturaTabeli.Zrodlo;
				nowyUzytyProdukt["Uprawa"] = daneZabiegu.uprawa;
				nowyUzytyProdukt["Status"] = daneZabiegu.status;
				nowyUzytyProdukt["Sezon"] = StrukturaTabeli.Sezon;
				nowyUzytyProdukt["Nazwa zabiegu"] = daneZabiegu.numerZabiegu+" "+daneZabiegu.nazwaZabiegu;
				nowyUzytyProdukt["Nazwa skladnika"] = listaSkladnikow[j].Nazwa[0].field(StrukturaTabeli.nazwaPolaSkladnika)+" >R: "+listaSkladnikow[j].Nazwa[0].field("REF");
				nowyUzytyProdukt["Dawka"] = listaSkladnikow[j].Dawka;
				nowyUzytyProdukt["Wartosc skladnika"] = listaSkladnikow[j].Wartosc;
				nowyUzytyProdukt["Ilosc skladnika"] = listaSkladnikow[j].IloscSkladnika;
				nowyUzytyProdukt["Obszar rzeczywisty"] = daneZabiegu.obszarRzeczywisty;
				nowyUzytyProdukt["Cena sr wazona"] = listaSkladnikow[j].Nazwa[0].field("Cena sr wazona (zl/l)");
				nowyUzytyProdukt["Jednostka"] = listaSkladnikow[j].Nazwa[0].field("jednostka opakowania");
				
				uzyteProdukty.create(nowyUzytyProdukt);
			}
		}
	}
}










