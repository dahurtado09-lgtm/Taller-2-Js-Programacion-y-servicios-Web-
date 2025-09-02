//EJERCICIO 3: VALIDACIÓN DE DATOS (Paradigma Procedural)
//Implementa funciones para validar diferentes tipos de datos:

// Validar correo (solo revisa que tenga @ y .)
function validar_Correo(correo) {
  return correo.includes("@") && correo.includes(".");
}

// Validar contraseña (minimo 6 caracteres)
function validar_Contraseña(contraseña) {
  return contraseña.length >= 6;  //length para tomar la longitud
}

// Validar edad (mayor o igual a 18)
function validar_Edad(edad) {
  return edad >= 18;
}

// Validar producto (tenga nombre, precio mayor a 0 y stock mayor o igual a 0)
function validar_Producto(producto) {
  return (
    producto.nombre && 
    producto.precio > 0 && 
    producto.stock >= 0
  );
}

// ----------------- PRUEBAS -----------------
console.log("Correo valido:", validar_Correo("usuario@correo.com")); // true
console.log("Correo inválido:", validar_Correo("usuariocorreo.com")); // false

console.log("Contraseña valida:", validar_Contraseña("123456")); // true
console.log("Contraseña inválida:", validar_Contraseña("123")); // false

console.log("Edad valida:", validar_Edad(20)); // true
console.log("Edad no invalida:", validar_Edad(15)); // false

const producto_Ejemplo = { nombre: "Laptop", precio: 2500, stock: 10 };
console.log("Producto valido:", validar_Producto(producto_Ejemplo)); // true

const producto_Invalido = { nombre: "", precio: -50, stock: -2 };
console.log("Producto invalido:", validar_Producto(producto_Invalido)); // false
