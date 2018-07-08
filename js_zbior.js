/**
 * Zwraca cene jednostkowa wybranego produktu
 * @param {object} rekord  
 * @returns {number}
 */
function liczCeneWedlugCenyProduktu(rekord){
    var wartosc=0
    if(!isEmpty(rekord.field('nazwa skladnika 1')[0])){
        wartosc = rekord.field('nazwa skladnika 1')[0].field('cena sr wazona (zl/l)');
    }
    return srd(Number(Math.round(wartosc+'e2')+'e-2'));    
}
/**
 * Zwraca cene ktora zostala podana w atrybucie wybranego produktu
 * @param {object} rekord 
 * @returns {number}
 */
function liczCeneWedlugCenyZAtrybutuProduktu(rekord){
    var cenaZArtybutuProduktu = 0;
    if(!isEmpty(rekord.field('nazwa skladnika 1')[0])){
        if(isNumeric(rekord.field('nazwa skladnika 1')[0].attr("Cena"))){
            return cenaZArtybutuProduktu=rekord.field('nazwa skladnika 1')[0].attr("Cena");
        } else{
            return 0;
        }
    }
}

/**
 * Oblicza cene skladnika wedlug wybranej opcji z pola "Licz Cene Wedlug"
 * @param {object} rekord 
 * @returns {number}
 */
function liczCeneWedlug(rekord){
    var rodzajLiczeniaCeny = rekord.field("Licz cene wedlug");
    var cenaSkladnika=0;
    switch(rodzajLiczeniaCeny){
        case "Ceny wybranego produktu":
            cenaSkladnika=liczCeneWedlugCenyProduktu(rekord);
            break;
        case "Ceny atrybutu wybranego produktu":
            cenaSkladnika=liczCeneWedlugCenyZAtrybutuProduktu(rekord);
            break;
        case "Ceny z parametrow pozycji":
            cenaSkladnika=uzupelnijCeneSkladnika(rekord);
            break;
        default:
            cenaSkladnika=liczCeneWedlugCenyProduktu(rekord);
    }
    return srd(Number(Math.round(cenaSkladnika+'e2')+'e-2'));
}

/**
 * Uzupelnia srednia cene z parametrow.
 * @param {object} rekord 
 * @returns {number}
 */
function uzupelnijCeneSkladnika(rekord){
   var wartoscPozycji = pobierzWartosciPozycjiZbioruZJson(rekord);
   return wartoscPozycji.sredniaCena;
}
/**
 * Sprawdza czy nadpisac "ilosc skl1" - jezeli tak to nadpisuje 
 * @param {object} rekord 
 */
function sprawdzCzyNadpisacIloscSkl1(rekord){
    var czyNadpisacIloscSkl1=arg("czyNadpisacIloscSkl1")
    if(czyNadpisacIloscSkl1==true){        
        uzupelnijSumeLadunku(rekord);
    } 
}

/**
 * Nadpisuje pole "ilosc skl1" - sumą ladunku z pozycji.
 * @param {object} rekord 
 */
function uzupelnijSumeLadunku(rekord){
    var wartoscPozycji = pobierzWartosciPozycjiZbioruZJson(rekord);
    var sumaLadunku = pobierzSumeLadunkuPozycjiZbioruWgParametrow(wartoscPozycji); 
    rekord.set("ilosc skl1",sumaLadunku);    
 }

/**
 * Pobiera dla konkretnego rekordu z JSON'a sume wartosci i ladunku/srednia cene
 * @param {object} rekord -wiersz w tabeli
 * @returns {object} -srednia cene, sume wartosci i sume ladunku
 */
function pobierzWartosciPozycjiZbioruZJson(rekord){
    var parametryZbiorPoz=pobierzJson(rekord);
    var listaCen = pobierzListeCenZbiorPozycje(parametryZbiorPoz);
    var wartoscPozycji = obliczWartoscPozycjiZbioruWgParametrow(listaCen);
    return wartoscPozycji;
}

