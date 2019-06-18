//function constructor

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
