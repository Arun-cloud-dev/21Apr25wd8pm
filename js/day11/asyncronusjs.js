//Asynchronous JavaScript

// function greet(name, callback) {
//     console.log("hello " + name);
//     callback();
// }


// function sayBye() {
//     console.log("bye");
// }
// greet("besant", sayBye);

// function greet(name, callback) {
//     let greeting = "hello " + name;
//     let farwell = callback();


//     return greeting + "\n" + farwell;
// }

// function sayBye() { 
//     return "bye";
// }

// let message = greet("besant", sayBye);
// console.log(message);






// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Operation was successful");
//     } else {
//         reject("Operation failed");
//     }
// })
 


// promise 
//     .then(data => console.log(data))
//     .then(err => console.log(err));


// let fetchData = new Promise((resolve, reject) => {
//   resolve("Data loaded");
// });

// fetchData.then((data) => console.log(data));
  




function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

async function showData() {
    const result = await getData();
    console.log(result);

}

showData();






