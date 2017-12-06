var Event= prompt("Input event","dancing lessons")

var FirstName= "John"; 
var LastName= "Lennon";
var Place= "London";
var CurrentTime= "12-30";

console.log(FirstName +" "+ LastName +" has a "+ Event +" today at "+ CurrentTime +" somewhere in "+ Place +".");





var EUR= prompt("How many euros you want to exchange?");
while (EUR < '0' || EUR > '9') {
    alert("fill the empty fields with numbers");
    EUR= prompt("How many euros you want to exchange?");
  }
var USD= prompt("How many dollars u want to exchange?");
while (USD < '0' || USD > '9') {
    alert("fill the empty fields with numbers");
    USD= prompt("How many dollars u want to exchange?");
  }

EUR_to_grn= 32.18;
USD_to_grn= 27.16;

grn_euro= EUR*EUR_to_grn;
grn_dollar= USD*USD_to_grn;
euro_to_dollar= EUR_to_grn/USD_to_grn;

alert(EUR +" euro(s) equals "+ grn_euro +" grns , "+ USD +" dollar(s) equals "+grn_dollar+" grns, one euro equals "+ euro_to_dollar + " dollars " );