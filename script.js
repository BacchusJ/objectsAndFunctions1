//function constructor
/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
     
}
//inheritance - objects have access to this function because it is in their
//prototype
Person.prototype.calculateAge = function (){
    console.log(2019 - this.yearOfBirth)
}

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jennifer', 1977, 'Make Up Artist');

var bacchus = new Person ('Bacchus', 1977, 'glass engraver');

john.calculateAge();
jane.calculateAge();
bacchus.calculateAge();
*/

/*

//object.create
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var bacchus = Object.create(personProto,
{
    name: {value : 'Bacchus'},
    yearOfBirth: { value: 1977},
    job: { value: 'glass engraver'}
});

*/

//primitive vs objects

/*two variables holding primitives are actually two different things
because each varibale has its own value
this will console log 23 for b and 46 for a because it was changed after


var a = 23;
var b = a;

a = 46; 

console.log(a);
console.log(b);

*/

/* ************ now we are doign the same but with 'objects'
this will console log 30 for both variables 
becasue the referece points to the first object - it is just
a reference. unlike the expample above; they do not have 
their own value

//objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
********************** */
//function 

/*when we pass a primitive to a function, only a copy is created
but when we pass an object; we do NOT pass the object but only the 
reference

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}
change(age, obj);
console.log(change);
console.log(age);
console.log(obj.city);

*/

/*first class functions

functions are also objects, so we can do the 
same things we can do with objects
function is an instance of an object type. We can store them in a 
variable*/

/*

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(fullAges);
console.log(ages);
console.log(rates);

*/


//function returning functions

/*

function interviewQuestions(job){
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer')
teacherQuestion('John');
designerQuestion('Bacchus');
*/

// IIFE immediately invoked functions

// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1977);

// var retirementCanada = retirement(65);
// retirementCanada(1977);

// var retirementFrance = retirement(67);
// retirementFrance(1977);

/*

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' , can you please explain what UX design is');

        }else if (job === 'xfinity') {
            console.log (name + ', can you tell me what you do for xfinity?')
        }else {
            console.log('Hello and welcome' + name + 'tell me what you do for a living');

        }
    }
}

interviewQuestion('xfinity')('Danny');
*/

//bind call and apply methods 

/*

var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + 
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if (style === 'friendly') {
            console.log('Hey! What\'s up?, I\'m ' + this.name + 
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
};

var julie = {
    name: 'Juliana Mai',
    age: 31,
    job: 'web developer'
}

var danny = {
    name:'Felipe',
    age: 38,
    job: 'xfinity technician'
}

var bacchus = {
    name: 'Bacchus',
    age: 40,
    job: 'glass engraver'

}

var kah = {
    name: 'Kah',
    age: 35,
    job: 'driver'
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'afternoon')

john.presentation.call(julie, 'friendly', 'evening');
john.presentation.call(danny, 'friendly', 'night');

john.presentation.call(bacchus, 'formal', 'morning');
john.presentation.call(bacchus, 'friendly', 'evening');


//apply method accepts the argument as an array 

// john.presentation.apply(emily, ['friendly', 'afternoon'])

//bind method is similar to call method also but bind does not immediatly call 
//the function but makes a copy with pre-set arugments - we are going to 
//pre-set the friendlty argument - pay attention

var kahFriendly = john.presentation.bind(kah, 'friendly', 'morning');

// kahFriendly('morning');
kahFriendly("evening");

*/
//IIFE - this prevents the code to interfere with another developer's code. In case they are using the same name for a variable
(function () {
//create a function constructor! 

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;

}
//this displays the questions 
Question.prototype.displayQuestion = function () {
console.log(this.question);
//this will loop through the answers 
for (var i = 0; i < this.answers.length; i++ ) {
    console.log(i + ': ' + this.answers[i]);
}
}

//to check if we got the correct answer 

Question.prototype.checkAnswer = function(ans){
if (ans === this.correct) {
    console.log('Correct Answer')
} else {
    console.log('Try Again')
}
}




var q1 = new Question('Is JavaScript the coolest programing language in the world?',

                    ['yes', 'no'],

                    0);


var q2 = new Question('What is the name of this course\'s instructor?',
                    ['John',
                     'Michael',
                     'Jonas'],
                     2);

var q3 = new Question('What does best describe coding?', 
                    ['Boring',
                     'Hard',
                     'Fun',
                     'Tedious'],
                     2);         
                     
var questions = [q1, q2, q3];
//multiply - this will run through the array 
var n = Math.floor(Math.random() * questions.length)

questions[n].displayQuestion();
//use parseInt to make sure it turns the answer into a string 
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);
}) ();
