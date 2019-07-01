
// IIFE example
var counter = (function(){
	var  i = 0;

  return {
  	get:function(){
    	return i;
    },
    set:function(val){
    	i = val;
    },
    increment: function(){
    	i++;
    }
  }
})();

console.log(counter.get()); // 0
counter.set(5) // 5
counter.increment() // 6
console.log(counter.get()); // 6