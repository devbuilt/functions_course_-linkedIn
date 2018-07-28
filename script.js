const companies = [

    { name: "Company One", category: "Finance", start: "1981", end: "2003" },
    { name: "Company Two", category: "Retail", start: "1980", end: "2009" },
    { name: "Company Three", category: "Auto", start: "1987", end: "2007" },
    { name: "Company Four", category: "Technology", start: "1984", end: "2010" },
    { name: "Company Five", category: "Finance", start: "2009", end: "2014" },
    { name: "Company Six", category: "Auto", start: "1995", end: "2003" },
    { name: "Company Seve", category: "Retail", start: "1986", end: "1996" },
    { name: "Company Eight", category: "Finance", start: "1988", end: "2016" },
    { name: "Company Nine", category: "Technology", start: "1987", end: "1989" },

];

const ages = [13, 45, 60, 24, 46, 27, 21, 25, 10, 11, 22, 17, 11, 19];


/*<------------------------------------------------------- ForEach ---------------------------------->*/

// for(let i = 0; i < companies.length; i++ ){
//     console.log(companies[i])

// }


//For Each
// const company = companies.forEach(function(company){
// console.log(company.name);
// });
/*<------------------------------------------------------- End ForEach ---------------------------------->*/





/*<------------------------------------------------------- Filter ---------------------------------->*/

// Get 21 or older
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

//Filter ES5 //Get 21 or older
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// })
// console.log(canDrink)

//Filter ES6 //Get 21 or older
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


//Fiter Companies ES5 with Retail
// const RetailCompanies = companies.filter(function (company){
//     if (company.category === "Retail"){
//         return true;
//     }
// })
// console.log(companies)

// //Filter ES6 Companies with retail
// const RetailCompanies = companies.filter(company => company.category === "Retail");


// console.log(RetailCompanies)

//
// Filter ES6 Get 1980 Companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// console.log(eightiesCompanies)


// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => ( company.end - company.start >= 10  ))
// console.log(lastedTenYears);


// /*<-------------------------------------------------- End Filter ---------------------------------->*/



/*<------------------------------------------------------- Map ---------------------------------->*/
//create an array of comany names
//ES5
// const companyNames = companies.map(function(company){
//     return company.name;
// })
// console.log(companyNames)

//ES6
// const companyNames = companies.map(company => company.name)
// console.log(companyNames)


// ES5 with ES6 Templeate String
// const testMap = companies.map(function (company){
//     return `${company.name}, [${company.start} - ${company.end}]}`;
// });
// console.log(testMap)

// ES6 with ES6 Templeate String
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap)

//ES6 Square Root Ages Array
// const agesSquareRoot = ages.map(age => Math.sqrt(age));
// console.log(agesSquareRoot);

// ES6 Multiply ages by 2
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

//ES6 how to use map multiple times Square Root & Ages Array joined
// const agesMap = ages
//         .map(age => Math.sqrt(age))
//         .map(age => age * 2)

// console.log(agesMap)
/*<-------------------------------------------------------End Map ---------------------------------->*/



/*<-------------------------------------------------------Sort ---------------------------------->*/

//Sort ES5
// const sortedCompanies = companies.sort(function(c1, c2){

//     if(c1.category > c2.category){
//         return 1;

//     }else{
//         return -1;
//     }
// });

// console.log(sortedCompanies);


//SORT ES6  ? means condition and : means else
// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : - 1 );

// console.log(sortedCompanies)


//Sort Ages  ES6 Accending order
// const sortAges = ages.sort((a,b) => a - b);

// Sort Ages ES6 Decending Order
// const sortAges = ages.sort((a,b) => b - a);
// console.log(sortAges)

/*<-------------------------------------------------------End Sort---------------------------------->*/





/*<------------------------------------------------------- Reduce ---------------------------------->*/

//Reduce


//for loop example
// var agesSum = 0;
// for(let i = 0; i < ages.length; i++){
//     agesSum += ages[i]

// }

