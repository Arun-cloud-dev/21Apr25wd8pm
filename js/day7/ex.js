const fruits = ['apple', 'banana', 'orange', 'grape'];

// fruits.splice(2, 0, 'peach');


// // console.log(fruits);


// fruits.splice(4 + 1, 0, 'kiwi');
// console.log(fruits);



const updateFruits = [
    ...fruits.slice(0, 2),
    'Peach', 
    fruits[2],
    'Kiwi',
    ...fruits.slice(3)
]


console.log(updateFruits);