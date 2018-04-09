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
