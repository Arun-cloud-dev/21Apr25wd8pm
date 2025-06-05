

// try {
//     let reuslt = riskyOperation();
//     console.log(reuslt);
// } catch (error) {
//     console.log("error caught:", error.message);
// } finally {
//     console.log("always runs (cleanup code)");
// }




// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }

// try {
//     divide(5, 4);
// } catch (e) {
//     console.log(e.message);
// }



// function outer(){
//     let name = " besant";

//     function inner() { 
//         console.log(name);
//     }
//     inner();
// }

// outer();


// function outer() { 
//     let msg = "hi";

//     return function inner() { 
//         console.log(msg);
//     }
// }
// let greet = outer();

// greet();



// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }


// const increment = counter();
// increment();
// increment();
// increment();



