//call

let obj = {
    name: 'Rajdeep'
  }
  let newFunc = function(c){
      console.log(this.name + ' ' + c)
  }
  
  // with .call we can call and obj from a method
  //in below we are calling the name property of obj from the newFunc method
  newFunc.call(obj,'chandra');
  
  
  //bind
  
  let obj1 = {
    name: 'Subhodeep'
  }
  let newArr = ['a', 'b', 'c']
  let applyFunc = function(a, b, c) {
    console.log(this.name + ' ' + a + b + c)
  }
  
  // with .call we can apply an obj from a method
  //in below we are calling the name property of obj1 from the newFunc method, here the parameters should be array like newArr
  applyFunc.apply(obj1, newArr);
  
  //bind
  let obj2 = {
    name: 'Subhodeep'
  }
  let bindFunc = function(a) {
    console.log(this.name + a)
  }
  
  // with .bind we can bind an obj from a method
  //in below we are calling the name property of obj1 from the newFunc method
  var bound = bindFunc.bind(obj2);
  bound('8');
  
  