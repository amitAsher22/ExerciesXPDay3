

// Exercise 1 : Your Favorite Colors

// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors =["red", "white" , "blue" ,"orange"];



// for(let i = 0; i < colors.length ; i++){
//     let oneSentence = `My #${i+1} choice is ${colors[i]}`
//     console.log(oneSentence);
  
//     if(i === 1){
//         console.log(`My 1st choice`);
//     }else if(i === 2){
//         console.log(`My 2nd choice`);
//     }else if(i === 3){
//         console.log('My 3rd choice');
//     }else if(i === 4){
//         console.log('My 4rd choice');
//     }

// };









//////////////////////////////////////////////////////////// Exercise 2


// Exercise 2 : List Of People

// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// let people = ["Greg", "Devon", "Jason", "James" , "amit"];


// 2.Write code to remove “Greg” from the people array.

// let removeGreg = people.splice(0 , 1);
// console.log(people);

// 3.Write code to add your name to the end of the people array.



// 4.Using a loop, iterate through the people array and console.log each person.

// for(let i = 0 ; i < people.length; i++){
//     console.log(people[i])
      
// }

// 5.Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.

// for(var i = 0 ; i< people.length; i++){
//     if(people[i] === "Jason"){
//        break;
//     }
//     console.log(people[i]);
// }

// 6.Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.

// for(var i = 0 ; i < people.length; i++){
//     let array = [];
//  people.slice(1 , 2 , "amit");
 

// }

//8. Write code that console.logs Mary’s index. take a look at indexOf on googl



//////////////////////////////////////////////////////////// Exercise 3



// Exercise 3 : Repeat The Question

// Instructions
// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)

// let numberFromUser = Number(prompt("hello user , write any number :)"))

// for(let i = 0 ; i < numberFromUser ; i++){
//     if(numberFromUser <= 10){
//         console.log(`your number is : ${numberFromUser} smaller then 10`);
//     }else{
//         console.log(`please try again , write number`);
//         numberFromUser = Number(prompt("hello user , write any number :)"))

//     }
// }



//////////////////////////////////////////////////////////// Exercise 4

// Exercise 4 : Attendance

// Instructions
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// Given the object above where the key is the students name and the value is the country they are from.

// Prompt the student for their name :
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."


// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina",
//     amit: "israel"
//   }

//   for(people in guestList){
//       if(people == "randy"){
//           console.log(`Hi! I'm ${people}, and I'm from ${guestList[people]}.`);
          
//       }
//      else if(people == "karla"){
//         console.log(`Hi! I'm ${people}, and I'm from ${guestList[people]}.`);
//        }

//        else if(people == "wendy"){
//         console.log(`Hi! I'm ${people}, and I'm from ${guestList[people]}.`);
//        }
//        else if(people == "norman"){
//         console.log(`Hi! I'm ${people}, and I'm from ${guestList[people]}.`);
//        }
//        else if(people == "sam"){
//         console.log(`Hi! I'm ${people}, and I'm from ${guestList[people]}.`);
//        }else{
//            console.log("Hi! I'm a guest.");
//        }
//   }




//////////////////////////////////////////////////////////// Exercise 5


// Exercise 5 : Family

// Instructions
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

// let family = {}
// let keys = ["mom" , "dad" ,"sister" ,"brother" , "dog"]
// let values=["ofra" , "haim" , "rotem" , "itay" , "miki"]
// for(var i = 0 ; i < keys.length ; i++){
//   for(var k = 0 ; k < values.length;k++){
//     family[`${keys[i]}`] = `${values[i]}`
      
//   }
  
// }

// console.log(family);


//////////////////////////////////////////////////////////// Exercise 6


// Exercise 6

// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above, console.log “my name is Rudolf the raindeer”

// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// var array =[]

// for(let index in details){
//     array.push(details[index])
//     array.push(index)
   
// }
// console.log(`${array[1]} ${array[0]} ${array[3]} ${array[2]} ${array[5]} ${array[4]} `);

//////////////////////////////////////////////////////////// Exercise 7


// Exercise 7 : Secret Group

// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()
// let arr = []
// for (let i = 0; i < names.length; i++) {
//     let firstLetter = names[i].charAt(0);
//     names.splice(i, 1, firstLetter)
// }
// console.log(names.join(''))