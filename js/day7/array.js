const furits = ['apple', 'banana', 'orange', 'grape'];


// Accessing elements
console.log(furits[0]); // apple
console.log(furits[2]); // orange

// Modifying elements
furits[1] = 'kiwi';
console.log(furits[1]); // kiwi

// Adding elements
furits.push('mango');
console.log(furits); // ['apple', 'kiwi', 'orange', 'grape', 'mango']

// Removing elements
furits.pop();
console.log(furits); // ['apple', 'kiwi', 'orange', 'grape']

// Finding elements
const index = furits.indexOf('orange');
console.log(index); // 2

// Iterating over elements
furits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: kiwi
// 2: orange
// 3: grape

// Sorting elements
furits.sort();
console.log(furits); // ['apple', 'grape', 'kiwi', 'orange']

// Reversing elements
furits.reverse();
console.log(furits); // ['orange', 'kiwi', 'grape', 'apple']

// Checking length
console.log(furits.length); // 4

// Joining elements
const joinedFruits = furits.join(', ');
console.log(joinedFruits); // 'orange, kiwi, grape, apple'

// Slicing elements
const slicedFruits = furits.slice(1, 3);
console.log(slicedFruits); // ['kiwi', 'grape']

// Splicing elements
furits.splice(1, 2, 'pear', 'peach');
console.log(furits); // ['orange', 'pear', 'peach', 'apple']

// Checking if an element exists
const hasApple = furits.includes('apple');
console.log(hasApple); // true

// Finding elements with a condition
const foundFruit = furits.find(fruit => fruit.startsWith('p'));
console.log(foundFruit); // 'pear'

// Filtering elements
const filteredFruits = furits.filter(fruit => fruit.length > 4);
console.log(filteredFruits); // ['orange', 'pear', 'peach', 'apple']

// Mapping elements
const uppercasedFruits = furits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ['ORANGE', 'PEAR', 'PEACH', 'APPLE']

// Reducing elements
const concatenatedFruits = furits.reduce((acc, fruit) => acc + fruit, '');
console.log(concatenatedFruits); // 'orangepearpeachapple'

// Checking if all elements meet a condition
const allHaveFiveLetters = furits.every(fruit => fruit.length === 5);
console.log(allHaveFiveLetters); // false

// Checking if any element meets a condition
const anyStartsWithO = furits.some(fruit => fruit.startsWith('o'));
console.log(anyStartsWithO); // true

// Finding the index of an element
const indexOfGrape = furits.findIndex(fruit => fruit === 'grape');
console.log(indexOfGrape); // -1 (not found, as 'grape' was removed earlier)

// Converting to a string
const fruitString = furits.toString();
console.log(fruitString); // 'orange,pear,peach,apple'

// Converting to a JSON string
const fruitJson = JSON.stringify(furits);
console.log(fruitJson); // '["orange","pear","peach","apple"]'

// Converting from a JSON string
const parsedFruits = JSON.parse(fruitJson);
console.log(parsedFruits); // ['orange', 'pear', 'peach', 'apple']

// Checking if the array is empty
const isEmpty = furits.length === 0;
console.log(isEmpty); // false

// Finding the last index of an element
const lastIndexOfOrange = furits.lastIndexOf('orange');
console.log(lastIndexOfOrange); // 0 (the last occurrence of 'orange')

// Filling elements
furits.fill('banana', 1, 3);
console.log(furits); // ['orange', 'banana', 'banana', 'apple']

// Copying elements
const copiedFruits = furits.slice();
console.log(copiedFruits); // ['orange', 'banana', 'banana', 'apple']

// Checking if the array is an instance of Array
const isArray = Array.isArray(furits);
console.log(isArray); // true

// Finding the first index of an element
const firstIndexOfBanana = furits.indexOf('banana');
console.log(firstIndexOfBanana); // 1

// Finding the last index of an element
const lastIndexOfBanana = furits.lastIndexOf('banana');
console.log(lastIndexOfBanana); // 2

// Finding the first element that satisfies a condition
const firstLongFruit = furits.find(fruit => fruit.length > 5);
console.log(firstLongFruit); // 'orange'

