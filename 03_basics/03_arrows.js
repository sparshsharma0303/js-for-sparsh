const user = {
    username: "sparsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     let username = "sparsh01"
//     console.log(this.username);   
// }


// const chai = () => {
//     let username = "sparsh"
//     console.log(this)
// }
// chai()


// const addTwoNumbers = (n1, n2) => (n1 + n2)
// chai()


// const addTwoNumbers = (n1, n2) => n1 + n2;
// console.log(addTwoNumbers(5,6))

const namefxn = (n1, n2) => ({username : "sparsh"});
console.log(namefxn(5,6))


