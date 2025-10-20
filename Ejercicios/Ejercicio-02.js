function calcularArea(figura, ...parametros) {
  let area = 0;
  figura = figura.toLowerCase();

  if (figura === "rectangulo") {
    const [base, altura] = parametros;
    area = base * altura;
  } else if (figura === "circulo") {
    const [radio] = parametros;
    area = Math.PI * (radio ** 2);
  } else if (figura === "triangulo") {
    const [base, altura] = parametros;
    area = (base * altura) / 2;
  } else {
    return "Figura no reconocida. Usa: rectangulo, circulo o triangulo.";
  }

  return `El área del ${figura} es: ${area.toFixed(2)}`;
}


console.log(calcularArea("rectangulo",8, 4)); 
console.log(calcularArea("circulo", 5));       
console.log(calcularArea("triangulo", 10, 3));  
console.log(calcularArea("cuadrado", 6));      


//función con parámetros variables para calcular 
// el área de diferentes figuras (rectángulo, 
// círculo y triángulo). Mediante una estructura 
// condicional if...else, se identifica la figura 
// y se aplica la fórmula correspondiente. Esto 
// permite tener un único código flexible y 
// reutilizable para calcular áreas según el 
// tipo de figura.
     

