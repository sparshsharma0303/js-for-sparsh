

mysym = Symbol("mykey")

const jsUser = {
    name: "sparsh",
    age: 18,
    location: "indore",
    email: "sparsh@gmail.com",
    isLoggedIn: true,
    lastLoggedInDays: ["monday","saturday"]
    [mysym]= "mykey1"
}
// console.log(jsUser["name"])
jsUser.greeting = function(){
    console.log("hello this is sparsh");
}

jsUser.greetingTwo = function(){
    console.log(`hello this is ${this.name}`)

}
// console.log(jsUser.greetingTwo())

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "someone@gmail.com",
    username: {
        regularname: {
            firstname: "sparsh",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.username.regularname)

const obj1 = {1:"a", 2:"b"} 
const obj2 = {3:"c", 4:"d"} 

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.values(tinderUser))
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


const course ={
    couresename: "js in hindi",
    courseprice: 999,
    courseInstructore: "hitesh choudhray"
}

const{courseInstructore : instructor} = course
console.log(instructor)