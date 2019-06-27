var methodChaining = function() {
  this.i = 0;

  this.add = function(i) {
    this.i += i;
    return this;
  };

  this.substract = function(i) {
    this.i -= i;
    return this;
  };

  this.print = function() {
    console.log(this.i);
  };
};

var x = new methodChaining();
x.add(3)
  .substract(2)
  .print();

//lets look this example in a closure

var methodChaining = function() {
  var i = 0;

  var add = function(j) {
    i += j;
    return this;
  };

  var substract = function(j) {
    i -= j;
    return this;
  };

  var print = function() {
    console.log(i);
  };

  return { add: add, substract: substract, print: print };
};

var x = methodChaining();
x.add(4)
  .substract(2)
  .print();
