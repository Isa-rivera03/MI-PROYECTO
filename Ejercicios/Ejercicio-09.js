const ventas = [
    { producto: "Camisa", categoria: "Ropa", cantidad: 10, precio: 25 },
    { producto: "Pantalón", categoria: "Ropa", cantidad: 7, precio: 40 },
    { producto: "Zapatos", categoria: "Calzado", cantidad: 5, precio: 60 },
];


const totalesPorCategoria = ventas.reduce((acumulador, venta) => {
    const totalVenta = venta.cantidad * venta.precio;
    if (!acumulador[venta.categoria]) {
        acumulador[venta.categoria] = totalVenta;
    } else {
        acumulador[venta.categoria] += totalVenta;
    }
    return acumulador;
}, {});

console.log("Totales por categoría:");
console.table(totalesPorCategoria);


const productoMasVendido = ventas.reduce((max, venta) => {
    return venta.cantidad > max.cantidad ? venta : max;
});

console.log("Producto más vendido:");
console.log(`${productoMasVendido.producto} (${productoMasVendido.cantidad} unidades)`);


//utilizamos el método `reduce()` para calcular el total de ventas por categoría y
// determinar el producto más vendido. De esta forma, se aprovechan las funciones 
// de los arreglos en JavaScript para procesar y analizar los datos de manera eficiente y clara.
