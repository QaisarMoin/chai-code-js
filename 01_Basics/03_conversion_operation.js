
// conversion operation in JS 

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
console.log(booleanIsLoggedInFalse)

/* 
Boolean covert anything into True and Flase 

1 => True
0 => False
"" => False
"Qaisar" => True
null => False
undefined => False
*/
