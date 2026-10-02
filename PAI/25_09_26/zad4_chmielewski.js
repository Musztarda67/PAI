//Zadanie 4
//Napisz skrypt, który egzekwuje wylosowanie liczby całkowitej
//  ujemnej i wypisze na ekranie (czytelnie, poziomo) kolejne wartości
//  od wylosowanej zaczynając, rosnąco aż do wypisania zera.
// Skrypt wypisuje też komunikat o sumie i ilości wypisanych liczb.

const pocz = -100, kon = -1;
x=Math.floor(Math.random()*(kon-pocz)+pocz);
let suma = 0, ilosc = 0;

for(let i=x; i<=0; i++){
    document.write(i + ", ");
    suma+=i;
    ilosc++;
}
document.write("<br>" + "Lacznie wypisano: " + ilosc + " liczb");
document.write("<br>" + "Lacznie suma liczb to: " + suma);