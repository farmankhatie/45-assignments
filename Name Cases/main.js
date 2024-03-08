"use strict";
//assignment # 3
// storing a name in a variable
let Name = "Farman";
// printing the name in lowercase
console.log("Lowercase:", Name.toLowerCase());
//printing the name in uppercase
console.log("Uppercase:", Name.toUpperCase());
//printing the name in titlecase
console.log("Titlecase:", Name.replace(/\bw/g, c => c.toUpperCase()));
