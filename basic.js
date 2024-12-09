//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Binevenida al bootcamp de FemCoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let name = "Mar";
let luckyNumber = 7;
let isWinter = false;
let students = { name: "Mar", age: 27, city: "Barcelona" };
let coders = ["Carol", "Miriam", "Mariuxi"];
let coso = null;
let coso2 = undefined;

console.log(name);
console.log(luckyNumber);
console.log(isWinter);
console.log(students);
console.log(coders);
console.log(coso);
console.log(coso2);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

//Escribe tu código aquí
const postres = ["helado", "tarta", "pastel"];

console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = { nombre: "Sol", edad: 64 };

console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí

console.log(typeof name)
console.log(typeof luckyNumber);
console.log(typeof isWinter);
console.log(typeof students);
console.log(typeof coders);
console.log(typeof coso);
console.log(typeof coso2);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let sum = 1 + 3;

console.log(sum);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let rest = 10 - 5;

console.log(rest);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let multipli = 7 * 7;

console.log(multipli);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let divide = 100 / 2;

console.log(divide);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let var1 = 1;
let var2 = 2;

let comparison1 = var1 == var2;

console.log(comparison1)


// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparison2 =   var1 != var2;

console.log(comparison2);



//Ejercicio 12: completa el ejercicio

let num1 = 15;
let num2 = 20;

let comparision = num1 < num2; 

console.log(comparision); 

//Realiza la operación de comparación que consideres para que el resultado en consola sea true

//Ejercicio 13: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = num3 === num3AsString;

console.log(result); 

//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad

//Ejercicio 14: completa el ejercicio

let result2 = num3 == num3AsString

console.log(result2); 


//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.

//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

const myName = "Marta";
const myLastName = "Ibarra"
const fullName = myName + " " +  myLastName;

console.log(fullName)


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res = (a < 10) && (b > 1); //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = (a == 5) && (b == 5); //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = a == 6 == b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)  
