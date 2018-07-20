/**
 * Pobiera link do "Parametry" - a zniego atrybuty i zapisuje w "Atrybuty_JSON"
 * @param {object} rekord 
 */
function pobierzIZapisAtrybutyZParametrow(rekord){
    var linkParametry = rekord.field("Parametry");
    var atrybut = pobierzListeAtrybutow(linkParametry);
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
            obj.wartosc=link[i].attr("Wartosc");  
            obj.wartoscStr=link[i].attr("WartoscStr");  
            obj.uwagi=link[i].attr("Uwagi");           
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
    if(isEmpty(link.attr("Wartosc")) && isEmpty(link.attr("WartoscStr")) && isEmpty(link.attr("Uwagi")) ){
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
function aktualizujAtrybuty(rekord){  
    var atrybuty =JSON.parse(rekord.field("Atrybuty_JSON"));    
    var linkParametry = rekord.field("Parametry");
    aktualizujAtrybutyDlaLinku(linkParametry,atrybuty)
}

/**
 * aktualizuje atrybuty dla wybranego pola
 * @param {array} linki 
 * @param {object} atrybuty 
 */
function aktualizujAtrybutyDlaLinku(linki,atrybuty){
    for(var i in linki){
        if(atrybuty.lista.length>0 && atrybuty.lista.length>=i){
            var atrybutyLinku =atrybuty.lista[i];
            sprawdzWliscieAtrybutow(linki[i],atrybutyLinku)
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
            link.setAttr("Wartosc",atrybutyLinku.wartosc);
            link.setAttr("WartoscStr",atrybutyLinku.wartoscStr);
            link.setAttr("Uwagi",atrybutyLinku.uwagi);
            link.setAttr("Data modyfikacji",new Date(atrybutyLinku.dataModyfikacji));
            message("z aktualizowano atrybuty w linku: "+link.name);
        } else {
            //message("roznica dat: "+ obliczRozniceDat(link.attr("Data modyfikacji"),atrybutyLinku.dataModyfikacji));
        }
    }
}    
