// simple callback

let x = function() {
    console.log("this is my first function")
  }
  
  let y = function(callback) {
    console.log("this is my second function");
    callback();
  }
  y(x);
  
  //real use of callback function
  
  let add = function(a, b) {
    return a + b;
  }
  
  let multiply = function(a, b) {
    return a * b;
  }
  
  let doWatever = function(a, b) {
    console.log(`my return number is ${a} , ${b}`)
  }
  
  let calc = function(num1, num2, callback) {
    //checking whether the callback is function or not
    if (typeof callback === 'function') {
      return callback(num1, num2);
    } else {
   
    }
  }
  
  console.log(calc(2, 3, doWatever));
  
  //OR
  
  console.log(calc(2, 3, function(a, b) {
    return a + b;
  }));
  
  
  //few interesting examples
  
  let myArr = [
  {value:1, name:'apple'},
  {value:4, name:'cabbage'},
  {value:8, name:'banana'}
  ]
  
  myArr.sort(function(val1,val2){
      if(val1.name < val2.name){return -1}
    else {
    return 1
    }
  })
  
  
  console.log(myArr)