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
// + - * / % operaciones matemáticas
// < > == === >= <= != operadores relacionales
// && || ! operadores lógicos 
let n1 = 5
let n2 = 5
if (num1 === undefined)
    //console.log(`${num1}=undefined`);
if (num2 === null)
    //console.log(`${num2}=null`);
if (n1 == 0){
    //console.log(n1);
} else if (n1 === n2){
    //console.log(`${n1}=${n2}`);
} else {
    //console.log(`${n1}!=${n2}`);
}

//Otro tipo de condición (Es un poco mas estructurado 'SWITCH')
let num = 5
let rec = num % 2;
switch (rec) {
    case 0:
        //console.log(`${rec} - ${num} Es Par`);
        break;
    case 1:
        //console.log(`${rec} - ${num} Es Negativo`);
        break;
    
        default:
            if (isNaN(rec)) //isNaN: función que permite saber si el valor dado en parentesis dio como resultado un valor no válido
                console.log(`${rec}=Error`);
            break;
}
//console.log("Salí del switch")

//bucles incremento ++
//while
let i = 0
//console.log("bucle while", colores)
while(i < colores.length && colores[i] != "blue"){
   // console.log(i, colores[i])
    i = i + 1
}

//bucle for usado más para incrementos o decrementos automáticos
//console.log("recorrido for in", colores)
for(let i = 0; i < colores.length; i++) {
    //console.log(i, colores[i]);
}

//in
//console.log("Recorrido for in", colores)
for (let j in colores){
    //console.log(j, colores[j])
}
// of 
//console.log("recorrido for of", colores)
for (let color of colores){
    //console.log(color)
}
//trabajar en cadenas
let nombre="Sol"
for (let caracter of nombre){
    //console.log(caracter)
}
//Trabajar con un arreglo de objetos
const Personas = [
    {"nombre": "pepe", "apellidos": "perez", "edad": "34"},
    {"nombre": "ana", "apellidos": "gomez"},
    {"nombre":"Daniel", "apellidos": "Vera"}
]
//console.log("of");
for(let persona of Personas){
    //console.log(persona, persona.nombre, persona.apellidos, persona.edad)
}
//RECORRIDOS DE OBJETOS ITERABLES

//forEach
//se puede usar de esta manera agregando un if en la funcion
//console.log("Foreach");
Personas.forEach(persona => {
    if (persona.nombre != "ana")
        console.log(persona.nombre)
})
//o de esta manera
//console.log("Foreach");
//Personas.forEach(persona => console.log(persona.nombre))

//map: sirve para leer un objeto y extraer algo de ese objeto.
const persons = Personas.map(person => person.nombre)
//console.log("Map", persons);

//filter: devuelve de un objeto parte de ese objeto según la condición dada
//Para usar filter siempre va a pedir una condición
const person = Personas.filter(person => person.nombre != "ana")
//console.log("Filter", person);

//find: devuelve solo el objeto que condiciones
const onePerson = Personas.find(person => person.nombre === "ana")
console.log("Find", onePerson);


//PRACTICA  31/12/2020
//FUNCIONES
function sumar() {
    console.log(5 + 2);
}
sumar()
const suma = () => console.log(5+1);
suma()
function multiplicar (n1, n2){
    return n1 * n2
}
let resp = multiplicar(5, 2)
console.log("Sin arrow", resp);
const multi = (n1, n2) => n1 * n2
console.log(multi(5,2));

function dividir(n1, n2 = 4){
    let resp= 0
    try{
        resp = n1/n2
    } catch(e){
        console.log("Ha cometido un error; ", e.message);
    }
    return resp
}
resp =dividir (8,8)
console.log("Sin Arrow", resp);
resp=dividir(8,0)
console.log(resp);
const divi = (n1, n2 = 4) => {
    let resp = 0
    try{
        resp= n1/n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
console.log(divi(8));