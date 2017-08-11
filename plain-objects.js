var personA = {
  name: 'Nizar',
  hairColor: 'brown',
  occupation: 'Teacher',
  height: 68,

  displayDetails: function () {
    var feet = Math.floor(this.height / 12);
    var inches = this.height % 12;
    console.log('Person: ' + this.name);
    console.log('A ' + this.occupation + ' with ' + this.hairColor + ' hair.');
    console.log(this.name + '\'s height is ' + feet + ' feet ' + inches + ' inches');
  },

  dyeHair: function (newColor) {
    this.hairColor = newColor;
  },

  getCmHeight: function () {
    return this.height * 2.54;
  }
};

personA.dyeHair('pink');
personA.displayDetails();
console.log( personA.getCmHeight() );


var personB = {
  name: 'Kanye',
  hairColor: 'black',
  occupation: 'Musician',
  height: 66,

  displayDetails: function () {
    var feet = Math.floor(this.height / 12);
    var inches = this.height % 12;
    console.log('Person: ' + this.name);
    console.log('A ' + this.occupation + ' with ' + this.hairColor + ' hair.');
    console.log(this.name + '\'s height is ' + feet + ' feet ' + inches + ' inches');
  },

  dyeHair: function (newColor) {
    this.hairColor = newColor;
  },

  getCmHeight: function () {
    return this.height * 2.54;
  }
};

personB.dyeHair('blonde');
personB.displayDetails();
console.log( personB.getCmHeight() );