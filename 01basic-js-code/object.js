// declare a symbol and use in boject.

const mySym = Symbol()

// Take this symbol name and declare in object key section.

const user = {
    name: " Jasmin",
    "full name": "Jasmin Panda",
   // mySym: "Keys1",     // This not a correct way to declare a symbol 
    [mySym]:"Keys1",
    age: 24,
    location: " Bhubaneswar",
    email: "jasmi@goggle.com",
    isLoggedIn:  false,
    lastLoggedIn: ["Monday", "Wednesday", "Friday"]
}

// We can fetch value by two methods

// console.log(user.age)     //Mostly used
// console.log(user["age"]);   //Used in special cases

// We didn't use . for "full name" there we have to use [] and for symbol also we use []....
console.log(user["full name"]);
console.log(user[mySym]);

// To change the value
user.age = 28;
// To lock the value
//Object.freeze(user);

user.location = "Odisha"
console.log(user)

// We can use functions with our objects
user.greeting = function(){
    console.log("Hello User");
}

user.greetingTwo = function(){
    console.log(`Hello ${this.name}`);  // Use "this" for fetch own data.
}

console.log(user.greeting);     // [Function (anonymous)]
console.log(user.greeting());   // Hello user.

console.log(user.greetingTwo());