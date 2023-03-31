"use strict";
//convert to more or less specific
let a = "World!";
let b = a;
console.log(a);
console.log(b);
b = 5633;
console.log(b);
let c = a;
console.log(c);
//Another syntax to less or more specific types to a variable
let d = 'Good day!';
console.log(d);
let e = 550;
console.log(e);
const logMsg = (message) => {
    console.log(message);
};
const addOrConCat = (a, b, c) => {
    if (c === 'add')
        return a + b; //number is returned
    return "" + a + b; //string is returned
};
// logMsg(addOrConCat(2,4,'concat'))
let myVal = addOrConCat(2, 6, 'add'); //although the type of the variable is string and typescript assumes it to return a string as mentioned by the 'as' statement, the addorconcat function returns a number according to the argument passed and hence the type of the variable becomes a number for runtime.
let myNextVal = addOrConCat(2, 8, 'add');
console.log(typeof (myVal), myVal);
console.log(typeof (myNextVal), myNextVal);
//Double casting or Forced casting
10;
//Assertions for DOM
const img = document.querySelector('img'); //more specific
//OR
// const img = document.querySelector('img') as HTMLImageElement
const newImg = document.getElementById('#img'); //less specific
// '!' for exiting the null type
img.src;
// newImg.src       //error
//newImg var does not exist for src type since not every html element can contain src. Therefore, if we are sure that the elements contains a src then we need to explicitly declare the type of html element as below.
const anotherImg = document.getElementById('#img');
anotherImg.src;
