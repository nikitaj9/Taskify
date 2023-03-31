//Type Aliases
type stringOrNumber = (string | number);

type stringOrNumberArray = stringOrNumber[]

type Programmers = {
    name: string,
    active:boolean,
    experience: stringOrNumberArray,
}


let cwh = {
    name: 'Harry',
    active: true,
    experience: [52, 'sjfi', 55]
}
cwh.experience.unshift(63)
console.log(cwh.experience);

//Literal types
let userName: 'Joey' | 'Ross' | 'Chandler'
userName = "Ross"
console.log(userName);

//functions

//function that returns a number
const add = (a:number ,b:number) : number => {
    return a + b
}

//function that does not return anything
const logMsg = (message : any) : void => {
    console.log(message);
}

logMsg('Hello World!')
logMsg(add(4 , 6));

let subtract = ( c: number, d : number ) : number => {
    return c - d
}

// console.log(subtract(6,3));
logMsg(subtract(6,3))

//we will be defining a type that will be a function with parameters of type numbers  that will have a return type of a number. 

// type mathFunction = ( a: number, b: number ) => number;
interface mathFunction { ( a: number, b: number ) : number }
// This is a definition of a mathFunction type
//we can use this type to create another mathfunction of this type

let multiplyFunc : mathFunction = function (c , d) {
    return c * d
}

logMsg(multiplyFunc(2,6))

//optional paramter
const addAll = (a: number, b: number, c?: number ) => {
    if(typeof c !== 'undefined')
        return a + b + c
    return a + b
}

//default parameter
const sumAll = (a: number, b: number, c: number = 3) => {
    return a + b + c
}

logMsg(addAll(5,6,4))   //15
logMsg(sumAll(4,6))     //13
logMsg(sumAll(4,5,4))   //13        //reassigned value of c through function call

//Rest parameter
const total = (a: number, ...nums: number[]) : number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10,20,30))


const createError = (errMsg: string) : never => {
    throw new Error(errMsg);
}

// const infinite = () => {
//         let i : number = 1;
//         while(true) {
//             i++
//             if(i > 10) break;           
//         }
// }


//custom type guard
const isNumber = (value : any) : boolean => {
    return typeof(value) === 'number' ? true : false
}

//use of the never type
const numOrStrFunc = (value: stringOrNumber) : string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'

    return createError('Something unusual happended')
}

logMsg(numOrStrFunc(56))