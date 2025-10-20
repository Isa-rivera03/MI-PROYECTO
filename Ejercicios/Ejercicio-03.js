let numeros = [10, 4, 23, 16, 9, 2, 31];

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let promedio = numeros.reduce((a, b) => a + b) / numeros.length;
let pares = numeros.filter(n => n % 2 === 0);
let ordenado = numeros.sort((a, b) => a - b);

console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Promedio:", promedio);
console.log("Pares:", pares);
console.log("Ordenado:", ordenado);


//utilizamos métodos de arreglos y 
// funciones matemáticas de JavaScript para
// analizar un conjunto de números. Se obtienen 
// el valor mayor, menor, promedio, los números
// pares y el arreglo ordenado, demostrando el 
// uso eficiente de funciones integradas 
// como Math.max, Math.min, reduce, filter y sort.
