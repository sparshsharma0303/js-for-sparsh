let month = 5

switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("jun")
        break;

    default:
        if (month<=12) {
            console.log("second half of year")
        }else{
            console.log("invalid entry");
            
        }
        break;
}



// since there is no break statement it will execute all the cases after the matched case except the default one 
// let month  = 2
// switch (month) {
//     case 1:
//         console.log("jan")
//     case 2:
//         console.log("feb")
//     case 3:
//         console.log("march")
//     case 4:
//         console.log("april")
//     case 5:
//         console.log("may")
//     case 6:
//         console.log("jun")

//     default:
//         if (month<=12) {
//             console.log("second half of year")
//         }else{
//             console.log("invalid entry");
            
//         }
//         break;
// }