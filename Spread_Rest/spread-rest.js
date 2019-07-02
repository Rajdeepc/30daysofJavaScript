//spread operators

var x = function(...n){
	console.log(n)
}

x(1,2,3);

// more use

var n = [1,2,3]
var x = function(a,b,c, ...n){

}
x(1,2,3);


var dontknow = ['have fun', 'have more fun'];

var life = ['born','walk', ...dontknow, 'heaven'];
console.log(life);

//combining two arrays with spread

var A = [1,2,3];
var B = [4,5,6];
A.push(...B);
console.log(A);

