
// *************************  conversion operation in JS ****************************

let score = "33"
// console.log("The data type of score is : " , typeof(score)) //it tells the data type of variable 
let score_to_variable = Number(score)
// console.log("The data type of score_to_variable is : ",typeof(score_to_variable))

/*  

Number() it will convert all the things into number Just ANYTHING 

"33" => 33
"33abc" => NaN (not a number) but it has type of number 
True => 1
False => 1
null => 0
undefine => NaN

*/

// now we test for Boolean    Boolean are True or false 

let isLoggedIn = 1  //It is an integer
let isLoggedInFalse = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
let booleanIsLoggedInFalse = Boolean(isLoggedInFalse)
// console.log(booleanIsLoggedInFalse)

/* 
Boolean covert anything into True and Flase 

1 => True
0 => False
"" => False
"Qaisar" => True
null => False
undefined => False
*/

// ********************************** Operation ********************************

let value = 23
let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2) //division
// console.log(4%2) // remainder of 2
// console.log(2**3)  // 2 to the power 3

//Addition of String

let str1 = "Qaisar"
let str2 = " Moin"
// console.log(str1+str2) // output => Qaisar Moin

//Problem starts here 

// console.log("1"+2) //output => 12 
// console.log(1+"2")//output => 12 
// console.log("1"+2+2)//output => 122 
// console.log(1+2+"2")//output => 32

let gameCounter = 100
// console.log(++gameCounter) //pre increment(phle increase karo phir print karo )
// console.log(gameCounter++) //post increment(phle print karo phir increase karo)











