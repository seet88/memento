function synchronizeLibraryByName(libName){
	switch (libName) {
		case "Przeglad maszyny PROD":
			synchronizeLibrary_pojazdy_prod();
			synchronizeLibrary_filtry_i_oleje_prod();
			
			synchronizeLibrary_przeglad_maszyny_prod();
			break;
		case "Tankowanie PROD":
			synchronizeLibrary_pojazdy_prod();
			synchronizeLibrary_fv_all();
			
			synchronizeLibrary_tankowanie_prod();
			break;
		case "Uslugi PROD":
			synchronizeLibrary_pojazdy_prod();
			synchronizeLibrary_fv_all();
			//synchronizeLibrary_stawki_pracownicy_prod();
			synchronizeLibrary_tankowanie_prod();
			
			synchronizeLibrary_uslugi_prod();
			break;
		case 'SoR Mieszaniny 2020 PROD':
			synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	  

			synchronizeLibrary_srodki_2020_prod();
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();	

			synchronizeLibrary_sor_mieszaniny_2020_prod();		
		break;
		case 'srodki 2020 PROD':
			synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	

			synchronizeLibrary_srodki_2020_prod();		
			break;
		case 'PaPu Nawozenie 2020 PROD':
			synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	  

			synchronizeLibrary_nawozy_2020_prod();
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();

			synchronizeLibrary_papu_nawozenie_2020_prod();
			break;
		case 'nawozy 2020 PROD':
			synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	

			synchronizeLibrary_nawozy_2020_prod();		
			break;
		case "Zabiegi uprawowe 2020 PROD":
			synchronizeLibrary_pojazdy_prod();
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			synchronizeLibrary_tankowanie_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();
			
			synchronizeLibrary_zabiegi_uprawowe_2020_prod();
			break;		
		case "Zbior 2020 PROD":
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();
			synchronizeLibrary_nasiona_2020_prod();
			//synchronizeLibrary_parametry_ziarna_prod();
			
			
			synchronizeLibrary_zbior_2020_prod();
			break;
				
		case "Zbior pozycje 2020 PROD":
			synchronizeLibrary_zbior_2020_prod();
			synchronizeLibrary_pola();
			synchronizeLibrary_pojazdy_prod();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();
			//synchronizeLibrary_parametry_ziarna_prod();			
			
			synchronizeLibrary_zbior_pozycje_2020_prod();
			break;	
			
		case "Inwentura PROD":
			synchronizeLibrary_inwentura_prod();
			break;
			
		case "Opis produktow PROD":
			synchronizeLibrary_pojazdy_prod();
			
			synchronizeLibrary_opis_produktow_prod();
			break;
		
		default:
		message("brak funcji synchronizacji dla podanej biblioteki:"+libName);
	}

}


