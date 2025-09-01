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