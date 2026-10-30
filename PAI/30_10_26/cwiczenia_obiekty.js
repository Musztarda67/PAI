// obiekty 
const uczen = {
    imie: "Adam",
    nazwisko: "Wachowski",
    wiek: 18,
    klasa: "4ti",
    9: "Jego numer na koszulce"
};

for (const key in uczen) {
    document.write("<br>" + key + ': ' + uczen[key])
};

// for of nie dziala obiekt jest nie iterowalny
/* for (const element of uczen) {
    document.write("<br>" + element)
    
}
*/

// tak tez dobrze
document.write("<br>");
const nauczyciel = {imie: "Helena", nazwisko: "Chmielewska", wiek: 67, uczy_klase: "67tr", 13: "pozostale dni urlopu w tym roku"};

for (const key in nauczyciel) {
    document.write("<br>" + key + ': ' + nauczyciel[key])
};