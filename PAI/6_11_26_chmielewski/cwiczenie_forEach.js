let liczby = [10,20,'Wachowski',40,50];


// funkcja zawsze jest w warunku forEach
liczby.forEach(function(liczba) {
    document.write(`<br> ${liczba}`);
});


// 1 wypisuje zawartosc indeksu a 2 numer indeksu
liczby.forEach(function(liczba, indeks) {
    document.write(`<br> ${indeks}  ${liczba}`);
});


let suma=0;

let liczby1 = [10,20,31,41,50]
liczby1.forEach(function(liczba) {
    document.write(`<br> ${liczba}`);
    suma+=liczba
});

document.write(`<br>Suma wypisanych liczb to: ${suma}`);
// sumowanie liczb parzystych
let suma1 = 0;
liczby1.forEach(function(liczba) {
    if (liczba%2 == 0) {
        suma1+=liczba;
    }

});
document.write(`<br>Suma wypisanych liczb parzystych to: ${suma1}`);

// liczenie ile razy w tablicy wystapila liczb aparzysta
let parzysta = 0;
liczby1.forEach(function(liczba){
    if(liczba%2 == 0)
        parzysta++;

});

document.write(`<br>Liczba wystapien liczby parzystej: ${parzysta}`);


// powiekszanie tablicy o k razy (kazdego elementu)
    let k = 5;
liczby1.forEach(function(liczba,indeks,tablica){
    tablica[indeks] = liczba*k;
});
document.write(`<br>tablica po powiekszeniu o ${k} razy: ${liczby1}`);


// podmienianie na -1 liczb wiekszych od k
let liczby2 = [ 1,2,3,4,5,6,7,8];

    liczby2.forEach(function(liczba,indeks,tabela){
        if(liczba>k){
            tabela[indeks] = -1;
        }

    });

document.write(`<br>tablica liczby2 po zmianei kazdego elementu wiekszego od ${k} na -1: ${liczby2.join("; ")}`);