function obliczKosztZabieguObrokiUprawy(rekord){
    var obszar = 0;  
    var koszt = 0;        
    if(isEmpty(rekord.field("Obszar rzeczywisty")))
        obszar =rekord.field("Pole")[0].field("obszar");
    else 
        obszar = rekord.field("Obszar rzeczywisty");
    
    if(isEmpty(rekord.field("Cena za 1ha")))
        koszt = obszar * rekord.field("Cena za 1 godz");
    else
        koszt = obszar * rekord.field("Cena za 1ha");
    koszt = Math.round(koszt);
    return srd(koszt);
}
