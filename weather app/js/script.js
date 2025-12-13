// function ch() {
//     console.log("hello");
// }
// function fun(callback) {
//     callback();             // non blocking way of executing function
//     console.log("fun");
// }
// fun(ch)




// setTimeout(() => {
//     console.log("timing function with callback function");
// })
// console.log("Normal line");




// const p = new Promise((resolve, reject) => {
//     let a = true;
//     if (a) {
//         return resolve("Promise resolved");
//     } else {
//         return reject("Promise rejected");
//     }
// });
// p.then((a) => {
//     console.log(a);
// })
// .then(() => {
//     console.log("new line");
// })
// .catch((a) => {
//     console.log(a);
// });




setTimeout(() => {
    console.log("frist callback")
    settimeout(() => {
        console.log("second callback")

        setTimeout(() => {
            console.log("third callback")
        }, 1000);
    }, 1000);
}, 1000);