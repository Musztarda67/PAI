let tablica = [1,2,3,4,5,6,7,8]


// map tworzy nowa tablica dzieki funkcji nie zmienia pierwotniej tablicy,
//  PAMIETAJ O RETURN
map_tablica = tablica.map(function(element) {
    return element * 5;
    });

document.write(`<br>tablica: ${tablica.join(" ")}`);
document.write(`<br>map_tablica: ${map_tablica.join(" ")}`);

// sprawdza czy element dzieli sie przez 2 jestli tak to parz else nieparzysta,
//  tworzy tablice czyparz_tablica
czyparz_tablica = tablica.map(function(element){
    if (element%2 == 0) {
        return element+=": parzysta";
    }
    return element+=": nieparzysta";
});

document.write(`<br>czyparz_tablica:  ${czyparz_tablica.join(", ")}`);
/* FOR OF TEZ MOZNA: 
for (const element of czyparz_tablica) {
    document.write(`<br>${element}`);
    
}
*/ 

// TERAZ METODA filter zwraca elementry dla ktorych funkcja zwroci true

filter_tablica = tablica.filter(function(element){
     if (element> 3) {
        return element;
    }
});
document.write(`<br>filter_tablica: ${filter_tablica}`);
document.write(`<br>filter_tablica ma dlugosc: ${filter_tablica.length}`);