const mynums = [1,4,5]

const mytotal = mynums.reduce(function (acc, curval){
    console.log(`acc:${acc}, currval:${curval}`)
    return acc + curval
},0)
console.log(mytotal)