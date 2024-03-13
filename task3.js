// Store a person name in a variable ,and then print that person name in a 
//lowercase ,uppercase ,and titlecase .
var person_name = "Nimra Asif";
//this shows lower case 
console.log(person_name.toLowerCase());
//this shows upper case
console.log(person_name.toUpperCase());
//this shows title case 
console.log(person_name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
