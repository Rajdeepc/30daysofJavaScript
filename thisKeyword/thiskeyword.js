//global this
this.table = 'window table';


//global object
this.garage = {
  table: 'garage table'
}


// this inside an object

let JohnStable = {
  table: 'johns table'
}

console.log(JohnStable.table);


//this inside a method
let JohnRoomStable = {
  table: 'johns table',
  cleantable() {
    console.log(`cleaning the ${this.table}`);
  }
}

console.log(JohnRoomStable.cleanTable())


//this inside a function

const cleanTable = function(soap) {
  console.log(`cleaning the ${this.table} using ${soap}`);
}
cleanTable.call(this, 'some soap');

// calling clean table on an object garage

cleanTable.call(this.garage, 'some soap');
cleanTable.call(JohnStable, 'some soap');

// best solution to use this for inner functions
const cleanTable = function(soap) {
  let innerFunction = () => {
    console.log(`cleaning the ${this.table} using ${soap}`);
  }
  innerFunction();
}


// this inside a constructor
let createRoom = function(name) {
  this.table = `${name}s room`;
}

cleanRoom.prototype.createRoom = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`)
}

let JillsRoom = new createRoom('Jills');
let JohnRoom = new createRoom('John');

//this inside classes

class createRoom1 {
  constructor(name) {
    this.table = 'table';

  }
  cleanRoom(soap) {
    console.log(`cleaning ${this.table} using ${soap}`)
  }

}