/**
 * Zwraca sume wartosci pozycji zbioru wg cen i ilosci z parametrow pozycji
 * @param {object} wartoscPozycji 
 * @returns {number}
 */
function pobierzSumeWartosciPozycjiZbioruWgParametrow(wartoscPozycji){
    return Number(wartoscPozycji.sumaWartosci);
}

/**
 * Zwraca sume ladunku pozycji zbioru
 * @param {object} wartoscPozycji 
 * @returns {number}
 */
function pobierzSumeLadunkuPozycjiZbioruWgParametrow(wartoscPozycji){
    return Number(wartoscPozycji.sumaladunku);
}

/**
 * Zwraca srednia wartosc pozycji wg cen i ilosci z parametrow pozycji
 * @param {object} wartoscPozycji 
 * @returns {number}
 */
function pobierzSredniaCenePozycjiZbioruWgParametrow(wartoscPozycji){
    return Number(wartoscPozycji.sredniaCena);
}

/**
 * dla konkretnego wpisu pobiera z pola JSON_ZbiorPozParametry json i przekształca go na obiekt.
 * @param {object} rekord -wiersz w tabeli
 * @returns parametryZbiorPoz {Object} - przekształcony JSON
 */
function pobierzJson(rekord){
    var parametryZbiorPoz = JSON.parse(rekord.field("JSON_ZbiorPozParametry"));
    return parametryZbiorPoz;
}
/**
 * zwraca obiekt z suma ladunku/wartosci/i srednia cena
 * @param {array} listaCen 
 * @returns {object} 
 */
function obliczWartoscPozycjiZbioruWgParametrow(listaCen){
    var wartoscPozycjiZbioru = new Object(); 
    wartoscPozycjiZbioru.sumaWartosci=0;
    wartoscPozycjiZbioru.sumaladunku=0;
    for(i in listaCen){
        wartoscPozycjiZbioru.sumaWartosci+=Number(listaCen[i].wartosc);
        wartoscPozycjiZbioru.sumaladunku+=Number(listaCen[i].ladunek);
    } 
    wartoscPozycjiZbioru.sredniaCena = Number(wartoscPozycjiZbioru.sumaWartosci/wartoscPozycjiZbioru.sumaladunku);
    return wartoscPozycjiZbioru;
}

/**
 * Pobiera liste cen/ladunku i wartosci z pozycji zbioru dla zbioru.
 * @param {object} parametryZbiorPoz -obiekt z JSON - JSON_ZbiorPozParametry
 * @returns {array} lista obiektow z ceną, ładunkiem i wartością
 */
function pobierzListeCenZbiorPozycje(parametryZbiorPoz){
    var listaCen=[];
    for(j in parametryZbiorPoz.zbiorPozycjeLista){
        var cechy = new Object();
        cechy.ladunek = pobierzLadunekZParametrow(parametryZbiorPoz.zbiorPozycjeLista[j]);
        cechy.cena = pobierzCeneZParametrow(parametryZbiorPoz.zbiorPozycjeLista[j].parametry);
        cechy.wartosc=cechy.ladunek*cechy.cena;
        listaCen.push(cechy);
    }
    return listaCen;
}

/**
 * pobiera cene z posrod parametrow dla jednego elementu z listy parametryZbiorPoz
 * @param {object} parametryDlaZbiorPozycje - element z listy zbiorPozycjeLista
 * @returns {number} -cena
 */
function pobierzCeneZParametrow(parametryDlaZbiorPozycje){
    for(i in parametryDlaZbiorPozycje){
        if(parametryDlaZbiorPozycje[i].nazwaParametru=="Cena"){
            return parametryDlaZbiorPozycje[i].wartosc;
        }
    }
}

/**
 * -pobiera wartosc ladunku z elementru listy parametryZbiorPoz
 * @param {object} parametryDlaZbiorPozycje - element z listy zbiorPozycjeLista
 * @returns {number} -ladunek;
 */
function pobierzLadunekZParametrow(parametryDlaZbiorPozycje){
    return parametryDlaZbiorPozycje.ladunek;
}
