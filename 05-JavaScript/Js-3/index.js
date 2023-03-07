console.log('Hello NIKHIL');

// //primitive
// let lastName = 'Verma';
// lastName.indexOf  //internally as a string object
// //object
// let firstName = new String('Nikil');

// let msg = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards`;

// console.log(message);

// let words = message.split(' ');
// console.log(words);


// let date = new Date();
// let date2 = new Date('June 20 1998 07:15');
// let date3 = new Date(1998, 11, 20, 7);

// date3.setFullYear(1947);

// console.log(date3);



//ARRAY - bhi object hai
//1->Creation 
//let numbers = [1,4,5,7];
// console.log(numbers);

//2->Insertion
// //end -> push
// numbers.push(9);

// //beginning -> unshift
// numbers.unshift(8);

// //middle -> splice
// numbers.splice(2,0,'a','c');

//3->Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");

// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4, 2) );


//we have done these on primitive now on refernce
// let courses = [
//     {no:1, naam:'Ram'},
//     {no:2, naam:'Sonu'}
// ];

//console.log(courses);

//console.log( courses.includes( {no:1, naam:'Love'} ) );

// let course =  courses.find(course => course.naam === 'Kilvish');

//      function(course) {
//          return course.naam === 'Ram';
//      }

// console.log(course);


//4->Removing
// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();

// //beginning
// numbers.shift();

// //middle
// numbers.splice(2, 1);

// // console.log(numbers);


//5->Emptying in Array
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// //numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);


//combine and slicing
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// //let sliced = marks.slice(2);
// // let sliced = marks.slice(2,6);
// console.log(sliced);

//spred operater
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// // for(let value of arr) {
// //     console.log(value);
// // }

//arr.forEach(function(number){
//     console.log(number);
// })

// arr.forEach(number=> console.log(number));


//joining array
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


//sorting array
// let numbers = [5,10,4,40];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// filtering array
// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


//mapping array
// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);
// console.log(items);

//mapping with object
// let numbers = [1,2,-6,-9];
// let items = numbers
//             .filter(value => value >= 0)
//             .map(num => {value: num});
// console.log(items);