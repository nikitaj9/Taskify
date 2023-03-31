//Index Signatures

interface TransactionObj {
    [key : string] : number,
    // Pizza : number,
    // Books : number,
    // Job : number
}

const todayTansaction : TransactionObj = {
    'Pizza' : 20,
    'Books' :  10,
    'Job' : 30
}

const test = {
    'Pasta' : 30,
    'Macroni' : 45,
    'Pepper' : 5
}

console.log(todayTansaction.Pizza);
console.log(todayTansaction['Books']);


//Example for index signature without loop

//prop is of type 'string'. However, it is being accessed through a function todayTransaction which of type TransactionObj which contained properties with no key type

//In other words, the error is because we haven't created an index signature and we are trying to access the property dynamically

let prop : string = 'Books';
// console.log(todayTansaction[prop]);

//Example of index signature with loop

let todaysNet = (transactions : TransactionObj) : number  => {
    let total = 0;

    for (let transaction in transactions) {
        total += transactions[transaction]
    }

    return total;
}

todayTansaction.Pizza = 50;

console.log(todaysNet(todayTansaction));

/////////////////////////////////////////////////////////////////////////

interface Student {
    [key : string] : string | number | number [] | undefined //if any of the property type is optional we need to provide an undefined type value to the index signature
    name : string,
    GPA : number,
    classes?: number []
}

const student : Student = {
    name : 'Doug',
    GPA : 8.5,
    classes : [100, 200]
}

console.log(student.test);

for( const key in student) {
    console.log(`${key} : ${student[key]}`);
    
}


let user = {
    name: "John",
    age: 30
};

let testUser = {
    fname : "Nik",
    lname : "Jain",
    age : 25
}

console.log(Object.keys(testUser)); // return array

Object.keys(user).forEach(key => {
    // console.log(user[key]);     //error because we are assigning string  to string | number union type. // Gives error at compile time but it a valid JavaScript code so still able to get the output
})

//Below is the solution to overcome the above problem

type userKeyType = keyof typeof testUser


Object.keys(testUser).forEach(key => {
    console.log(testUser[key as userKeyType]);
})


















