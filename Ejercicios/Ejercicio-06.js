let numero = 9; 
console.log("Tabla de multiplicar del " + numero);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

let limite = 15;
console.log(`Números primos hasta ${limite}:`);

for (let num = 2; num <= limite; num++) {
    let esPrimo = true;

   for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(num);
    }
}


//usamos ciclos `for` para generar la tabla de multiplicar de un número 
// y para mostrar los números primos hasta un límite dado. Se aplican 
// operaciones matemáticas y condiciones lógicas para determinar si un 
// número es primo, demostrando el uso básico y correcto de bucles y 
// estructuras de control en JavaScript.
