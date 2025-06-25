// const useremail = "sparsh@gmail.com"
// const useremail = ""
// const useremail = {}
// const useremail = ("")
// const useremail = []

let useremail
if (useremail) {

    console.log("useremail found");
}
else{
    console.log("useremail not found");
}

/*falsy value :
false , 0 , -0, bigInt 0n, "", null, undefined,NaN
except all these are truthy value

truthy value:
"0",'false', " " , [] array, {} object , function(){} , 
*/

val1 = 5??10
val1 = 5??null
val1 = useremail??null
val1= undefined??null



console.log(val1)

// ternairy operator
// condition ? true_statement: false_statement
icecreamPrice = 100
icecreamPrice<=80 ? console.log("price is greater than 80"):console.log("price is less than 80")