// console.log(agesSum);

//ES5 reduce
// const ageSum = ages.reduce(function(total,age){
//     return total + age;

// }, 0);
// console.log(ageSum)

//ES6 Short hand
// const ageSum = ages.reduce((total,age) => total + age)
// console.log(ageSum)

//ES6 With Arrow Function
// const ageSum = ages.reduce((total,age) => total + age, 0);
// console.log(ageSum)

//ES5 Get Total Years all companies
// const totalYearsCompanies = companies.reduce(function(total,company){
//     return total + (company.end - company.start);

// },0);
// console.log(totalYearsCompanies)

//ES6Get total years for all companies
// const totalYearsCompanies = companies.reduce((total,company) => total +  (company.end - company.start),0)
// console.log(totalYearsCompanies)
/*<------------------------------------------------------- End Reduce ---------------------------------->*/



/*<------------------------------------- Combined Methods = Map, Filter, forEach, Reduce ---------------------------------->*/


// const combined = ages
//         .map(age => age)
//         .filter(age => age >= 40)
//         .sort((a,b)=> a - b)
//         .reduce((a, b) => a + b, 0)// Works this way as well .reduce((a,b) => a + b) without the 0 zero

// console.log(combined);

// const evenAges = ages
//     .filter(age => age % 2 === 0)
//     .sort((a,b) => a - b )

// console.log(evenAges)






    // let array = [
    //     { skill: 'css', user: 'Bill' },
    //     { skill: 'javascript', user: 'Chad' },
    //     { skill: 'javascript', user: 'Bill' },
    //     { skill: 'css', user: 'Sue' },
    //     { skill: 'javascript', user: 'Sue' },
    //     { skill: 'html', user: 'Sue' }
    // ];




    // function userOrder(stack,name){
        // let array = [
        //     { skill: 'css', user: 'Bill' },
        //     { skill: 'javascript', user: 'Chad' },
        //     { skill: 'javascript', user: 'Bill' },
        //     { skill: 'css', user: 'Sue' },
        //     { skill: 'javascript', user: 'Sue' },
        //     { skill: 'html', user: 'Sue' }
        // ];
        
    //     let newArray = [];
    //     for(let i = 0; i < array.length; i++){
    //         if(newArray === array){
    //             array.push(newArray[i])
    //             return newArray;
    //         }
    //     }
        
    // }
    // console.log(userOrder);



// function newArray(item,index){
//     var joinedArray = [item.skill, item.user].join(" ").replace();

//     return joinedArray;

// }
// function myFunction() {
//     document.getElementById("demo").innerHTML = array.map(newArray);
// }

// for (var i = 0; i < array.length; i++){
   

// console.log('run')
    // const newArray = array.reduce(function(x,y){
    //     if(x.indexOf(y) < 0) x.push(y);
    //     return x; 
    // },[]);
                

    // console.log(newArray)

// const newArray = array.reduce(function(x, y){
//     if (x.indexOf(y) < 0) x.push(y) + 1;
//     return x;
// },[]);
// console.log(newArray)


// [   expected output
//     { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//     { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//     { skill: 'html', users: ['Sue'], count: 1 }
// ]



// const newArray = array.map(function(arr){
//     return true;

// })

// console.log(newArray)


// var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

// var uniq = names.reduce(function (a, b) {
//     if (a.indexOf(b) < 0) a.push(b);
//     return a;
// }, []);

// console.log(uniq,name) // [ 'Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl' ]

// one liner
// return names.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []);


// function solve() {
//     var argument = Array.prototype.slice.call(arguments);
//     var a = 0, b = 0;
//     var alice = argument.splice(0, argument.length / 2);
//     var bob = argument.splice(0, argument.length);
//     for (i = 0; i < alice.length; i++) {
//         if (alice[i] > bob[i]) {
//             a++;
//         }
//         if (alice[i] < bob[i]) {
//             b++;
//         }
//     }
//     return [a, b];
// }

// console.log(solve())


