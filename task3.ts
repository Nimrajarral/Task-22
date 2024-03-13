// Store a person name in a variable ,and then print that person name in a 
//lowercase ,uppercase ,and titlecase .

let person_name:string ="Nimra Asif";
//this shows lower case 
console.log(person_name.toLowerCase());
//this shows upper case
console.log(person_name.toUpperCase());
//this shows title case 
console.log(person_name.replace(/\bw/g, c=>c.toUpperCase()));
