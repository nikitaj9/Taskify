"use strict";
let cwh = {
    name: 'Harry',
    active: true,
    experience: [52, 'sjfi', 55]
};
cwh.experience.unshift(63);
console.log(cwh.experience);
//Literal types
let userName;
userName = "Ross";
console.log(userName);
//functions
//function that returns a number
const add = (a, b) => {
    return a + b;
};
//function that does not return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World!');
logMsg(add(4, 6));
let subtract = (c, d) => {
    return c - d;
};
// console.log(subtract(6,3));
logMsg(subtract(6, 3));
// This is a definition of a mathFunction type
//we can use this type to create another mathfunction of this type
let multiplyFunc = function (c, d) {
    return c * d;
};
logMsg(multiplyFunc(2, 6));
//optional paramter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
//default parameter
const sumAll = (a, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(5, 6, 4)); //15
logMsg(sumAll(4, 6)); //13
logMsg(sumAll(4, 5, 4)); //13        //reassigned value of c through function call
//Rest parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 20, 30));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// const infinite = () => {
//         let i : number = 1;
//         while(true) {
//             i++
//             if(i > 10) break;           
//         }
// }
//custom type guard
const isNumber = (value) => {
    return typeof (value) === 'number' ? true : false;
};
//use of the never type
const numOrStrFunc = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('Something unusual happended');
};
logMsg(numOrStrFunc(56));
