let liczby = [67,233,3,67,5,-633,67,18,177,1351,1355,-531681,67127157],
nowa = [];
const a = -10, b = 10, n = 13
let liczba;

for (let i = 0; i < n; i++) {
    liczba = Math.floor(Math.random() * (b-a) + a);
    nowa.push(liczba);
}

document.write(nowa);

//
document.write("<br>");
for (const key in liczby) {
   document.write(liczby[key] + " ");
    
    
}
document.write("<br>");

for (const element of liczby) {
    document.write(element + " ");
    
}
document.write("<br>");

for (let i = 0; i < liczby.length; i++) {
    document.write(liczby[i] + " ");
    
}

//
let indeksy = "";
for (const key in liczby) {
    if (liczby[key] > 0 && liczby[key]%2 == 1) {
        indeksy+=key + " ";
    }

    
}
alert(indeksy);
// 
let k = 67, podstawiono = 0;

for (const key in liczby) {
    if( liczby[key] == k){
        liczby.splice(key,1,0)
        // liczby[key] = 0;
        podstawiono++
    }
    
    
}

alert(podstawiono + "   " + liczby);
    

let suma = 0;
for (const element of liczby) {
        
    if (element%2 == 0) {
        suma+=element
        
    }
}

alert("Suma liczb parzystych w tablicy liczby: " + suma);




let losowa1, x= -2, y= 10, tab2 = [];


do {
    losowa1 = Math.floor(Math.random() * (y-x+ 1) + x);
    tab2.push(losowa1);
} while (losowa1 !== y);

alert("Dlugosc tablicy tab2: " + tab2.length);


let tab =[12,34,2];
let wynik = tab.pop();
document.write("<br>"+tab+";"+8*wynik);