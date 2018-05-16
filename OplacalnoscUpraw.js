//Kod wyciaga z tabeli zabieg koszt dla danego pola i dodaje wpis w Oplacalnosc upraw

UzupelnijKosztDlaWszystkichTabel();	

function UzupelnijKosztDlaWszystkichTabel(){
	var listaStrukturTabel = [
		{Nazwa: "Arch Siew PROD 2017", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2017", Zrodlo: "Siew"},
		{Nazwa: "Arch SoR Mieszaniny PROD 2017", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2017", Zrodlo: "SoR"},
		{Nazwa: "Arch PaPu Nawozenie PROD 2017", NazwaCenyZabiegu: "Cena zabiegu (zl/ha)", NazwaZabiegu: "Nazwa zabiegu", NumerZabiegu: "Numer zabiegu", Sezon: "2017", Zrodlo: "PaPu"},
		{Nazwa: "PaPu Nawozenie PROD", NazwaCenyZabiegu: "Cena zabiegu (zl/ha)", NazwaZabiegu: "Nazwa zabiegu", NumerZabiegu: "Numer zabiegu", Sezon: "2018", Zrodlo: "PaPu"},
		{Nazwa: "Siew PROD", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2018", Zrodlo: "Siew"},
		{Nazwa: "SoR Mieszaniny PROD", NazwaCenyZabiegu: "Cena mieszanki (zl/ha)", NazwaZabiegu: "Mieszanina", NumerZabiegu: "Numer mieszanki", Sezon: "2018", Zrodlo: "SoR"}
	]
	for(var i in listaStrukturTabel){		
		UzupelnijKosztDlaWszystkichPol(listaStrukturTabel[i]);
	}
}

function UzupelnijKosztDlaWszystkichPol(StrukturaTabeli){
	var zabiegi = libByName(StrukturaTabeli.Nazwa).entries();
	var pola = libByName("pola").entries();
	
	for(var k in pola){	
		var pole=pola[k].field("nazwa");
		UzupelnijKosztDlaPola(zabiegi,pole,StrukturaTabeli);
	}
}

function UzupelnijKosztDlaPola(zabiegi,pole,StrukturaTabeli){		
	var kosztyZabiegu={
		koszt_zl_ha: [],
		nazwaZabiegu: []
		};
	for(var i in zabiegi){
		kosztyZabiegu = UzupelnijKosztZabieguDlaPola(zabiegi[i],kosztyZabiegu,pole,StrukturaTabeli);
	}
	DodajWpisDoOplacalnoscUpraw(kosztyZabiegu,pole,StrukturaTabeli);	
}

function UzupelnijKosztZabieguDlaPola(zabieg,kosztyZabiegu, pole,StrukturaTabeli){
	zabiegPola=zabieg.field("Pole");
		if(zabieg.field("Uprawa")!==undefined && zabieg.field("Uprawa")!== null){		
			for(var j in zabiegPola){
				var zabiegPole=zabiegPola[j].field("nazwa");
				if(pole===zabiegPole){					
					var status = zabieg.field("Status");
					var uprawaZabieg = zabieg.field("Uprawa");
					if(kosztyZabiegu.nazwaZabiegu[status]===undefined || kosztyZabiegu.nazwaZabiegu[status]===null || kosztyZabiegu.nazwaZabiegu[status]===NaN)
						kosztyZabiegu.nazwaZabiegu[status] ="";
					
					kosztyZabiegu.nazwaZabiegu[status] += zabieg.field(StrukturaTabeli.NumerZabiegu)+" "+zabieg.field(StrukturaTabeli.NazwaZabiegu)+"; ";
					
					if(kosztyZabiegu.koszt_zl_ha[status]===undefined || kosztyZabiegu.koszt_zl_ha[status]===null || kosztyZabiegu.koszt_zl_ha[status]===NaN)
						kosztyZabiegu.koszt_zl_ha[status]=0;
					kosztyZabiegu.koszt_zl_ha[status]+=Math.round(Number(src(zabieg.field(StrukturaTabeli.NazwaCenyZabiegu))));	
				}		
			}
		}
	if(status===undefined){
		status=kosztyZabiegu.statusZabiegu;
		uprawaZabieg=kosztyZabiegu.uprawa;
	}
	return {
		koszt_zl_ha: kosztyZabiegu.koszt_zl_ha,
		statusZabiegu: status,
		uprawa: uprawaZabieg,
		nazwaZabiegu: kosztyZabiegu.nazwaZabiegu
		};		
}

function DodajWpisDoOplacalnoscUpraw(kosztyZabiegu,pole,StrukturaTabeli){
	for(var status in kosztyZabiegu.koszt_zl_ha){
		if(kosztyZabiegu.koszt_zl_ha[status]>0){
			var kosztZabiegow = libByName("Oplacalnosc upraw PROD"); 
			var nowyKosztZabiegow = new Object();
			nowyKosztZabiegow["Koszt (zl/ha)"] = kosztyZabiegu.koszt_zl_ha[status];
			nowyKosztZabiegow["Pole"] = pole;
			nowyKosztZabiegow["Nazwa"] = StrukturaTabeli.Zrodlo;
			nowyKosztZabiegow["Uprawa"] = kosztyZabiegu.uprawa;
			nowyKosztZabiegow["Status"] = status;
			nowyKosztZabiegow["Sezon"] = StrukturaTabeli.Sezon;
			nowyKosztZabiegow["Lista zabiegow"] = kosztyZabiegu.nazwaZabiegu[status];
			kosztZabiegow.create(nowyKosztZabiegow);
			//message("koszt_zl_ha: "+kosztyZabiegu.koszt_zl_ha[status]+" dla pola: "+pole+ " uprawa: "+kosztyZabiegu.uprawa+ " statusZabiegu: "+status+ " nazwaZabiegu: "+kosztyZabiegu.nazwaZabiegu);
		}
	}
}
