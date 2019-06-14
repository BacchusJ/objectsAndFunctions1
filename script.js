//function construction 
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//using a function construction is like a pattern for a blueprint alwaus with a capital

var Person  = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
    }


Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};
var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();




var Puppy = function (name, owner, color) {
    this.name = name;
    this.owner = owner;
    this.color = color;
}

Puppy.prototype.belongs = function() {
    console.log(this.name + ' belongs to ' + this.owner + ' and he is '+ this.color);
};

var chance = new Puppy('Chance', 'Julie', 'black');

var chloe = new Puppy ('Chloe', 'Bacchus', 'white');

var miles = new Puppy ('Miles', 'Bacchus', 'brown');

chance.belongs();
chloe.belongs();
miles.belongs();
*/

// object create
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

*/

// primitives vs objects

//primitives

// var a = 23;
// var b = a;

// a = 46;

// console.log(a);
// console.log(b);

// //objects

// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 35; 

// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// var age = 27;
// var obj = {
//     names: "Jonas",
//     city: "Lisbon"
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);


//passing functions as arguments

var years = [1990, 1965,1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);


console.log(ages);
console.log(isFullAge);