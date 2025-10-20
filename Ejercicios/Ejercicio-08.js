let num1 = 25;
let num2 = 59;

console.log(`Números ingresados: num1 = ${num1}, num2 = ${num2}`);


let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;

let division = (num2 !== 0) ? num1 / num2 : "Error: división por cero";


let modulo = num1 % num2;


console.log(`Suma: ${num1} + ${num2} = ${suma}`);
console.log(`Resta: ${num1} - ${num2} = ${resta}`);
console.log(`Multiplicación: ${num1} × ${num2} = ${multiplicacion}`);
console.log(`División: ${num1} ÷ ${num2} = ${division}`);
console.log(`Módulo: ${num1} % ${num2} = ${modulo}`);


let promedio = (num1 + num2) / 2;
console.log(`Promedio de ambos números: ${promedio}`);


if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
} else {
    console.log("Ambos números son iguales");
}


//En este punto se realiza operaciones aritméticas básicas 
// (suma, resta, multiplicación, división, módulo y promedio)
// con dos números e incluye una comparación para determinar 
// cuál es mayor. De esta forma, se aplica el uso de operadores matemáticos 
// y condicionales en JavaScript para analizar y mostrar resultados numéricos.
