const code = ["java","py","cpp","js"]

code.forEach(function (val){ 
    // console.log(val)
})

code.forEach(()=>{
    // console.log(val)
})

function printme(item){
    // console.log(item)
}

code.forEach(printme)

mycode = [
    {
        languageName : "javascript ",
        languageFileName : "js"
    },
    {
        languageName : "java ",
        languageFileName : "java"
    },
    {
        languageName : "python ",
        languageFileName : "py"
    }
]

// console.log(mycode)
mycode.forEach((item)=>{
    console.log(item.languageName)
})