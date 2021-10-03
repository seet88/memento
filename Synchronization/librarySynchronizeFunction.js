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
			//synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	  

			synchronizeLibrary_srodki_2020_prod();
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();	

			synchronizeLibrary_sor_mieszaniny_2020_prod();		
		break;
		case 'srodki 2020 PROD':
			//synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	

			synchronizeLibrary_srodki_2020_prod();		
			break;
		case 'PaPu Nawozenie 2020 PROD':
			//synchronizeLibrary_opis_produktow_prod();
			//synchronizeLibrary_lokacje_prod();	  

			synchronizeLibrary_nawozy_2020_prod();
			synchronizeLibrary_pola();
			//synchronizeLibrary_uprawy_prod();
			//synchronizeLibrary_stawki_pracownicy_prod();

			synchronizeLibrary_papu_nawozenie_2020_prod();
			break;
		case 'nawozy 2020 PROD':
			//synchronizeLibrary_opis_produktow_prod();
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
		
		default:
		message("brak funcji synchronizacji dla podanej biblioteki:"+libName);
	}

}

function synchronizeLibrary_pola(){ 
	var addAllCustomLibFields = addAllCustomLibFields_pola
	var libName = "pola";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_fv_all(){ 
	var addAllCustomLibFields = addAllCustomLibFields_fv_all
	var libName = "FV_All";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_srodki_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_srodki_prod
	var libName = "srodki PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nawozy_prod
	var libName = "Nawozy PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_tankowanie_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_tankowanie_prod
	var libName = "Tankowanie PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_uslugi_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_uslugi_prod
	var libName = "Uslugi PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_traccar_zadania_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_traccar_zadania_prod
	var libName = "Traccar zadania PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_stawki_pracownicy_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_stawki_pracownicy_prod
	var libName = "Stawki Pracownicy PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_rcp_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_rcp_prod
	var libName = "RCP PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zakupy_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zakupy_prod
	var libName = "Zakupy PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nasiona_prod
	var libName = "Nasiona PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zob_i_nal_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zob_i_nal_prod
	var libName = "Zob i Nal PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_notatki_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_notatki_prod
	var libName = "Notatki PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_poferment_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_poferment_prod
	var libName = "Poferment PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_prod
	var libName = "SoR Mieszaniny PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_siew_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_siew_prod
	var libName = "Siew PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_prod
	var libName = "PaPu Nawozenie PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_filtry_i_oleje_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_filtry_i_oleje_prod
	var libName = "Filtry i oleje PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_pojazdy_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_pojazdy_prod
	var libName = "Pojazdy PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_przeglad_maszyny_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_przeglad_maszyny_prod
	var libName = "Przeglad maszyny PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_srodki_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_srodki_prod_2017
	var libName = "Arch srodki PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_sor_mieszaniny_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_sor_mieszaniny_prod_2017
	var libName = "Arch SoR Mieszaniny PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_nawozy_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_nawozy_prod_2017
	var libName = "Arch Nawozy PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_papu_nawozenie_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_papu_nawozenie_prod_2017
	var libName = "Arch PaPu Nawozenie PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_nasiona_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_nasiona_prod_2017
	var libName = "Arch Nasiona PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_arch_siew_prod_2017(){ 
	var addAllCustomLibFields = addAllCustomLibFields_arch_siew_prod_2017
	var libName = "Arch Siew PROD 2017";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_uprawy_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_uprawy_prod
	var libName = "Uprawy PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_konfiguracja_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_konfiguracja_prod
	var libName = "Konfiguracja PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_inwentura_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_inwentura_prod
	var libName = "Inwentura PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_typy_skladnikow_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_typy_skladnikow_prod
	var libName = "Typy skladnikow PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_wartosci_skladnikow_produktow_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_wartosci_skladnikow_produktow_prod
	var libName = "Wartosci skladnikow produktow PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_uzyte_aktywne_skladniki_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_uzyte_aktywne_skladniki_prod
	var libName = "Uzyte aktywne skladniki PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_prod
	var libName = "Zabiegi uprawowe PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_oplacalnosc_upraw_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_oplacalnosc_upraw_prod
	var libName = "Oplacalnosc upraw PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_uzyte_produkty_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_uzyte_produkty_prod
	var libName = "Uzyte produkty PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_parametry_ziarna_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_parametry_ziarna_prod
	var libName = "Parametry ziarna PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_prod
	var libName = "Zbior pozycje PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_prod
	var libName = "Zbior PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nasiona_2019_prod
	var libName = "Nasiona 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_siew_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_siew_2019_prod
	var libName = "Siew 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nawozy_2019_prod
	var libName = "Nawozy 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2019_prod
	var libName = "PaPu Nawozenie 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_srodki_2019_prod
	var libName = "srodki 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2019_prod
	var libName = "SoR Mieszaniny 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2019_prod
	var libName = "Zabiegi uprawowe 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_atrybuty_pol_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_atrybuty_pol_prod
	var libName = "Atrybuty pol PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_suszenie_2018_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_suszenie_2018_prod
	var libName = "Suszenie 2018 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_rcp_via_nfc_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_rcp_via_nfc_prod
	var libName = "RCP via NFC PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_lista_itagow_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_lista_itagow_prod
	var libName = "Lista iTagow PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_pola_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zabiegi_pola_prod
	var libName = "Zabiegi pola PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_wyslodki_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_wyslodki_prod
	var libName = "Wyslodki PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_wyslodki_proste_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_wyslodki_proste_prod
	var libName = "Wyslodki_proste PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_lokacje_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_lokacje_prod
	var libName = "Lokacje PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2019_prod
	var libName = "Zbior pozycje 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_2019_prod
	var libName = "Zbior 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_srodki_2020_prod
	var libName = "srodki 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2020_prod
	var libName = "SoR Mieszaniny 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2020_prod
	var libName = "Zabiegi uprawowe 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nawozy_2020_prod
	var libName = "Nawozy 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");
	
	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2020_prod
	var libName = "PaPu Nawozenie 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nasiona_2020_prod
	var libName = "Nasiona 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}


function synchronizeLibrary_siew_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_siew_2020_prod
	var libName = "Siew 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_2020_prod
	var libName = "Zbior 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2020_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2020_prod
	var libName = "Zbior pozycje 2020 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_opis_produktow_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_opis_produktow_prod
	var libName = "Opis produktow PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_typy_zabiegow_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_typy_zabiegow_prod
	var libName = "Typy zabiegow PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_suszenie_2019_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_suszenie_2019_prod
	var libName = "Suszenie 2019 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_badania_gleb_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_badania_gleb_prod
	var libName = "Badania gleb PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nasiona_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nasiona_2021_prod
	var libName = "Nasiona 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_siew_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_siew_2021_prod
	var libName = "Siew 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_nawozy_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_nawozy_2021_prod
	var libName = "Nawozy 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_papu_nawozenie_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_papu_nawozenie_2021_prod
	var libName = "PaPu Nawozenie 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_sor_mieszaniny_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_sor_mieszaniny_2021_prod
	var libName = "SoR Mieszaniny 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_srodki_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_srodki_2021_prod
	var libName = "srodki 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zabiegi_uprawowe_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zabiegi_uprawowe_2021_prod
	var libName = "Zabiegi uprawowe 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_pozycje_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_pozycje_2021_prod
	var libName = "Zbior pozycje 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_zbior_2021_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_zbior_2021_prod
	var libName = "Zbior 2021 PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}

function synchronizeLibrary_synchronizacje_prod(){ 
	var addAllCustomLibFields = addAllCustomLibFields_synchronizacje_prod
	var libName = "Synchronizacje PROD";
	var entriesConfig = libByName("Synchronizacja konfig PROD").entries();
	var serverAddress = entriesConfig[0].field("Server");

	synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields);
}
