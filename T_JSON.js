/**
 * Pobiera link do "Nazwa skladnika 1" - a zniego atrybuty i zapisuje w "Atrybuty_JSON"
 * @param {object} rekord 
 */
function pobierzIZapisAtrybutyZSkladnika(rekord){
    var linkSkladnika = rekord.field("Nazwa skladnika 1");
    var atrybut = pobierzListeAtrybutow(linkSkladnika);
    zapisJSONzAtrybutami(rekord,atrybut);
}

/**
 * pobiera i dodaje do listy atrybutu z podlinkowanych rekordow
 * @param {object} link -link do rekordu
 * @returns {object} atrybut
 */
function pobierzListeAtrybutow(link){
    var atrybuty =new Object();
    atrybuty.lista=[];
    for(var i in link){
        if(sprawdzAtrybutySkladnika(link[i])){
            var obj = new Object();
            obj.nazwalinku=link[i].name;
            obj.cena=link[i].attr("cena");            
            obj.dataModyfikacji= new Date(link[i].attr("Data modyfikacji")).toString();
            atrybuty.lista.push(obj); 
        }  
    }
    return atrybuty;
}
/**
 * dodaje 2 godziny do daty modyfikacji atrybutu
 * @param {string|date} data 
 * @returns {date}
 */
function korektaDatyModyfikacji(data){
    var dataModyfikacji = new Date(data)
    var dataZkorygowana = dataModyfikacji.setHours(dataModyfikacji.getHours()+2);
    return dataZkorygowana;
}

/**
 * Spradza czy atrybuty do linku sa uzupelnione, jezeli uzuplenione i data modyfikacji nie uzupelniona to uzupelnia
 * @param {object} link 
 * @returns {boolean}
 */
function sprawdzAtrybutySkladnika(link){
    if(isEmpty(link.attr("cena"))){
        return false;
    } else if(isEmpty(link.attr("Data modyfikacji"))){
        link.setAttr("Data modyfikacji",new Date())
        return true;       
    } else {
        return true;
    }
}

/**
 * Tworzy JSON'a z obiektu atrybuty i zapisuje go do pola Atrybuty_JSON
 * @param {object} rekord 
 * @param {object} atrybuty - lista atrybutow
 */
function zapisJSONzAtrybutami(rekord,atrybuty){
    var json_string = JSON.stringify(atrybuty);
    rekord.set("Atrybuty_JSON",json_string);
}

/**
 * oblicza roznice w datach
 * @param {string} dataRozpoczecia 
 * @param {string} dataZakonczenia 
 * @returns {number}
 */
function obliczRozniceDat(dataRozpoczecia,dataZakonczenia){
    var startData = new Date(dataRozpoczecia);
    var stopDate = new Date(dataZakonczenia);
    //dodac sprawdzenia dat
    var roznicaDat = Math.floor((startData - stopDate));
    return roznicaDat;
}

/**
 * Aktualizuje atrybuty dla określonych pól
 * @param {object} rekord 
 */
function aktualizujAtrybuty(rekord, tryb){  
    var atrybuty =JSON.parse(rekord.field("Atrybuty_JSON"));    
    var linkSkladnika = rekord.field("Nazwa skladnika 1");
    aktualizujAtrybutyDlaLinku(linkSkladnika,atrybuty, tryb)
}

/**
 * w trybie 1 aktualizuje atrybuty dla wybranego pola, w trybie 2 aktualizuje date modyfikacji jezeli wykryl zmiane
 * @param {array} linki 
 * @param {object} atrybuty 
 */
function aktualizujAtrybutyDlaLinku(linki,atrybuty, tryb){
    for(var i in linki){
        if(atrybuty.lista.length>0 && atrybuty.lista.length>=i){
            var atrybutyLinku =atrybuty.lista[i];
            if(tryb==1)
                sprawdzWliscieAtrybutow(linki[i],atrybutyLinku)
            else
                if(sprawdzCzyZmienionoAtrybuty(linki[i],atrybutyLinku)){
                    linki[i].setAttr("Data modyfikacji",new Date()); 
                }
        }
    }
}

/**
 * Sprawdza czy modyfikować atrybuty linku, jezeli tak to aktualizuje, wpisujac date modyfikacji z json'a
 * @param {object} link 
 * @param {object} atrybutyLinku 
 */
function sprawdzWliscieAtrybutow(link,atrybutyLinku){    
    if(atrybutyLinku.nazwalinku==link.name){
        if(obliczRozniceDat(new Date(link.attr("Data modyfikacji")).toString(),atrybutyLinku.dataModyfikacji)<0){
            link.setAttr("cena",atrybutyLinku.cena);
            link.setAttr("Data modyfikacji",new Date(atrybutyLinku.dataModyfikacji));
            message("z aktualizowano atrybuty w linku: "+link.name);     
        } else {
            //message("roznica dat: "+ obliczRozniceDat(link.attr("Data modyfikacji"),atrybutyLinku.dataModyfikacji));
        }
    }
}    

/**
 * sprawdza czy jakis atrybut zostal zmieniony
 * @param {object|link} link 
 * @param {object} atrybutyLinku
 * @returns {boolean} 
 */
function sprawdzCzyZmienionoAtrybuty(link,atrybutyLinku){
    if(atrybutyLinku.nazwalinku==link.name){
        if(link.attr("Wartosc")!=atrybutyLinku.wartosc)
            return true
        if(link.attr("WartoscStr")!=atrybutyLinku.wartoscStr)
            return true  
        if(link.attr("Uwagi")!=atrybutyLinku.uwagi)
            return true                              
    }
    return false
}
