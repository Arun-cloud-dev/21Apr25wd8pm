//Encapsulation 


// class RemoteControl {
//     #volume = 0 ; // private property

//     increaseVolume() {
//         this.#volume++;

//         console.log(`volume :${this.#volume}`);
//     }

//     decreaseVolume() {
//         this.#volume--;

//         console.log(`volume :${this.#volume}`);
//     }

// }


// const remote = new RemoteControl();


// remote.increaseVolume();
// remote.increaseVolume();
// remote.decreaseVolume();
// remote.decreaseVolume();


// remote.#volume = 100; error  Private field '#volume'



//inheritance 

// class Vehicle {
//     move() {
//         console.log("Vehicle is moving ");   // methord in parent class 
//     }
// }



// class Car extends Vehicle{
//     honk() {
//         console.log("car says : Beep Beep !"); 
//     }
// }




// const myCar = new Car();


// myCar.move() ; // calling method from parent class
// myCar.honk(); // calling method from child class

// Polymorphism
// Polymorphism allows different classes to be treated as instances of the same class through a common interface.
// It enables a single function or method to operate in different ways based on the object it is acting upon.
// class Animal {
//     speak() {
//         console.log("Animal makes a sound"); //general methord 
//     }
// }

// class Dog extends Animal {
//     speak(){
//         console.log("Dog barks"); //overriding the speak() method for Dog 
//     }
// }


// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows"); //overriding the speak() method for Cat 
//     }
// }

// const animals = [new Animal(), new Dog(), new Cat()];
// animals.forEach((animal) => animal.speak());
// creating an array of different animal objects
// Polymorphism: Each animal can speak in its own way, even though they share the same method name.
// This is an example of polymorphism, where different classes implement the same method in their own way.
// Each animal in the array will call its own speak method.


// Abstraction

class CoffieMachine {
    start() {
        this.#boilWater()
        this.#brewCoffee();
        console.log("Coffee is ready!");
    }

    #boilWater() {
        console.log("Boiling water...");
    }
    #brewCoffee() {
        console.log("Brewing coffee...");
    }
}



const myCoffie = new CoffieMachine();


myCoffie.start();


// The user of the CoffieMachine class does not need to know how the water is boiled or how the coffee is brewed.
// They just call the start method, which abstracts away the details of the brewing process.
// This is an example of abstraction, where the implementation details are hidden from the user.
// Abstraction helps in reducing complexity and increasing efficiency by hiding unnecessary details from the user.
// It allows the user to focus on the high-level functionality without getting bogged down by the low-level details.
// In summary, OOP is a powerful programming paradigm that helps in organizing code, promoting reusability, and improving maintainability.
// It allows developers to create modular and scalable applications by using concepts like encapsulation, inheritance, polymorphism, and abstraction.
// These concepts help in creating a clear structure for the code, making it easier to understand and maintain.
// OOP is widely used in modern programming languages and frameworks, making it a fundamental concept for developers to understand.