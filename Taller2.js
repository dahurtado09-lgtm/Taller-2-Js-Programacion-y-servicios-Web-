const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofía", age: 20, grade: 95, course: "JavaScript" }
];
// Encuentra todos los estudiantes de JavaScript con nota mayor a 80

const mayorque80 = students.filter(alumnos => alumnos.course === "JavaScript" && alumnos.grade > 80);
console.log(mayorque80)

//Calcula el promedio de notas de todos los estudiantes

const notas = students.reduce((acum, est) => acum + est.grade, 0);
const promedio = notas / students.length;
console.log("El promedio de las notas fue de: ", promedio)