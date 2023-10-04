// Things about STRINGS 

let firstName = "Qaisar"
let lastName = " Moin"
let repoCount = 50

// console.log("MY name is "+firstName+lastName);

//It is the old way ,we don't use this method 

//the new way of writting string is down below 

// console.log(`Hello My name is ${firstName} and my repo count is ${repoCount}`);             //this is mast way to write a string 

// ----------------------------------------------=----------------------------------------------->

//By this method many more options were get open for a string 
const myName = new String('Qaisar moin')//It will treat a string as a object,But it will remain a string //Example's Down below
//for more information copy nad print above line into web-browser console and print there.


// console.log(myName[0])//my name ke 0th key print kardo 

// console.log(myName.length);//print length of string 

let str1 = 1234
// console.log(str1.toString()); //toString() -> convert anything to String

// console.log(myName.toUpperCase());//convert all letters into upper case

// console.log(myName.toLowerCase());//convert all letters into lower case

// console.log(myName.charAt(3));//character at 3rd index.Counting starts from 0

// console.log(myName.indexOf('m'));//it will tell the index value of 'm'

// -------------------------------------------------------------------->

const newString = new String("                    What areee doing are you                               ")


const subStr = newString.substring(0,4)//(0,4) is equivalent to [0,4) it will 
// console.log(subStr);//print character from 0 to 3 and it will not take negative value

const anotherString = newString.slice(8,-4)//like substring take negative number
// console.log(anotherString)                 // also

// console.log(newString)
// console.log(newString.trim());//It will remove all the space from rigth and left of the string .
                              //It will not remove the space's between the string like this  ("helloo             world")


let url = "qaisar monin is qaisar moin "
let url2 = url.replace('qaisar','meer')//qaisar ke jagha meer daal do 
// console.log(url2);

// console.log(url.includes('meer'));//it will tell Meer is written in the string or not 

//Now we want to convert the String into Array based on the condition like "jaha par '-' ye ho waha par break karo do "
const newStr = "Qaisar1 Moin Ashrafi" 
// console.log(newStr.split('1'));
// console.log(newStr.split(' '));
// console.log(newStr.split('M')); // case sensitive hai M mtlb M only not m