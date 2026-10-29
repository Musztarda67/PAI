let tab1 = [1,2,3,"jeden","piec","toaleta","grochowa", "licznik", "kalamarnica"];
let cos, cos2, cos3;
cos = tab1.indexOf("piec");
document.write("miejsce " + tab1[4] + " w tablicy: " + cos + "<br>");

cos2 = tab1.indexOf("brunet");

document.write(cos2 + "<br>");

cos3 = tab1.length;

document.write("dlugosc tab1: " + cos3);

let tab5 = new Array(10);
document.write("<br>Dlugosc tab5: " + tab5.length + "<br>");

let tab6 = new Array(1,2,3,4,5);

for (let i = 0; i < tab1.length; i++) {
    document.write(tab1[i] + " ");  
}
document.write("<br>");
for (const wartosc of tab1) {
    document.write(wartosc + " ") ;
}
document.write("<br>");
for (const wartosc in tab1) {
    document.write(tab1[wartosc] + " ");
}

// dodaje na koncu tablicy
tab1.push(1);
document.write("<br>" + tab1);
// usuwa z konca tablicy
tab1.pop();
document.write("<br>" + tab1);
// usuwa z poczatku
tab1.shift();
document.write("<br>" + tab1);
// dodaje na poczatku
tab1.unshift("robocizna");
document.write("<br>" + tab1);
// (index,ile_usuwa,co_wstawia_za)
tab1.splice(2,0,"samochod");
document.write("<br>" + tab1);

let wynik;

wynik = tab1.splice(2,2);
alert(wynik);

alert(tab1.join(",,,"));

alert(tab1);

