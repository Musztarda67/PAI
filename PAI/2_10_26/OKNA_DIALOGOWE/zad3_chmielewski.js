alert("okej");

const  a=10, b=20;
let liczba;


do {
    liczba=parseInt(prompt("Podaj liczbe z zakresu [" + a + "-" + b + "]"));
} while (isNaN(liczba) || liczba<a || liczba>b);

if(liczba%2){
    alert("Podana przez ciebie liczba to: " + liczba + "\nLiczba jest nieparzysta")
}else{
    alert("Podana przez ciebie liczba to: " + liczba + "\nLiczba jest parzysta")
}

