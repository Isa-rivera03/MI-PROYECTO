class Libro {
    constructor(id, titulo, autor, categoria, disponible = true) {
        if (!titulo || !autor) throw new Error("El libro debe tener título y autor.");
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.disponible = disponible;
    }
}

class Usuario {
    constructor(id, nombre) {
        if (!nombre) throw new Error("El usuario debe tener un nombre.");
        this.id = id;
        this.nombre = nombre;
    }
}

class Prestamo {
    constructor(usuario, libro, fechaPrestamo = new Date()) {
        if (!libro.disponible) throw new Error(`El libro "${libro.titulo}" no está disponible.`);
        this.usuario = usuario;
        this.libro = libro;
        this.fechaPrestamo = fechaPrestamo;
        libro.disponible = false; 
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
        this.usuarios = [];
        this.prestamos = [];
    }


    agregarLibro(libro) {
        this.libros.push(libro);
    }

    
    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    
    buscarPorTitulo(titulo) {
        return this.libros.filter(libro =>
            libro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    buscarPorAutor(autor) {
        return this.libros.filter(libro =>
            libro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    buscarPorCategoria(categoria) {
        return this.libros.filter(libro =>
            libro.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }


    prestarLibro(idUsuario, idLibro) {
        try {
            const usuario = this.usuarios.find(u => u.id === idUsuario);
            const libro = this.libros.find(l => l.id === idLibro);
            if (!usuario) throw new Error("Usuario no encontrado.");
            if (!libro) throw new Error("Libro no encontrado.");

            const prestamo = new Prestamo(usuario, libro);
            this.prestamos.push(prestamo);
            console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
        } catch (error) {
            console.error("Error al prestar libro:", error.message);
        }
    }

    
    generarReporte() {
        console.log("\n===REPORTE DE BIBLIOTECA ===");

        
        const disponibles = this.libros.filter(l => l.disponible).length;
        console.log(`Libros disponibles: ${disponibles}`);

        
        const prestados = this.libros.length - disponibles;
        console.log(`Libros prestados: ${prestados}`);

        
        const categorias = this.libros.reduce((acc, libro) => {
            acc[libro.categoria] = (acc[libro.categoria] || 0) + 1;
            return acc;
        }, {});
        console.log("Cantidad de libros por categoría:", categorias);

        
        const usuariosConPrestamos = this.prestamos.map(p => p.usuario.nombre);
        console.log("Usuarios con préstamos:", usuariosConPrestamos.join(", ") || "Ninguno");
    }
}

const biblioteca = new Biblioteca();


biblioteca.agregarLibro(new Libro(1, "Cien años de soledad", "Gabriel García Márquez", "Novela"));
biblioteca.agregarLibro(new Libro(2, "El Principito", "Antoine de Saint-Exupéry", "Infantil"));
biblioteca.agregarLibro(new Libro(3, "Don Quijote de la Mancha", "Miguel de Cervantes", "Clásico"));
biblioteca.agregarLibro(new Libro(4, "1984", "George Orwell", "Distopía"));

biblioteca.registrarUsuario(new Usuario(1, "Ana Torres"));
biblioteca.registrarUsuario(new Usuario(2, "Luis Gómez"));

console.log("Búsqueda por autor 'Gabriel':", biblioteca.buscarPorAutor("Gabriel"));
console.log("Búsqueda por categoría 'Clásico':", biblioteca.buscarPorCategoria("Clásico"));

biblioteca.prestarLibro(1, 1); 
biblioteca.prestarLibro(2, 4); 
biblioteca.prestarLibro(2, 1); 

biblioteca.generarReporte();


//programación orientada a objetos para simular un sistema 
// de biblioteca. Se crean clases para representar libros, usuarios y 
// préstamos, con validaciones y control de disponibilidad. Además, se 
// incluyen métodos para buscar libros, registrar usuarios, gestionar préstamos
// y generar reportes, lo que permite organizar y administrar la información
// de manera estructurada y eficiente.
