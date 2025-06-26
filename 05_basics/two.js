// for of loop

const arr = [5,4,3,2,1]
for (const iterator of arr) {
    // console.log(iterator)   
}

const greeting = "hello world"
for (const greet of greeting) {
    if(greet == " ") continue;
    // console.log(greet)
}

//Map: holds key value pairs and remebers the insertion order of keys and unique key values

const map = new Map()
map.set("IN","india")
map.set("USA","unites state of america")
map.set("FR","france")
map.set("IN","bharat")

// console.log(map)

for (const element of map) {
    // console.log(element)
}

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`)
}