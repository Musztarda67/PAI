let bok1 , bok2 , bok3;
alert("okej");
   do {
            bok1 = parseFloat(prompt("podaj pierwsyz bok trojkata"));
            bok2 = parseFloat(prompt("podaj drugi bok trojkata"));
            bok3 = parseFloat(prompt("podaj trzeci bok trojkata"));
            if((isNaN(bok1,bok2,bok3) || bok1+bok2<bok3 || bok2+bok3<bok1 || bok1+bok3<bok2 || bok1<=0 || bok2<=0 || bok3<=0)){
                alert("Zle dlugosci bokow");
            }
} while (isNaN(bok1,bok2,bok3) || bok1+bok2<bok3 || bok2+bok3<bok1 || bok1+bok3<bok2 || bok1<=0 || bok2<=0 || bok3<=0)
   


let obwod=(bok1+bok2+bok3);
let p=obwod/2;
let pole= Math.sqrt(p * (p-bok1)*(p-bok2)*(p-bok3));


alert("Dlugosci bokow:" + bok1 + ", " + bok2 + ", " + bok3 + "\n" + "Pole: " + pole + "\nObwod: " + obwod);