function zmienNaZrobione(){
  var e=entry();
  var status = e.field("Status")
  if(status=="To do"){
    e.set("Status","Zrobione");
    e.set("Data oprysku",Date.now());
    var notka = e.field("Notatki");
     var czas = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    notka += " #DataZrobienia: "+ czas;
    e.set("Notatki",notka);
  message("Zmieniono status na zrobione i z aktualizowano date: "+czas)
  }
  e.recalc();
}
