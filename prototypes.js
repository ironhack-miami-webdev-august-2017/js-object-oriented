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

var petA = new Pet('Princess', 'dog', 'chihuahua mix', 5, 'chicken soup');
var petB = new Pet('Casper', 'dog', 'westie', 15, 'turkey');
var petC = new Pet('Charlie', 'dog', 'pitbull', 1, 'chicken');

petA.feed('chicken soup');
petA.feed('cheese');
petB.birthday();
petB.birthday();
petB.birthday();

console.log( petA );
console.log( petB );
console.log( petC );


// functions
// ---------
// display details
// birthday




function Item (a, b) {
  this.name = a;
  this.price = b;
}

Item.prototype.calculatePrice = function () {
  if (this.name === 'fruit') {
    // return this.price - (this.price * 0.05);
    return this.price * 0.95;
  }
  else {
    return this.price;
  }
};

var ball = new Item('soccer ball', 15);
var fruit = new Item('fruit', 99);

console.log( ball.calculatePrice() );
console.log( fruit.calculatePrice() );
