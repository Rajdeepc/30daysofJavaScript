var y = 2;

let x = function() {
 console.log(y); 
 var y = 1;
}

x();



let x = function() {
if(true){
	let y = 1
}
console.log(y) // undefined
}

x();