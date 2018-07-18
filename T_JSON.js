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
            obj.dataModyfikacji=link[i].attr("Data modyfikacji"); 
            atrybuty.lista.push(obj); 
        }  
    }
    return atrybuty;
}

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

function aktualizujAtrybuty(rekord){    
    var atrybuty =JSON.parse(rekord.field("Atrybuty_JSON"));    
    var linkSkladnika = rekord.field("Nazwa skladnika 1");
    aktualizujAtrybutyDlaLinku(linkSkladnika,atrybuty)
}

function aktualizujAtrybutyDlaLinku(linki,atrybuty){
    for(var i in linki){
        if(atrybuty.lista.length>0 && atrybuty.lista.length>=i){
            var atrybutyLinku =atrybuty.lista[i];
            sprawdzWliscieAtrybutow(linki[i],atrybutyLinku)
        }
    }
}

function sprawdzWliscieAtrybutow(link,atrybutyLinku){
    if(atrybutyLinku.nazwalinku==link.name){
        if(obliczRozniceDat(link.attr("Data modyfikacji"),atrybutyLinku.dataModyfikacji)<0){
            link.setAttr("cena",atrybutyLinku.cena);
            link.setAttr("Data modyfikacji",new Date(atrybutyLinku.dataModyfikacji));
            message("z aktualizowano atrybuty w linku: "+link.name);     
        } else {
            //message("roznica dat: "+ obliczRozniceDat(link.attr("Data modyfikacji"),atrybutyLinku.dataModyfikacji));
        }
    }
}    
