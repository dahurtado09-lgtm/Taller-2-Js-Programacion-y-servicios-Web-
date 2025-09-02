const productos = [
  { id: 1, nombre: "Laptop", precio: 999, categoria: "Electrónica", marca: "HP" },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónica", marca: "Logitech" },
  { id: 3, nombre: "Escritorio", precio: 200, categoria: "Muebles", marca: "IKEA" },
  { id: 4, nombre: "Silla", precio: 150, categoria: "Muebles", marca: "IKEA" },
  { id: 5, nombre: "Teclado", precio: 80, categoria: "Electrónica", marca: "Corsair" }
];

// 1. Filtrar productos por rango de precio
function filtrar_Por_Precio(min, max) {
  return productos.filter(p => p.precio >= min && p.precio <= max);
}

// 2. Agrupar productos por categoría
function agrupar_Por_Categoria() {
  return productos.reduce((grupos, producto) => {
    if (!grupos[producto.categoria]) {
      grupos[producto.categoria] = [];
    }
    grupos[producto.categoria].push(producto);
    return grupos;
  }, {});
}

// 3. Buscar productos de una marca específica
function buscar_Por_Marca(marca) {
  return productos.filter(p => p.marca.toLowerCase() === marca.toLowerCase());
}

// 4. Calcular estadísticas por categoría (promedio, total, cantidad)
function estadisticas_Por_Categoria() {
  const agrupados = agrupar_Por_Categoria();

  const resultado = {};
  for (let categoria in agrupados) {
    const items = agrupados[categoria];
    const total = items.reduce((suma, p) => suma + p.precio, 0);
    const promedio = total / items.length;
    resultado[categoria] = {
      cantidad: items.length,
      total: total,
      promedio: promedio.toFixed(2)
    };
  }
  return resultado;
}

// ------------------ PRUEBAS ------------------
console.log("Filtrar por precio (50 a 200):", filtrar_Por_Precio(50, 200));
console.log("Agrupados por categoría:", agrupar_Por_Categoria());
console.log("Buscar marca IKEA:", buscar_Por_Marca("IKEA"));
console.log("Estadísticas por categoría:", estadisticas_Por_Categoria());