function synchronizeLibrary_pola(){
    let addAllCustomLibFields = addAllCustomLibFields_pola
    let libName = "pola";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_srodki_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_srodki_prod
    let libName = "srodki PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nawozy_prod
    let libName = "Nawozy PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_tankowanie_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_tankowanie_prod
    let libName = "Tankowanie PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_uslugi_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_uslugi_prod
    let libName = "Uslugi PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_traccar_zadania_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_traccar_zadania_prod
    let libName = "Traccar zadania PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_stawki_pracownicy_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_stawki_pracownicy_prod
    let libName = "Stawki Pracownicy PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_rcp_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_rcp_prod
    let libName = "RCP PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zakupy_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zakupy_prod
    let libName = "Zakupy PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nasiona_prod
    let libName = "Nasiona PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_fv_all(){
    let addAllCustomLibFields = addAllCustomLibFields_fv_all
    let libName = "FV_All";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zob_i_nal_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zob_i_nal_prod
    let libName = "Zob i Nal PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_notatki_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_notatki_prod
    let libName = "Notatki PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_poferment_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_poferment_prod
    let libName = "Poferment PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_prod
    let libName = "SoR Mieszaniny PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_siew_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_siew_prod
    let libName = "Siew PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_prod
    let libName = "PaPu Nawozenie PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_filtry_i_oleje_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_filtry_i_oleje_prod
    let libName = "Filtry i oleje PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_pojazdy_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_pojazdy_prod
    let libName = "Pojazdy PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_przeglad_maszyny_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_przeglad_maszyny_prod
    let libName = "Przeglad maszyny PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_srodki_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_srodki_prod_2017
    let libName = "Arch srodki PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_sor_mieszaniny_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_sor_mieszaniny_prod_2017
    let libName = "Arch SoR Mieszaniny PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_nawozy_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_nawozy_prod_2017
    let libName = "Arch Nawozy PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_papu_nawozenie_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_papu_nawozenie_prod_2017
    let libName = "Arch PaPu Nawozenie PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_nasiona_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_nasiona_prod_2017
    let libName = "Arch Nasiona PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_arch_siew_prod_2017(){
    let addAllCustomLibFields = addAllCustomLibFields_arch_siew_prod_2017
    let libName = "Arch Siew PROD 2017";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_uprawy_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_uprawy_prod
    let libName = "Uprawy PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_konfiguracja_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_konfiguracja_prod
    let libName = "Konfiguracja PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_inwentura_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_inwentura_prod
    let libName = "Inwentura PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_typy_skladnikow_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_typy_skladnikow_prod
    let libName = "Typy skladnikow PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_wartosci_skladnikow_produktow_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_wartosci_skladnikow_produktow_prod
    let libName = "Wartosci skladnikow produktow PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_uzyte_aktywne_skladniki_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_uzyte_aktywne_skladniki_prod
    let libName = "Uzyte aktywne skladniki PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_prod
    let libName = "Zabiegi uprawowe PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_oplacalnosc_upraw_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_oplacalnosc_upraw_prod
    let libName = "Oplacalnosc upraw PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_uzyte_produkty_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_uzyte_produkty_prod
    let libName = "Uzyte produkty PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_parametry_ziarna_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_parametry_ziarna_prod
    let libName = "Parametry ziarna PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_prod
    let libName = "Zbior pozycje PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_prod
    let libName = "Zbior PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nasiona_2019_prod
    let libName = "Nasiona 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_siew_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_siew_2019_prod
    let libName = "Siew 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nawozy_2019_prod
    let libName = "Nawozy 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2019_prod
    let libName = "PaPu Nawozenie 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_srodki_2019_prod
    let libName = "srodki 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2019_prod
    let libName = "SoR Mieszaniny 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2019_prod
    let libName = "Zabiegi uprawowe 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_atrybuty_pol_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_atrybuty_pol_prod
    let libName = "Atrybuty pol PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_atrybuty_pol_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_atrybuty_pol_prod
    let libName = "Atrybuty pol PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_suszenie_2018_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_suszenie_2018_prod
    let libName = "Suszenie 2018 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_rcp_via_nfc_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_rcp_via_nfc_prod
    let libName = "RCP via NFC PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_lista_itagow_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_lista_itagow_prod
    let libName = "Lista iTagow PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_pola_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zabiegi_pola_prod
    let libName = "Zabiegi pola PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_wyslodki_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_wyslodki_prod
    let libName = "Wyslodki PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_wyslodki_proste_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_wyslodki_proste_prod
    let libName = "Wyslodki_proste PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_lokacje_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_lokacje_prod
    let libName = "Lokacje PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2019_prod
    let libName = "Zbior pozycje 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_2019_prod
    let libName = "Zbior 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_srodki_2020_prod
    let libName = "srodki 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2020_prod
    let libName = "SoR Mieszaniny 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2020_prod
    let libName = "Zabiegi uprawowe 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nawozy_2020_prod
    let libName = "Nawozy 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2020_prod
    let libName = "PaPu Nawozenie 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nasiona_2020_prod
    let libName = "Nasiona 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nasiona_2020_prod
    let libName = "Nasiona 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_siew_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_siew_2020_prod
    let libName = "Siew 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_2020_prod
    let libName = "Zbior 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2020_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2020_prod
    let libName = "Zbior pozycje 2020 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_opis_produktow_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_opis_produktow_prod
    let libName = "Opis produktow PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_typy_zabiegow_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_typy_zabiegow_prod
    let libName = "Typy zabiegow PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_suszenie_2019_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_suszenie_2019_prod
    let libName = "Suszenie 2019 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_badania_gleb_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_badania_gleb_prod
    let libName = "Badania gleb PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nasiona_2021_prod
    let libName = "Nasiona 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_siew_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_siew_2021_prod
    let libName = "Siew 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_nawozy_2021_prod
    let libName = "Nawozy 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2021_prod
    let libName = "PaPu Nawozenie 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2021_prod
    let libName = "SoR Mieszaniny 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_srodki_2021_prod
    let libName = "srodki 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2021_prod
    let libName = "Zabiegi uprawowe 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2021_prod
    let libName = "Zbior pozycje 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2021_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_zbior_2021_prod
    let libName = "Zbior 2021 PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}

function synchronizeLibrary_synchronizacje_prod(){
    let addAllCustomLibFields = addAllCustomLibFields_synchronizacje_prod
    let libName = "Synchronizacje PROD";
    let entriesConfig = libByName("Synchronizacja konfig PROD").entries();
    let serverAddress = entriesConfig[0].field("Server");

    let usersConfig = libByName("Konfiguracja PROD").entries();
    let userName = "";
    for(let idx in usersConfig){
    if(usersConfig[idx].field("czy To Ty"))
		userName = usersConfig[idx].field("Nazwa Uzytkownika");
    }

    synchronizeLibraryWithServer(libName, serverAddress, userName, addAllCustomLibFields);
}
