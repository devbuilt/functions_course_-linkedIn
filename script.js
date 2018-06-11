function plus(a,b) {
return (
	console.log(a+b),
	console.log(this),
	console.log(arguments)
)
};
plus(5,6);


//

var calc = {
	status : 'Awesome',
	plus: function(a,b){
		return (
		console.log(a+b),
		console.log(this),
		console.log(arguments),
		console.log(this.status)
		)
	}
}
calc.plus(4,5);