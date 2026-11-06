let liczby = [8,11,15,14,17];
// find pokazuje tylko 1 spelniajaca warunek jezeli nic to znaleziona = undefined
let znaleziona = liczby.find(function(element){
    return element > 10;

});

document.write(`Znaleziony element: ${znaleziona}`);
// some zwraca TRUE/FALSE sprawdza czy jakikolwiek element tablicy spelnia warunek 
// zwroci false 1: 
let czyIstnieje1 = liczby.some(function(element){
    return element > 50;
});

// zwroci true 2: 
let czyIstnieje2 = liczby.some(function(element){
    return element > 3;
});

document.write(`<br>1 some: ${czyIstnieje1} <br>2 some: ${czyIstnieje2}`);

// every pokazuje true, jezeli WSZYSTKIE elementy spelniaja warunek, w przeciwnym razie false

//zwroci true
let czyWszystkie1 = liczby.every(function(element){
    return element > 1;
});

// zwroci false
let czyWszystkie2 = liczby.every(function(element){
    return element%2 == 0;
});

document.write(`<br>1 every : ${czyWszystkie1} <br>2 every: ${czyWszystkie2}`);


//reduce

// reduce zbiera wartosci do akumulatora i zwraca jedna, koncowa wartosc (np. sume)
// 0 na koncu to wartosc poczatkowa, od ktorej startuje nasz akumulator
let suma = liczby.reduce(function(accumulator, element){
    return accumulator + element;
}, 0); // to zero to wartos tej sumy na poczatku

document.write(`<br> reduce suma calej tablicy: ${suma}`); // Wypisze: 65 (8 + 11 + 15 + 14 + 17)