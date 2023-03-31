
let myName = 'Dave'             //TypeScript implicitly inferring datattype of 'myName' var as a String
let meaningOfLife: number;      //explicitly telling typescript about the type of the data
let isLoading: boolean;         //explicitly
let album: any;                 //explicitly

//assignment
myName = 'John'             //Reassigned value (Updated)
meaningOfLife = 42
isLoading = true
album = 5150
console.log(myName);
console.log(meaningOfLife);
console.log(isLoading);
console.log(album);


const sum = (a: number, b: string) => {
    return console.log(a+b);
    
}

sum(4 , 'some')

let postId: string | number     //postId can be assigned any value if its a number or a string
let isActive: number | boolean  // isActive can be assigned any value if its a number or a boolean
let re = /\w+/g //hovering over to the variable 're' we get to know TS has inferred the datatype of the variable to be as a RegExp. Therefore using this inference of TS, we can explicity define the datatype of the variable 're' as below
//let re:RegExp = /\w+/g
