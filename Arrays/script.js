//nombrar variables
let animales = ["perro", "gato", "conejo", "pez", "aguila"];

//acceder a todos los elementos
console.log(animales);

//acceder a un elemento en especifico
console.log(animales[2]);
console.log(animales[3]);

//Longitud del arreglo (número de elementos de la lista)
console.log(animales.length);

//marcar de qué tipo es un elemento (imagen, función, número, texto, etc)
console.log(typeof animales);

// Cambiar perro por elefante (nuevo arreglo)

animales [0] = "elefante";
console.log(animales);

//agregar un nuevo animal, toma todos los eleementos y agrega el nuevo al final

animales.push("ratón")
console.log(animales);

//eliminar un animal de la lista (último elemento)

animales.pop()
console.log(animales);

// agregar elemento al inicio del arreglo 

animales.unshift("León")
console.log(animales);

// buscar el indice de elemento

//craar una nueva variable que contenga el indice del gato
let indiceDelGato = animales.indexOf("gato")
console.log(animales[indiceDelGato]);

//otra forma de crear el índice 
console.log (animales[animales.indexOf("gato")]);

//Determinar si un elemento esta en el arreglo 

console.log(animales.includes("tortuga")); //false

animales.push("tortuga"); //agregar tortuga al arreglo

console.log(animales.includes("tortuga")); //true

console.log(animales);