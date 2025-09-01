const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofía", age: 20, grade: 95, course: "JavaScript" }
];
// Encuentra todos los estudiantes de JavaScript con nota mayor a 80

const mayor_que_80 = students.filter(alumnos => alumnos.course === "JavaScript" && alumnos.grade > 80);
console.log(mayor_que_80)

//Calcula el promedio de notas de todos los estudiantes

const notas = students.reduce((acum, est) => acum + est.grade, 0);
const promedio = notas / students.length;
console.log("El promedio de las notas fue de: ", promedio)

//Obtén un array con solo los nombres de estudiantes mayores de 20 años

const mayores_que_20 = students.filter(nombres => nombres.age > 20);
console.log("\nLista de mayores de edad: ", mayores_que_20)

//Encuentra el estudiante con la nota más alta

const nota_mayor = students.reduce((mejor_nota, est) => est.grade > mejor_nota.grade ? est : mejor_nota );
console.log("\nEl estudiante con la nota mas alta es:\n", nota_mayor);

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

const p1 = new Productos(1, "Laptop", 3000, "Tecnología", 5);
const p2 = new Productos(2, "Celular", 1500, "Tecnología", 10);

console.log(p1.obtener_informacion());
// ID: 1 | Laptop - $3000 | Categoría: Tecnología | Stock: 5

p1.actualizar_stock(3);
// El nuevo stock de Laptop es: 8

p2.calcular_descuento(10);
// Precio con 10% de descuento: $1350

const total = Productos.getTotalValue([p1, p2]);
console.log("Valor total del inventario: $" + total);
