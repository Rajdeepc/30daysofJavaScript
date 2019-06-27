// example of fat arrow usage

var x = function(){
    this.count = 1;
        setTimeout(function(){
      this.count++; // this will throw an error because in the function scope 	this doenst refer to the parent this
      console.log(this.count)
      }, 1)
    }
    
    var xx = new x();
    
    // to solve the above issue we can use fat arrow function
    
    var x = function(){
        this.count = 1;
        setTimeout(() => {
      this.count++; // this will throw an error because in the function scope 	this doenst refer to the parent this
      console.log(this.count)
      }, 1)
    }
    
    var xx = new x();
    