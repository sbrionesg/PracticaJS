/* Sintaxis del lenguaje
 variables y tipos de datos */
console.log("Funcionando...")
var numero=10
let num1; //undefined
let num2=null //nulo
let entero = 10
let decimal = 1.2
let string = "Hello world"
let booleano = false
let fecha = new Date()
let dd = fecha. getDate(),
    mm = fecha.getMonth() +1, 
    aa = fecha.getFullYear(), 
    hoy = `${aa}-${mm}-${dd}`
const pi =3.1416 //constante
console.log("Numero1 =", num1)
console.log(`Número2 = ${num2}`)
console.log(`fecha hoy= ${fecha}`)
console.log(hoy)
//areglos, json y objetos
let numeros= [1, 2, 3, 4, 5];
let colores= ["red", "green", "blue"];

const json ={
    "nombres": ["Yadi", "Chiki"],
    "genero": "Femenino"
};

const teacher ={
    nombre: 'daniel',
    genero: 'Masculino',
    juegos: ['Futbol', 'Basquet'],
    conocimientos: {
        lenguajes: [ 'Js', 'Python', 'Java', 'Php',],
        materias: { Nivel1: 'Logica', Nivel2: 'POO', Nivel3: 'POOI'}
    }
};
teacher.nombre="Daniel"
teacher.edad = 50