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

// let Dog = function () {
// 	let name, breed;
// 	return console.dir(this);
// }
//
// firstDog = new Dog;
// firstDog.name = "Roover";
// firstDog.breed = "Doberman";
//
// secondDog = new Dog;
// secondDog.name = "Nova";
// secondDog.breed = "Yorkie";

//Expanding functionality through prototype
let speak = function(sayWhat){
	console.log(sayWhat);
}

let Dog = function () {
	let name, breed;

};
let Cat = function () {
	let name, breed;

};

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Roover";
firstDog.breed = "Doberman";
firstDog.speak("Woooffff");

firstCat = new Cat;
firstCat.name = "Miles";
firstCat.breed = "Liger";
firstCat.speak("Meow");
