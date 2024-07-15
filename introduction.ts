// TS is a subset/Extension of JS., Therefor valid JS is valid TS... More about ADDING strictness than taking anything away. 

// Defining variables:

let nonExplicit = 'hello'
let nonExplicitNum = 2
let nonExplicitBool = false

let explicit: string;
explicit = 'hello world'
const explicit2:number = 9
let explicit3:boolean;
explicit3 = true

// -----------------------------

// Functions: (param:valueType):returnType(){}
const function1 = (name:string,animal:string,age:number):string=>{
    return `This is ${name} and hes a ${age} year old ${animal}`;
}
console.log(function1('Peter','Tiger',12))

// ------------------------------


// 'Any' definition - SHOULD BE USED MINIMALLY/When necessary. Defeats the whole purpose of TS (strict type decleration)

// const concatenateValues = (a,b) => {return a+b}

// concatenateValues('hello','world') // returns hello world
// concatenateValues(5,10) // returns 15
// concatenateValues(5,'tigers') // returns 5'tigers'

// The above isnt optimal as it can return unexpected returns. Imagine this function was linked to a user credit card number input
//  and they accidentally input a letter. The function would run as we havent told the function what to type of value to expec.

// const concatenateValues2 = (a:number,b:number)=>{return a+b}
// concatenateValues2(1,2) //returns 3
// concatenateValues2('hello again','world') //returns an error which is what we want, it hasnt complied with the 
// // specified value type of number

// --------------------------

// Objects and types
interface userInterface{id:number,name:string,age:number}

const User: userInterface {
    id:2,
    name:'Peter',
    age:33
}

// The interface sets the strict/value types for the object
