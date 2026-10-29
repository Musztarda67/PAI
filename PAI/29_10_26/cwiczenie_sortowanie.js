// cwiczenie sortowanie


let liczby = [101,151,116,241,5111,17123,21231,18321,22,3],
 napisy = ["jelesnia",'potok','kal','umbro','kwasnica','adam'];


liczby.sort();
//   tablica.sort tylko dla napisow!
napisy.sort();

for (const element of liczby) {
    document.write(element + " ") // nie dziala
    
}
document.write("<br>");
for (const element of napisy) {
    document.write(element + " ")
    
}

// sortowanie liczb a-b rosnaco , b-a malejaco
/*
function porownanie(a, b){
    return a-b;
}

liczby.sort(porownanie);

document.write("<Br>")
for (const element of liczby) {
    document.write(element + " ")
    
} 
*/
// inny sposob zapisu
/*
liczby.sort(function porownanie(a, b){
    return a-b;
});
*/
// 3 typ zapisu
liczby.sort((a,b) => a - b);
document.write("<Br>")
for (const element of liczby) {
    document.write(element + " ")
}
