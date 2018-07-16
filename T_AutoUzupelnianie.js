/**
 * Funkcja uzupelnia produkt z siewu na podstawie wybranego pola i uprawy w zbiorze
 * @param {object} rekord 
 */
function uzupelnijProdukt(rekord){
    var uprawa = rekord.field("Uprawa")[0].name;
    var pole = rekord.field("Pole")[0].name;
    var siewRekord = znajdzSiewDlaUprawyIPola(uprawa,pole);    
    var produkt = pobierzNazweProduktuZSiewu(siewRekord);
    rekord.set("nazwa skladnika 1",produkt);
    rekord.recalc();
}

/**
 * Pobiera pelna nazwe linku produktu z siewu
 * @param {object} rekord 
 * @returns {string}
 */
function pobierzNazweProduktuZSiewu(rekord){
    var linkSkladnik1=rekord.field("Nazwa skladnika 1")[0];   
    return pobierzLinkDoProduktu(linkSkladnik1); 
}

/**
 * Szuka w siewie - siewu dla danego pola i uprawy, zwraca 
 * @param {string} szukanaUprawa 
 * @param {string} szukanePole 
 * @returns {object} -rekord siewu
 */
function znajdzSiewDlaUprawyIPola(szukanaUprawa,szukanePole){    
    var siewy = libByName("Siew PROD").entries();
    for(var i in siewy){  
        var uprawa=siewy[i].field("Uprawa")    
        if(sprawdzCzyUprawaJestWLiscieUpraw(szukanaUprawa,uprawa)){
            var pola=siewy[i].field("Pole")          
            if(sprawdzCzyPoleJestWLisciePol(szukanePole,pola)){                
                return siewy[i];                
            }
        }        
    }
    message("Nie udalo sie znalesc siewu dla zadanego pola i uprawy");
}

/**
 * pobiera pelna nazwe linku z rekordu
 * @param {object} rekord 
 * @returns {string} -pelna nazwa linku
 */
function pobierzLinkDoProduktu(rekord){
    if(!isEmpty(rekord)){
        return rekord.name;
    }
}

/**
 * sprawdza czy szukana uprawa znajdzuje sie w liscie podlinkowanych upraw
 * @param {string} szukanaUprawa 
 * @param {object} listaUpraw 
 */
function sprawdzCzyUprawaJestWLiscieUpraw(szukanaUprawa,listaUpraw){
    for(var i in listaUpraw){
        if(listaUpraw[i].field("Nazwa")==szukanaUprawa){
            return true
        }
    } 
    return false;
}

/**
 * sprawdza czy szukane pole znajdzuje sie w liscie podlinkowanych pol
 * @param {string} szukanePole 
 * @param {object} listaPol 
 */
function sprawdzCzyPoleJestWLisciePol(szukanePole,listaPol){
    for(var i in listaPol){
        if(listaPol[i].field("Nazwa")==szukanePole){
            return true
        }
    } 
    return false;
}
