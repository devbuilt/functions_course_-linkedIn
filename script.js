function plus(a, b) {
	return (
		console.log(a + b),
		console.log(this),
		console.log(arguments)
	)
};
plus(5, 6);


//using functions as objects

var calc = {
	status: 'Awesome',
	plus: function (a, b) {
		return (
			console.log(a + b),
			console.log(this),
			console.log(arguments),
			console.log(this.status)
		)
	}
}
calc.plus(4, 5);


//Invoking instances through the constructor

let Dog = function () {
	let name, breed;
	return console.dir(this);
}

firstDog = new Dog;
firstDog.name = 'Roover';
firstDog.breed = 'Doberman';

secondDog = new Dog;
secondDog.name = 'Nova';
secondDog.breed = 'Yorkie';

//Expanding functionality through prototype
let speak = function(sayWhat){
	console.log(sayWhat);
};

let Dog1 = function () {
	let name, breed;

};
let Cat1 = function () {
	let name, breed;

};

Dog1.prototype.speak = speak;
Cat1.prototype.speak1 = speak;

firstDog1 = new Dog1;
firstDog1.name = 'Roover';
firstDog1.breed = 'Doberman';
firstDog1.speak('Woooffff');

firstCat1 = new Cat1;
firstCat1.name = 'Miles';
firstCat1.breed = 'Liger';
firstCat1.speak1('Meow');

//Understanding call-and-apply invocation

let speak1 = function(what){
	console.log(this.love);
	console.log(this.normal);
}

let saySomething = {normal:'meow',  love: 'purr'}
speak1.call(saySomething);
//speak.apply(saySomething, ['meouff']); you can pass array wit apply



// Using the arguments parameter
let plus1 = function() {
	let sum = 0;
for (let i = arguments.length -1; i >= 0; i--) {
	sum += arguments[i];
	}
	return sum;
}
console.log(plus1(2,2,2,3));
