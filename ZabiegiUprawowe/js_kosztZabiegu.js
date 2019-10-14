function obliczKosztZabieguObrokiUprawy(rekord){
    var obszar = 0;
    if(isEmpty(rekord.field("Obszar rzeczywisty")))
        obszar =rekord.field("Pole")[0].field("obszar");
    else 
        obszar = rekord.field("Obszar rzeczywisty");
    
    var koszt = obszar * rekord.field("Cena za 1ha");
    koszt = Math.round(koszt);
    return srd(koszt);
}
