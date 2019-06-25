// three individual promises which resolves once after another

let cleanTheGarbage = function() {
    return new Promise(function(resolve, reject) {
      resolve('Clean the garbage')
    })
  }
  
  let cleanTheRoom = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + 'Clean the Room')
    })
  }
  
  let getIceCream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + 'you get an icecream')
    })
  }
  
  // result is used to capture the text inside the resolve
  
  // run the promise in definite order
  cleanTheGarbage().then(function(result) {
  return cleanTheRoom(result)
  }).then(function(result){
  return getIceCream(result)
  }).then(function(result){
  console.log("Finished" + result);
  })
  
  
  //when you want to capture the result when all of them finish
  Promise.all([cleanTheGarbage(),cleanTheRoom(),getIceCream()])
  .then(function() {
  console.log('Finished all')
  })
  
  
  //when you want any one to finish and you want to capture
  Promise.race([cleanTheGarbage(),cleanTheRoom(),getIceCream()])
  .then(function() {
  console.log('Finished one')
  })