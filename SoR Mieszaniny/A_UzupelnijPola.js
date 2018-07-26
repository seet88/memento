/**
 * wyciaga z tabeli Siew pola w zaleznosci od uprawy, i uzupelnia w podanej tabeli
 * @param {object} konfiguracja 
 */
function uzupelnijPolaZSwiewu(konfiguracja,rekord){
	var libSiew = libByName(konfiguracja.nazwaTabeli).entries();
	//var libSiew = libByName("Siew PROD").entries();
	var uprawaSiew ="";
	var e=rekord;
	var pole = "";
	var uprawa = pobierzNazweUprawy(e.field("uprawa"));
	for(var i in libSiew){
		uprawaSiew=pobierzNazweUprawy(libSiew[i].field("uprawa"));
		if(pole!="" || e.field("pole")[0]===undefined || e.field("pole")[0]=== null ){
		//message("h:"+e.field("pole")[0]);
			if(uprawa==uprawaSiew){
			 message(uprawaSiew);
				for(var j=0; j<libSiew[i].field("pole").length;j++){

				var    p = libSiew[i].field("pole")[j];
				if(!pole.includes(p.field("nazwa"))){
					pole += ", "+ p.field("nazwa");	
				}
				}
			}	
		}	
		
	}
	if(pole!=""){		
		e.set("pole",pole);
		e.recalc();
		message("Pamietaj o edycji pola, przelicz obszar! - chyba samo juz sie oblicza :)");
	}
	else{
		message("Wybrane sa juz pola, nie moge nadpisac ich");
	}
}
