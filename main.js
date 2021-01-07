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
/*console.log("Numero1 =", num1)
console.log(`Número2 = ${num2}`)
console.log(`fecha hoy= ${fecha}`)
console.log(hoy)*/

//areglos, json y objetos
let numeros= [1, 2, 3, 4, 5];
let colores= ["red", "green", "blue"];

//En json la clave va entre comillas
//Json es univeral para todos los lenguajes
const json ={
    "nombres": ["Yadi", "Chiki"],
    "genero": "Femenino"
};

//Este objeto 'teacher', su sintaxis solo es para JS
const teacher ={
    nombre: 'daniel',
    genero: 'Masculino',
    juegos: ['Futbol', 'Basquet'],
    conocimientos: {
        lenguajes: [ 'Js', 'Python', 'Java', 'Php',],
        materias: { Nivel1: 'Logica', Nivel2: 'POO', Nivel3: 'POOI'}
    }
};
json.genero= "F"
teacher.nombre="Daniel"
teacher.edad = 50
/* console.log('Json',json,json.genero);
console.log('Objeto', teacher.conocimientos.lenguajes[1], teacher.conocimientos.materias.Nivel1); */

//ESTRUCTURAS DE CONTROL 
//if
let n1 = 5
let n2 = 5
if (num1 === undefined)
    console.log(`${num1}=undefined`);
if (num2 === null)
    console.log(`${num2}=null`);
if (n1 == 0){
    console.log(n1);
} else if (n1 === n2){
    console.log(`${n1}=${n2}`);
} else {
    console.log(`${n1}!=${n2}`);
}
