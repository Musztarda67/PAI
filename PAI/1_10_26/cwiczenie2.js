const pocz = -100, kon = 100, n = 20;
let napis="";
let a;

for(let i=0; i<n; i++){
    do {
        a =Math.floor(Math.random()*(kon-pocz)+pocz);
        alert(a);
    } while (confirm());
        a =Math.floor(Math.random()*(kon-pocz)+pocz);
        alert(a);
}
alert("Moje liczby:\n" + napis);