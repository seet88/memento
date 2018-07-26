function obliczKosztZabieguObrokiUprawy(rekord){
    var koszt = rekord.field("Pole")[0].field("obszar") * rekord.field("Cena za 1ha");
    return srd(koszt);
}
