alert("okej");
const  a=10, b=20;
let liczba, napis="" ;



do {
    liczba=parseInt(prompt("Podaj liczbe z zakresu [" + a + "-" + b + ")"));

} while (isNaN(liczba) || liczba<a || liczba>=b );

for(let i=a; i<=liczba; i++){
    napis+=i + " ";
}
alert("Podana liczba to: " + liczba + "\n" + napis);