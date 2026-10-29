const pocz = -50, kon = 50;

let n = 15, losowe1 = [], losowa;


for (let i = 0; i < n; i++) {
    losowa = Math.floor(Math.random()*(kon-pocz)+pocz);
    losowe1.push(losowa);
}


document.write(losowe1);

let ilosc_parz = 0, nieparzyste = [];

for (const element of losowe1) {
    if (element%2 == 0) {
        ilosc_parz++;
    }else{
        nieparzyste.push(element);
    }
    
}
let suma = 0, ujemne = [];
for (const element of losowe1) {
    if (element < 0) {
        suma+=element;
        ujemne.push(element);
        
    }
    
    
}

document.write("<br>Ilość parzystych liczb w tabeli: " + ilosc_parz + 
    "<br>Tablica liczb składająca się z nieparzystych z losowe1: " + nieparzyste);

document.write("<br>Tablica licz skladajaca sie z ujemnych z losowe1: " + ujemne +
    "<br>Suma liczb ujemnych" + suma);