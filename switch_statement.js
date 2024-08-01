// let dayNumber = 3;

// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//         break;
//     default:
//         console.log("Inavalid day number");
// }

// Write a JavaScript program that uses a switch statement to print the name of a month based on a given number (1-12).
// let monthNumber = 5;
// switch (monthNumber) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
// }

// Write a JavaScript program that uses a switch statement to determine the type of a vehicle based on a given string ("car", "truck", "motorcycle", etc.).
// let vehicleType = "motorcycle";

// switch (vehicleType) {
//     case "car":
//         console.log("This is a car.");
//         break;
//     case "truck":
//         console.log("This is a truck.");
//         break;
//     case "motorcycle":
//         console.log("This is a motorcycle.");
//         break;
//     default:
//         console.log("Unknown vehicle type.");
// }






// Write a JavaScript program that uses a switch statement to calculate the cost of shipping based on the weight of a package (0-10 pounds, 11-20 pounds, etc.).
// let packg_Weight = 15;
// let shipp_Cost;

// switch (true) {
//   case packg_Weight >= 0 && packg_Weight <= 10:
//     console.log(shipp_Cost = "100");
//     break;
//   case packg_Weight >= 11 && packg_Weight <= 20:
//     console.log(shipp_Cost = "200");
//     break;
//   case packg_Weight >= 21 && packageWeight <= 30:
//     console.log(shipp_Cost = "300");
//     break;
//   case packg_Weight >= 31 && packg_Weight <= 40:
//     console.log(shipp_Cost = "400");
//     break;
//   case packg_Weight > 40:
//     console.log(shipp_Cost = "500");
//     break;
//   default:
//    console.log(shipp_Cost = "Invalid weight. Please enter a valid weight.");
// }







// Write a JavaScript program that uses a switch statement to determine the grade of a student based on their score (A: 90-100, B: 80-89, C: 70-79, etc.).
let score = 85;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
       console.log (grade = "A");
        break;
    case (score >= 80 && score < 90):
      console.log (grade = "B");
        break;
    case (score >= 70 && score < 80):
      console.log (grade = "C");
        break;
    case (score >= 60 && score < 70):
      console.log (grade = "D");
        break;
    case (score >= 0 && score < 60):
      console.log (grade = "E");
        break;
    default:
       console.log(grade = "Invalid score. Please enter a score between 0 and 100.");
}
