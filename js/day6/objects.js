const student = {
    name: "John Doe",
    age: "20",
    subjects: "math",
    greet: function () {
        console.log("Hello, " + student.name + "!");
    }

}

// console.log(student.name); // Accessing property
// console.log(student['age']); // Accessing property using bracket notation

// const user = {
//     "first name ": "John",
//     "last name": "Doe",

// }
// console.log(user["first name "]);

// console.log(student.greet);

// student.greet()
// console.log(student.name); 
// console.log(student.age);
 



const { name, age } = student;

console.log(name);




