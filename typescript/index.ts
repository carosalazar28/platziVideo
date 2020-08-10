console.log("hello, typescript")

//boolean
let muted: boolean = true
muted = false

//numeros
let numerador: number = 42
let denominador: number = 6
let resultado: number = numerador / denominador

//string
let nombre: string = "Carolina"
let saludo = `Hola me llamo ${nombre}`

//arrays
let people: string[] = []
people = ["Carolina", "Angie", "Maricela"]

//enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`) 

//any
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}

//functions 
function add(a:number, b:number): number {
    return a + b
}

const sum = add(4, 8)
console.log(sum)

function createAdder(a:number): (number) => number {
    return function (b:number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName:string, lastName?:string): string {
    return `${firstName} ${lastName}`
}

const carolina = fullName("Carolina", "Salazar")
console.log(carolina)

//interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color: Color
}

let rect: Rectangulo = {
    ancho: 6,
    alto: 4,
    color: Color.Azul
}

function area(r: Rectangulo) {
    return r.alto * r.ancho
}

const areaRect = area(rect)

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}


console.log(areaRect)
console.log(rect.toString())