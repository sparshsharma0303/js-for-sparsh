const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// let new_nums = mynumbers.map((num)=>{
//     return num+10;
// })


const new_nums = mynumbers
        .map((num)=>num*10)
                .map((num)=>num+1)
                        .filter((num)=>num>50)
console.log (new_nums)