//Napisz skrypt, który losuje n wartości zero
//  lub jeden, wszystkie wylosowane wartości 
// wypisuje poziomo czytelnie na ekran. Po zakończeniu
//  losowania wypisuje komunikat o ilości wylosowanych
//  jedynek


const n = 15; 
let x, licznik = 0;
for(let i=n; i>0; i--){ 
    x = Math.floor(Math.random() * 2); 
    document.write(x + ", ");
    if(x == 1){
        licznik++;
    }
}
document.write("<br>" + "Liczbe 1 wylosowano: " + licznik + " razy");