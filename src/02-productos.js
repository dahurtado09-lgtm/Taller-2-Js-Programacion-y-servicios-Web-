//Ejercicio 2
//CALCULADORA DE PRODUCTOS (Paradigma Orientado a Objetos)
class Productos {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  // Método para actualizar el stock
  actualizar_stock(cantidad) {
    this.stock += cantidad;
    console.log(`\nEl nuevo stock de ${this.nombre} es: ${this.stock}`);
  }

  // Método para calcular descuento
  calcular_descuento(porcentaje) {
    const descuento = (this.precio * porcentaje) / 100;
    const precio_nuevo = this.precio - descuento;
    console.log(`Precio con ${porcentaje}% de descuento: $${precio_nuevo}`);
    return precio_nuevo;
  }

  // Método para obtener la info del producto
  obtener_informacion() {
    return `ID: ${this.id} | ${this.nombre} - $${this.precio} | Categoría: ${this.categoria} | Stock: ${this.stock}`;
  }

  // Método estático (aplica a todos los productos)
  static getTotalValue(products) {
    return products.reduce((total, prod) => total + (prod.precio * prod.stock), 0);
  }
}

const precio_1 = new Productos(1, "Laptop", 3000, "Tecnología", 5);
const precio_2 = new Productos(2, "Celular", 1500, "Tecnología", 10);

console.log(p1.obtener_informacion());
// ID: 1 | Laptop - $3000 | Categoría: Tecnología | Stock: 5

precio_1.actualizar_stock(3);
// El nuevo stock de Laptop es: 8

precio_2.calcular_descuento(10);
// Precio con 10% de descuento: $1350

const total = Productos.getTotalValue([precio_1, precio_2]);
console.log("Valor total del inventario: $" + total);
