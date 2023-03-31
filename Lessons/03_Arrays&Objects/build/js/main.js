"use strict";
//Implicitly inferred datatypes by TS
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1954, true];
//Syntax to Explicityly define a type of an Array
// let testArr: (String | number)[] = []
stringArr[0] = "One";
// stringArr.push(4)        //TS will give error as it expects an element of type String only
stringArr.push("four");
console.log(stringArr);
guitars[0] = 5695; //Ts will allow this element value to be changed as it expects an element with a type or a number
// guitars.unshift(true) //TS will give error as it expects only a String or a number
guitars.unshift("someString"); //adding one more property to the array at the first position
// stringArr = guitars //Error since guitars Arr contain both String and number but StringArr can only be assigned Strings.Therefore the below can be valid
guitars = stringArr;
console.log(guitars);
let test = []; //any type of data is accepted in this array
let bands = []; //explicitly defined an array of type String
bands.push("Acoustic");
console.log(bands);
//In Ts Order of the types of element in an array does not matter to TypeScript. However if we want to be more strict and define something that is locked in to a type a specific position and to a specific length of an array, we will need to create a Tuple as below. 
//Tuple
let myTuple = ['Nikita', 32, false];
let mixed = ['Sandy', 23, true];
mixed = myTuple; //Allowed because mixed is an array of same order type as myTuple
// myTuple = mixed  // This is not accpetable to TS because mixed array may have fewer or more elements later as it is not fixed to have a certain length of elements as of now.
// myTuple[2] = 52; // Only a boolean value will be accepted at the 3rd position
//Objects
let myObj; //Explicitly defining the type of myObject. 
//All of the below assigned values are accepted since Arrays are considered as objects in TS
/*myObj = []
myObj = {}
myObj = guitars*/
myObj = mixedData;
console.log(myObj);
const exampleObj = {
    prop1: 'Name',
    prop2: true
};
// exampleObj.prop1 = 56;   //prop can only be assigned a String value
exampleObj.prop1 = 'John';
let cwh = {
    name: "Harry",
    active: true,
    experience: [2005, 2023, '10+']
};
let codeVolution = {
    name: "Vishwas",
    active: true,
    experience: [1998, 2023, '20+']
};
const greetPrgmmers = (programmers) => {
    if (programmers.name) {
        return `Hello ${programmers.name.toUpperCase()}!`;
    }
    else {
        return `Hello Guest!`;
    }
    // return  `Hello ${programmers.name?.toUpperCase}`
};
console.log(greetPrgmmers(cwh));
//Enums
//Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
