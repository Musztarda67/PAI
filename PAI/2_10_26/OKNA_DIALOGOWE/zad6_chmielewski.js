const  a=10, b=20;
let liczba, licznik=0;
alert("okej");
do{
liczba=parseInt(prompt("Podaj liczbe z zakresu (" + a + "-" + b + ")"));
licznik++
} while (isNaN(liczba) || liczba>=b || liczba<=a );

alert("Podana liczba to: " + liczba + "\n Podano: " + (licznik-1) +" zlych liczb");


