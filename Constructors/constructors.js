// an example of a constructor function

let Car = function(color){
    if(!new.target) { throw 'Car() is not defined with new'}
    this.color = color
    }
    
    let newCar = new Car('blue');
    
    console.log(newCar.color);
    
    
    
    
    
    