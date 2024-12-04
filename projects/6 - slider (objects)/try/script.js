function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound.");
  };
  
  let dog = new Animal("Dog");
  console.log(dog) // Output: "Dog makes a sound"
  