let puntuacion = 67; 

if (puntuacion < 0 || puntuacion > 100) {
  console.log("Error: la puntuación debe estar entre 0 y 100");
} else {
  let letra;

  if (puntuacion >= 90) {
    letra = "A";
  } else if (puntuacion >= 80) {
    letra = "B";
  } else if (puntuacion >= 70) {
    letra = "C";
  } else if (puntuacion >= 60) {
    letra = "D";
  } else {
    letra = "F";
  }

  console.log("Puntuación:", puntuacion);
  console.log("Calificación:", letra);

  if (letra === "A" || letra === "B" || letra === "C") {
    console.log("Estado: Aprobado ");
  } else {
    console.log("Estado: Reprobado ");
  }
}


//evaluamos una puntuación numérica y la convierte en una 
// calificación con letra según rangos establecidos. Además, verifica
// si la puntuación es válida y determina si el estudiante aprueba o
// reprueba, usando estructuras condicionales para una evaluación clara y organizada.

