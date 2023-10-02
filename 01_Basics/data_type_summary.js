//Primitive(Call By Value)
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol,BigInt

let string = "Qasiar"
let number1 =123
let number2 = 123.34
let boolean = true
let Null = null
let qaisar; //default value is undefined

let Id = Symbol('1234') // The value of both of them is same but both 
let newId = Symbol('1234') //. of them are different to each other 
                          //The data type of return value is Symbol
console.log(Id === newId)//for cross verifying is both are same or not
console.log(Id,newId);


// Non-Primitive(Refrence ,Call By Address)
// Arrays, Objects, Functions

const myArr = ["qasiar",1234,"Meer"]

const myObj = {
    name: "Qaisar",
    DOB:"04/05/2003"
}

//we store a function in a variable 
const myFunction = function qaisar(){
    console.log("Hello world");
}
