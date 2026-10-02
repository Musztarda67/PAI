alert("okej");
const  a=10, b=20;
let liczba, napis="", liczba2, licznik=0 ;



do {
    liczba=parseInt(prompt("Podaj liczbe z zakresu (" + a + "-" + b + "]"));

} while (isNaN(liczba) || liczba>b || liczba<=a || liczba%2==1 );

liczba2 = liczba;
for(let i=liczba; i<=b; i+=2){
    napis+=i + " ";
    licznik++
}
alert("Podana liczba to: " + liczba + "\n" + napis + "\n lacznie wypisano: " + licznik +" liczb");

