const companies = [

    { name: "Company One", category: "Finance", start: "1981", end: "2003" },
    { name: "Company Two", category: "Retail", start: "1980", end: "2008" },
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
// companies.forEach(function(company){
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


//Filter ES6 //Get 21 or older
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


//Fiter Companies ES5 with Retail
// const RetailCompanies = companies.filter(function (company){
//     if (company.category === "Retail"){
//         return true;
//     }
// })

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


/*<-------------------------------------------------- End Filter ---------------------------------->*/



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

//ES6 Squre Rote Ages Array
const agesSquareRoot = ages.map(age => Math.sqrt(age));

console.log(agesSquareRoot)

/*<-------------------------------------------------------End Map ---------------------------------->*/


//Sort

//Reduce