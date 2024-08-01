// Write a JavaScript program that uses a while loop to print the first 10 numbers in the Fibonacci sequence.
// let n1 = 0, n2 = 1, nextTerm;
// let count = 0;

// console.log("Fibonacci Sequence:");

// while (count < 10) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     count++;
// }





// Write a JavaScript program that uses a while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100
// let targetNumber = Math.floor(Math.random() * 100) + 1;
// let guess;
// let attempts = 0;

// while (true) {
//     guess = parseInt(prompt("Guess the number between 1 and 100: "), 10);
//     attempts++;

//     if (guess < targetNumber) {
//         alert("Too low! Try again.");
//     } else if (guess > targetNumber) {
//         alert("Too high! Try again.");
//     } else if (guess === targetNumber) {
//         alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
//         break;
//     } else {
//         alert("Invalid input. Please enter a number between 1 and 100.");
//     }
// }






//       Write a JavaScript program that uses a while loop to reverse a given string.
// let originalString = "hello";
// let reversedString = "";
// let index = originalString.length - 1;

// while (index >= 0) {
//     reversedString += originalString[index];
//     index--;
// }
// console.log(`Original String: ${originalString}`);
// console.log(`Reversed String: ${reversedString}`);






// Write a JavaScript program that uses a while loop to find all prime numbers between 1 and 100.
// let number = 2;
// let primes = [];
// while (number <= 100) {
//     let isPrime = true;
//     let divisor = 2;
//     while (divisor <= Math.sqrt(number)) {
//         if (number % divisor === 0 && divisor !== number) {
//             isPrime = false;
//             break;
//         }
//         divisor++;
//     }
//     if (isPrime) {
//         primes.push(number);
//     }
//     number++;
// }
// console.log("Prime numbers between 1 and 100:", primes.join(", "));





// Write a JavaScript program that uses a while loop to calculate the power of a given number (e.g., 2^3 = 8).
// let base = 2;
// let exponent = 3;
// let result = 1;
// let count = 0;

// while (count < exponent) {
//     result *= base;
//     count++;
// }
// console.log(`${base}^${exponent} = ${result}`);





// Write a JavaScript program that uses a while loop to check if a given string is a palindrome (reads the same backward and forward).
// let str = "level";
// let leftIndex = 0; 
// let rightIndex = str.length - 1; 
// let isPalindrome = true; 

// while (leftIndex < rightIndex) {
//     if (str[leftIndex] !== str[rightIndex]) {
//         isPalindrome = false;
//         break;
//     }
//     leftIndex++;
//     rightIndex--;
// }

// if (isPalindrome) {
//     console.log(`"${str}" is a palindrome.`);
// } else {
//     console.log(`"${str}" is not a palindrome.`);
// }