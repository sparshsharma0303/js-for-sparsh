const accountID = 12243
let emailID = "sparsh@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

// accountID = 123123 not allowed since it is constant
emailID = "spsh@gmail.com"
accountPassword = "00000"
accountCity = "indore"

console.log(accountID);
console.table([accountID,emailID,accountPassword,accountCity,accountState])

/*
not to use var because of its issues with block scope and functional scope 

*/ 