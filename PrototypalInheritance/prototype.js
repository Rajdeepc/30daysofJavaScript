//creating a function expression which is always a constructor

let x = function(j) {
    this.i = 0;
    this.j = j;
  }
  
  // i want to take every property of the x method and extend it to getjmethod with prototype
  x.prototype.getJ = function() {
    return this.j;
  }
  
  //i create two instances of x method
  let x1 = new x(1);
  let x2 = new x(2);
  
  
  //i call the getJ method on the instances to get the value
  console.log(x1.getJ())
  console.log(x2.getJ())
  
  
  
  // More examples
  
  let Job = function(){
  this.pays = true
  }
  
  Job.prototype.print = function(){
      console.log(this.pays ? 'I want to join' : 'no thanks');
  }
  
  //creating a sub class
  let Techjob = function(title, pays){
      Job.call(this); // inherits the properties of the master object
      this.title = '';
      this.pays = pays;
  }
  
  // create instance of the subclass
  
  Techjob.prototype = Object.create(Job.prototype);
  Techjob.prototype.constructor = Techjob;
  
  let softwareJob = new Techjob('js', false);
  
  console.log(softwareJob.print())