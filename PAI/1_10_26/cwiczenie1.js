const pocz = -100, kon = 100, n = 20;
let napis="";
let a;

for(let i=0; i<n; i++){
    do {
        a =Math.floor(Math.random()*(kon-pocz)+pocz);
   
    } while (a%2);
    napis+=(a + ", ");
}
alert("Moje liczby:\n" + napis);