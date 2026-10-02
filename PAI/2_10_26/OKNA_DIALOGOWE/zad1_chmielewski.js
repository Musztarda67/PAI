let liczba, zlych_powtorzen = 0;

alert("okej");
do {
    liczba=parseFloat(prompt("Podaj lczbe nieujemna: "));
    zlych_powtorzen++
    
} while (isNaN(liczba) || liczba<0);

alert("Podana liczba to: " + liczba + "\nBłednych powtorzech bylo: " + (zlych_powtorzen-1));