/////--------------------------------------------------------- paypal ------------------------------------------/
[  
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
]

// [   //expected output
//     { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//     { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//     { skill: 'html', users: ['Sue'], count: 1 }
// ]

// Answer to paypal using reduce

const input = [{ skill: 'css', user: 'Bill' }, { skill: 'javascript', user: 'Chad' }, { skill: 'javascript', user: 'Bill' }, { skill: 'css', user: 'Sue' }, { skill: 'javascript', user: 'Sue' }, { skill: 'html', user: 'Sue' }]

console.log(Object.values(
    input.reduce((a, { skill, user }) => {
        if (!a[skill]) a[skill] = { skill, users: [], count: 0 };
        a[skill].users.push(user);
        a[skill].count++;
        return a;
    }, {})
));

//Answer to paypal using map

// var input = [{ skill: 'css', user: 'Bill' }, { skill: 'javascript', user: 'Chad' }, { skill: 'javascript', user: 'Bill' }, { skill: 'css', user: 'Sue' }, { skill: 'javascript', user: 'Sue' }, { skill: 'html', user: 'Sue' }],
//     result = Array.from(
//         input.reduce((m, { skill, user }) => m.set(skill, [...(m.get(skill) || []), user]), new Map),
//         ([skill, users]) => ({ skill, users, count: users.length })
//     );

// console.log(result);

let myUsers = [{
        skill: 'css',
        user: 'Bill'
        }, {
        skill: 'javascript',
        user: 'Chad'
        }, {
        skill: 'javascript',
        user: 'Bill'
        }, {
        skill: 'css',
        user: 'Sue'
        }, {
        skill: 'javascript',
        user: 'Sue'
        }, {
        skill: 'html',
        user: 'Sue'
    }]

const groupedUsers = myUsers.reduce((x,{skill,user}) => {
    if (!x[skill]) x[skill] = {
        skill,
        users: [],
        count: 0
    };
    x[skill].users.push(user);
    x[skill].count++;
    return x;

    }, {})
console.log(groupedUsers);

/////--------------------------------------------------------- paypal End------------------------------------------/

// var myMaze = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 1, 0, 0, 0, 1, 1, 2],
//     [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// var ms = new MazeSolver(myMaze)
// ms.traverse(3, 0);


// function MazeSolver(maze){
    
//     this.maze = maze;
//     this.traverse = function(column, row) {
//         if(this.maze[column][row] == 2){
//             console.log("We solved the maze at " + column + ", " + row);
//         }else if(this.maze[column][row] == 1){
//             console.log("We are on a valid path");
//             this.maze[column][row] = 0;
//             if(column < this.maze.length - 1){
//                     this.traverse(column + 1, row)
//             }
//             if(row < this.maze[column].length){
//                     this.traverse(column, row + 1)
//             }
//             if(column > 0){
//                     this.traverse(column -1, row);
//             }
//             if(row > 0){
//                     this.traverse(column, row - 1)
//             }
//         }
//     }

// }



// var testArray = [
//     ['2011-08-01 20:46:04', 10, 40, 20, 20],//same time
//     ['2011-08-01 20:46:04', 20, 45, 25, 70],

//     ['2011-09-01 17:02:04', 20, 35, 15, 25],

//     ['2012-10-01 16:55:44', 30, 30, 10, 30],//same time
//     ['2012-10-01 16:55:44', 40, 45, 13, 23]
// ],


//     dictionary = {}, result = [];

// testArray.forEach(function (element) {
//     var time = element[0],
//         currentValues = element.splice(1),
//         storedValues;

//     if (!dictionary[time]) {
//         dictionary[time] = currentValues;
//     }

//     storedValues = dictionary[time];

//     currentValues.forEach(function (currentElement, index) {
//         storedValues[index] = (currentElement + storedValues[index]) / 2;
//     })
// });

// for (var property in dictionary) {
//     if (dictionary.hasOwnProperty(property)) {
//         result.push([property].concat(dictionary[property]));
//     }
// }

// console.log(result);