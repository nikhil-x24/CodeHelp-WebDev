console.log('Chaliye shuru karte hai ');

//1->object create

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//2->factory function

// function createRectangle(len, bre) {
//     const rectangle = {
//         length: len,
//         breadth: bre,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define

// 3->constructor method noreturn

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';    //add
// console.log(rectangleObject);

// delete rectangleObject.color;        //delete
// console.log(rectangleObject);

//gyan

// let Rectangle1 = new Function(
//     'length', 'breadth',
//     `this.length = length;
//      this.breadth = breadth;

//      this.draw= function() {
//          console.log('drawing');
//      }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


//type of js 
// 1->primetive

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// 2->reference

// let a = { value: 10};
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);


// let a = 10;      //primetive
// function inc(a) {
//     a++;
// }

// inc(a);
// console.log(a);


// let a = {value:10 };         //reference
// function inc(a) {
//     a.value++;
// }

// inc(a);
// console.log(a.value);


//iteration
let rectangle = {
    length:2,
    breadth:4
};

//for-in loop ->object ko iterate kr skte hai
// for(let key in rectangle ) {

//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]

//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

//obj me kon si prop exectes krti hai check kr skte hai
// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }



//object - Clone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};     //another object

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;
// console.log(dest);


//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};
// console.log(dest);

// src.a++;
// console.log(dest);