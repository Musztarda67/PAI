// chmielewski
const pocz = -100, kon = 100, k = 8, n = 20; 
let licznik = 0;
let x;

do{
   x=Math.floor(Math.random()*(kon-pocz)+pocz);
   document.write(x + ", ");
   licznik++;
}while (x % k !== 0);


for(let i=licznik;i>0;i--){
   document.write("<br>");
   for(let i=n;i>0;i--){
   document.write("*");
}
}
    