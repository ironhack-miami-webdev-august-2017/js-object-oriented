function Pet (a, b, c, d, e) {
  this.name = a;
  this.species = b;
  this.breed = c;
  this.age =  d;
  this.favoriteFood = e;
} // end function Pet () {

Pet.prototype.feed = function (theFood) {
  if (theFood === this.favoriteFood) {
    console.log(this.name + ' is happy to have ' + theFood);
  }
  else {
    console.log(this.name + ' begrugingly eats ' + theFood);
  }
};

Pet.prototype.birthday = function () {
  this.age += 1;
  console.log('Happy birthday, ' + this.name + '!');
  console.log('You are ' + this.age + ' years old now.');

  if (this.age === 18) {
    console.log('Time for strippers!');
  }
};


function Dog (dogName, dogBreed, dogAge, dogFood) {

  // Invokes the "Pet" constructor for the new "Dog" object
  Pet.call(this, dogName, 'dog', dogBreed, dogAge, dogFood);
  // function Pet (a,       b,      c,       d,       e) {

} // end function Dog () {

// Gives "Dog" objects access to the "Pet" prototype functions
Dog.prototype = Object.create(Pet.prototype);
// 🚨 🚨 🚨 ☝︎ ☝︎︎︎︎ 🚨 🚨 🚨
// MAKE SURE THIS GOES BEFORE ANY NEW PROTOTYPE METHODS

// Only "Dog" objects can "bark()"
Dog.prototype.bark = function () {
  console.log(this.name + ' goes "Woof" or "Guau" or whatever');
};

Dog.prototype.feed = function () {
  console.log(this.name + ' is happy to eat anything');
};

var emmasPet = new Dog('Casper', 'westie', 15, 'turkey');

console.log(emmasPet);
emmasPet.feed();
emmasPet.birthday();
emmasPet.bark();
