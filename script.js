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
let plus1 = function(number1,number2) {
	let sum = 0;
for (let i = arguments.length -1; i >= 0; i--) {
	sum += arguments[i];
	}
	return sum;
}
console.log(plus1(2,2,2,3));


//Using anonymous closures
var iKnow = function(){
	console.log('foo');

}();

// self exctuing function
(function(){
	console.log('foo');
})();

//Understanding hoisting and variable scope

function myDog(){
	var dogName = 'Fido';
		console.log(dogName + ' says Woooffff');
}
myDog();

//Creating and namespacing modules

let ray11 = (function(){
	let DEFUALTS = {
		say: 'hello',
		speed: 'normal'

	}
	return {
		speak: function() {
			let myArguments = arguments[0] || '';
			let statement = myArguments.say || DEFUALTS.say;
			console.log(statement);
			return this;

		},
		//Chaining module method calls
		run: function (){
				let myArguments = arguments[0] || '';
				let running = myArguments.speed || DEFUALTS.speed;
				console.log('running...' + running);
				return this;
		}

	};

})();

var countSheep = function (num){
let val = '';
for(let i = 1; i <= num; i++){
	val += `${i} sheep...`;
}
return val;
}
console.log(countSheep());


//

function positiveSum(arr){
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			total += arr[i];
		}

	}
	return total;
}
positiveSum();


function exoticCars(i){
	let autos = [['Acura'], 'Bmw', 'Lambo', 'Ferrari'];
	let spacedAutos = "";

	for (let i = 0; i < autos.length; i++) {
		spacedAutos += autos[i] + '<br>';
	}
	document.getElementById('demo').innerHTML = spacedAutos;
}
exoticCars();

function getAverage(marks){

	let total = 0;
for (let i = 0; i < marks.length; i++) {
	(total += marks[i]);

		}
	return Math.floor( total / marks.length);
	}

	console.log(getAverage([3,4,5,6,6,6], 1)
);
