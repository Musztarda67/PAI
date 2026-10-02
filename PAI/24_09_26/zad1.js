//Zadanie 1
//Napisz skrypt, który losuje liczbę całkowitą z danego 
// zakresu wartości, wypisuje ją na ekran oraz wypisuje 
// informację o parzystości tej liczby i jej znaku (dodatnia, ujemna, zero).
//Jeśli będzie to liczba parzysta, to po kilku wolnych 
// liniach wypisze poziomo czytelnie n kolejnych parzystych rosnąco,
//  w prz`eciwnym razie w ten sam sposób wypisze n kolejnych malejąco
//  (w obu przypadkach zaczynamy wypisywanie od liczby wylosowanej).
//Zakres losowania i wartość n zdeklaruj jako stałe. Przetestuj
//  skrypt dla różnych wartości stałych.


let pocz = -100;
let kon = 100;
const n = 10;
let x=Math.floor(Math.random()*(kon-pocz)+pocz);
document.write("Losuje liczbe z zakresu (-100,100): <br>")

document.write("Wylosowana: " + x + "<br>");

if(x%2 == 0){
    document.write("Liczba jest parzysta");
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");

    for(i=0;i<n;i++){
    
        document.write(x + ", ");
        x+=2;
    }
}
        
else{
    document.write("Liczba jest nie parzysta");
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
        document.write("<br>"); 
     for(i=0;i<n;i++){
    
        document.write(x + ", ");
        x-=2;
     }
    }

document.write("<br>");
if(x==0)
    document.write("Liczba jest zerem <br>");
else if(x>0)
    document.write("Liczba jest dodatnia <br>");
else if (x<0)
    document.write("Liczba jest ujemna <br>");






