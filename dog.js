function Dog(name){ //Creating a class Dog
    this.name = name;

}

//Adding an instance method
Dog.prototype.speak = function(){
        
        console.log("woof");
    }

var lab = new Dog('Lab');
lab.speak();
console.log(lab.name);



//Adding a second class

function Labrador(color,breedWeight){
    
    
    this.color = color;
    this.breedWeight = breedWeight;
    
}

//Declaring it as a sub class of parent class
Labrador.prototype = new Dog();

//Overriding the instance method
Labrador.prototype.speak = function(){
    
     return console.log('Labrador says WOOF');
}

//Creating a new instance

var x = new Labrador('black',40);
x.speak();
console.log(x.color);
console.log(x.breedWeight);


















//var Data = function(name,age,yearOfBirth){
//    
//    this.name = name;
//    this.age = age;
//    this.yearOfBirth = yearOfBirth;
//    
//}
//
//
//Data.prototype.openResult = function(){
//    
//    console.log(this.name + " is of " + this.age +  " and " + this.yearOfBirth);
//}
//
//Data.prototype.extraDetail = 'Spandana';
//
//var sneha = new Data('Sneha',23,1994);
//sneha.openResult();
//console.log(sneha.extraDetail);
//
//var david = new Data('David',27,1989);
//david.openResult();