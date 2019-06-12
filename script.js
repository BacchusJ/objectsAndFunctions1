//function construction 

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

