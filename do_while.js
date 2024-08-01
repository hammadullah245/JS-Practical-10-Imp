// Write a JavaScript program that uses a do-while loop to print the numbers from 1 to 10.
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);





// Write a JavaScript program that uses a do-while loop to calculate the sum of numbers from 1 to 10.
// let sum = 0;
// let number = 1;

// do {
//   sum += number;
//   number++;
// } while (number <= 10);
// console.log("The sum of numbers from 1 to 10 is: " + sum);







// Write a JavaScript program that uses a do-while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.
// Function to get user input
// function getUserGuess() {
//     let guess = prompt("Guess a number between 1 and 100:");
//     return parseInt(guess, 10);
//   }
  // Generate a random number between 1 and 100
//   let targetNumber = Math.floor(Math.random() * 100) + 1;
//   let userGuess;
//   let attempts = 0;
//   do {
//     userGuess = getUserGuess();
//     attempts++;
//     if (userGuess > targetNumber) {
//       alert("Too high! Try again.");
//     } else if (userGuess < targetNumber) {
//       alert("Too low! Try again.");
//     } else {
//       alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
//     }
//   } while (userGuess !== targetNumber);
  






// Write a JavaScript program that uses a do-while loop to calculate the factorial of a given number.
// let number = parseInt(prompt("Enter a number to calculate its factorial:"), 10);
// let factorial = 1;
// let i = number;
// do {
//   if (i > 1) {
//     factorial *= i;
//   }
//   i--;
// } while (i > 0);

// alert(`The factorial of ${number} is: ${factorial}`);