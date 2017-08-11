function Person (a, b, c, d) {
  this.name = a;
  this.hairColor = b;
  this.occupation = c;
  this.height = d;

  this.displayDetails = function () {
    var feet = Math.floor(this.height / 12);
    var inches = this.height % 12;
    console.log('Person: ' + this.name);
    console.log('A ' + this.occupation + ' with ' + this.hairColor + ' hair.');
    console.log(this.name + '\'s height is ' + feet + ' feet ' + inches + ' inches');
  };

  this.dyeHair = function (newColor) {
    this.hairColor = newColor;
  };

  this.getCmHeight = function () {
    return this.height * 2.54;
  };
} // end function Person()

var personA = new Person('Nizar', 'brown', 'Teacher', 68);

personA.dyeHair('pink');
personA.displayDetails();
console.log( personA.getCmHeight() );

var personB = new Person('Kanye', 'black', 'Musician', 66);

personB.dyeHair('blonde');
personB.displayDetails();
console.log( personB.getCmHeight() );


console.log( new Date(1986, 7, 6) );

console.log( new Array() );

console.log( new String('hi') );
