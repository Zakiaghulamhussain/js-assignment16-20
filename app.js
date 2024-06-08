//Question#1
const multiArray = [];
multiArray.push([]);
multiArray.push([]);
multiArray.push([]);

console.log(multiArray); 


//Question#2
const matrix = [
    [0,1, 2, 3],
    [1 ,0, 1,2],
    [2,1, 0, 1]
];

console.log(matrix);

//Question#3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Question#4
// Get the table number and length from the user
const tableNumber = parseInt(prompt("Enter the table number:"));
const tableLength = parseInt(prompt("Enter the table length:"));
console.log(`Multiplication table of ${tableNumber} with length ${tableLength}:`);
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

//Question#5
// Array of fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Question#6
// Counting: 1 to 15
document.write("<h3>Counting: </h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// Reverse counting: 10 to 1
document.write("<h3>Reverse counting: </h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// Even numbers: 0 to 20
document.write("<h3>Even: </h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// Odd numbers: 1 to 19
document.write("<h3>Odd: </h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

// Series: 2k, 4k, 6k, ..., 20k
document.write("<h3>Series: </h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}


//Question#7
// Given array
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    // Convert the item to lowercase for case-insensitive comparison
    const lowerCaseItem = item.toLowerCase();

    // Check if the item exists in the array
    const found = A.includes(lowerCaseItem);

    // Prompt the user based on whether the item is found
    if (found) {
        alert(`Yes, "${item}" is found in the list.`);
    } else {
        alert(`No, "${item}" is not found in the list.`);
    }
}

// Prompt the user for input and search for the item
const userInput = prompt("Enter an item to search:");
searchItem(userInput);


//Question#8
// Given array
const B = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number
let largestNumber = A[0]; // Assume the first number is the largest initially

// Loop through the array to find the largest number
for (let i = 1; i < B.length; i++) {
    if (B[i] > largestNumber) {
        largestNumber = B[i];
    }
}

// Display the largest number
console.log("The largest number in the array is:", largestNumber);


//Question#9
// Given array
const C = [24, 53, 78, 91, 12];
let smallestNumber = C[0]; 
for (let i = 1; i < C.length; i++) {
    if (C[i] < smallestNumber) {
        smallestNumber = C[i];
    }
}
console.log("The smallest number in the array is:", smallestNumber);


//Question#10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


