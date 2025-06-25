function callMe(){
    console.log("sparsh");
    
}
// callMe()



function addTwoNumbers(number1, number2){
    let result = (number1+number2)
    return result
}
// addTwoNumbers("3","4")
// addTwoNumbers("a","b")


function cartPriceCalc(...num){
    return num
}

// console.log(cartPriceCalc(100,200,50000,23,34,900))

const user = {
    username: "spash",
    price: 999
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)