const Estudiantes = [
    { nombre: "Ana", edad: 40, calificacion: 85 },
    { nombre: "Carlos", edad: 35, calificacion: 88 },
    { nombre: "Sofía", edad: 28, calificacion: 95 }
];

const promedioCalificaciones = Estudiantes.reduce((suma, estudiante) => suma + estudiante.calificacion, 0) / Estudiantes.length;
console.log(`El promedio de calificaciones es: ${promedioCalificaciones}`); 

const estudiantesAprobados = Estudiantes.filter(estudiante => estudiante.calificacion >= 70);
console.log("Estudiantes aprobados:");
estudiantesAprobados.forEach(estudiante => console.log(estudiante.nombre));

const nombresEstudiantes = Estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:");
console.log(nombresEstudiantes);


//utilizamos métodos de arreglos (`reduce`, `filter` y `map`) para calcular 
//el promedio de calificaciones, obtener los estudiantes aprobados y listar
//sus nombres. De esta forma, se aprovechan las funciones integradas de
//JavaScript para procesar y analizar la información de manera clara y eficiente.
