//closures inside a function

let closureFunc = () => {
    let i = 1;
    return () => {
      console.log(i);
    }
  }
  
  console.dir(closureFunc());
  
  
  
  //closures inside a loop
  
  
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
  
  
  
  //if we use var then we have to wrap the setTimeout in an immediately invoked function to make the i refresh in for loop
  
  for (var i = 0; i < 4; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i)
      }, 1000)
    })(i)
  }
  