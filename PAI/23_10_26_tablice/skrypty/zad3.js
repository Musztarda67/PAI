const pocz = -100, kon = 30;

let n, powtorz, losowe2 = [];
do {
    losowe2 = [];
    do {
    n = Math.floor(Math.random()*(kon-pocz)+pocz);
} while (n < 1);

let losowa_parz;
for (let i = 0; i < n; i++) {
    do {
        losowa_parz = Math.floor(Math.random()*(kon-pocz)+pocz);
    } while (losowa_parz%2 !== 0)
    losowe2.push(losowa_parz);
    
}
alert(losowe2.join(";  "))
document.write("Wylosowana liczba: " + n + "<br>Tablica zawierajaca " 
    + n + " liczb parz z zakresu [-100,30]: " + losowe2 );
    powotorz = confirm("Czy chcesz powotrzyc?")
} while (!powtorz);
