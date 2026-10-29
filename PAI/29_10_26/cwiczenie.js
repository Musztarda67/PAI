let tablica = [10,15,16,24,5,17,21,18,22,3];

for (const i of tablica) {
    document.write(i + " ");
}


let min = tablica[0];
for (let i = 1; i < tablica.length; i++) {
    if (tablica[i] < min) {
        min = tablica[i]      
    }
    
}

document.write("<br>Najmniejszy element tablicy: " + min);


let max = tablica[0];
for (let i = 1; i < tablica.length; i++) {
    if (tablica[i] > max) {
        max = tablica[i]      
    }
    
}

document.write("<br>Najwiekszy element tablicy: " + max);

