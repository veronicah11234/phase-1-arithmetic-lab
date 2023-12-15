// index.js

// Task 1: Create a variable called multiply
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Task 2: Create a variable called random
const random = Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100

// Task 3: Create a variable called mod
const num3 = 20;
const num4 = 4;
const mod = num3 % num4;

// Task 4: Create a variable called max
const setOfNumbers = [8, 15, 20, 5, 12];
const max = Math.max(...setOfNumbers);

// Export variables for testing
module.exports = { multiply, random, mod, max };
