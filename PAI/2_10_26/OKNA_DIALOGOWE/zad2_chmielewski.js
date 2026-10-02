alert("okej");
let liczba, napis = "";

do {
    liczba=parseInt(prompt("Podaj liczbe dodatnia parzysta: "));
        if(isNaN(liczba) || liczba<=0 || liczba%2!=0){
            napis+=liczba + ", ";
        }
}while (isNaN(liczba) || liczba<0 || liczba%2!=0);
napis+=liczba;
alert("Podana liczba to: " + liczba + "\nWszystkie Podane liczby: " + napis);

