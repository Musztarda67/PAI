let imiona = ["Igor", "Mateusz", "Bartosz", " Przemek", "Adam", "Krzysiek" ];
alert("Ilosc imion w tablicy: " + imiona.length);

let wynik = imiona.join("; ");

document.write(wynik + "<br>");

for (const wartosc in imiona) {
    document.write(imiona[wartosc] + "; ");
}
document.write("<br>")
for (const wartosc of imiona) {
    document.write(wartosc + "; ");
    
}
document.write("<br>");
for (let i = 0; i < imiona.length; i++) {
    document.write(imiona[i] + "; ");
    
}


