//Classes
//A very redundant way to define classes. 

/*
class Coder {
    name : string
    music : string
    age : number
    lang : string

    constructor(
        name: string, 
        music: string, 
        age: number, 
        lang: string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang 
    }
}
*/

//A better approach to avoid the above method of defining classes

//Visibility Modifiers | Data modifiers | Access modifiers 

class Coder {

    // with the help of access modifiers we do not need to explicity define the types of the variables inside class

    constructor(
        public readonly name: string, 
        public music: string,
        private age:number, 
        protected lang: string = 'TypeScript' //Making the argument optional while calling the class 
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang
    }
    
    //public members: can be called within and outside the class
    //private members : can only be calling within the class
    //protected members : can be within the class and also within the subclass/derived class

    //creating a public method within the class
    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

//creating an instance of the class and invoking its constructor
const Nik = new Coder("Niki", "Lofi", 25)

//Calling the public method using the class' instance
console.log(Nik.getAge());

// Typescript will give compile time error for the below statement. however, the results can be visible in the browser since they are valid jaascript and thats what browser wants
// console.log(Nik.age);    
// console.log(Nik.lang);

class WebDev extends Coder {
    constructor(
        public computer : string,
        name : string,
        music : string,
        age : number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I am writing ${this.lang} on my ${this.computer} laptop`
    }
}

const nikki = new WebDev("HP OMEN", "Niki", "TypeScript", 25)
console.log(nikki.getLang());

//Not valid typescript but valid JavaScript
// console.log(nikki.age);
// console.log(nikki.lang);

//////////////////////////////////////////////////////////

//Applying an interface to a class
interface Musician {
    name : string,
    instrument : string,
    play( action : string) : string
}

class Guitarist implements Musician {

    name : string
    instrument : string

    constructor(
        name : string,
        instrument : string
    ) {
        this.name = name
        this.instrument = instrument
    }

    play ( action : string ) : string {
        return `${this.name} ${action} the ${this.instrument}`
    }

}

const Page = new Guitarist("Sarah", "Drums")
console.log(Page.play("strums"));

////////////////////////////////////////////////////////////////

class Peeps {
    static count : number = 0

    static getCount() : number  {
        return Peeps.count
    }


    public id : number


    constructor(public name : string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const john = new Peeps("John")
const steve = new Peeps("Steve")
const sandy = new Peeps("Sandy")

console.log(Peeps.count);
console.log(sandy.id);      //3 
console.log(john.id);       //1
console.log(steve.id);      //2


////////////////////////////////////////////////////////////////////////////////
//Get and Set 
class Bands {
    private dataState : string[]

    constructor() {
        this.dataState = []
    }

    public get data() : string[] {
        return this.dataState
    }

    public set data(value : string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
        }
        else throw new Error("Parameter is not an array of type String")
    }
}

const myBands = new Bands()

myBands.data = ["Rachael", "Monica", "Phoebe"]
// console.log(myBands.data);
myBands.data = [...myBands.data, 'Regina Phelange']
console.log(myBands.data);
myBands.data = ['csdcjnjvj']
console.log(myBands.data);






