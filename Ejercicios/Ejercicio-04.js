let producto = {
  nombre: "accesorios",
  precio: 100000,
  stock: 5
};

function precioConDescuento(producto, descuento) {
  return producto.precio - (producto.precio * descuento / 100);
}

function disponible(producto) {
  if (producto.stock > 0) {
    return "Disponible";
  } else {
    return "Agotado";
  }
}

function mostrarInfo(producto) {
  console.log("Nombre:", producto.nombre);
  console.log("Precio:", producto.precio);
  console.log("Stock:", producto.stock);
  console.log("Estado:", disponible(producto));
}

mostrarInfo(producto);
console.log("Precio con 20% de descuento:", precioConDescuento(producto, 20));


//objeto para representar un producto y usa funciones para 
// calcular su precio con descuento, verificar 
// su disponibilidad y mostrar su información. De esta forma, 
// se organiza el código y se facilita el manejo de los datos del producto.