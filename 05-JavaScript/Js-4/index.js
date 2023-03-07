// // console.log('kya haaal');

// 1->
// //function call or invoke
// run();

// //function declaration
// function run() {
//     console.log('running');
// }


// 2->
// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

//stand();
// let jump = stand;
// jump();


//3->
// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand2();

// let jump = stand2;
// jump();

// stand2();



//4->Dynamic Fun
// let x = 1;
// x = 'a';
// console.log(x);

// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);



//5->Rest Operator
// function sum(num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);



//6->Default Parameters
function interest(p,r=6,y=9) {
    return p*r*y/100;
}

//GETTER SETTER
//getter -> access properties
//setter -> change or mutate properties

//console.log(interest(1000,undefined, 8));

// let person = {
//     fName : 'Nikhil',
//     lName : 'Verma',
//
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);

// //issue - > read only when v declear outside


//7->error handling        
// console.log(person.fullName);
// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }


// console.log(person.fullName);



//8->scope
// {
//     var a = 5;
// }
// console.log(a);

// function walk() {
//     var a = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }



//9->sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);



//10-reducing array
let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("PRINTING TOTAL SUM:")
console.log(totalSum);