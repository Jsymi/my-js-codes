const user = new Object();

user.id = "11345"
user.name = "Rohan"
user.isLoggedIn = false

//console.log(user);

const newUser = {
    email: "user@yahho.com",
    fullname: {
        userfullname: {
            firstname: "Jasmin",
            lastname: "Panda"
        }
    }
}
// console.log(newUser);
// console.log(newUser.fullname);
// console.log(newUser.fullname.userfullname);
// console.log(newUser.fullname.userfullname.firstname); 

const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"a",
    5:"b",
    6:"c"
}

console.log(Object.keys(obj2));     //[ '4', '5', '6' ] all keys in array type.

console.log(Object.values(obj2));   // [ 'a', 'b', 'c' ]

console.log(Object.entries(obj2));  // [ [ '4', 'a' ], [ '5', 'b' ], [ '6', 'c' ] ]

// Syntax for merge all objects. 

// Syntax-1  
//const comobj = {obj1, obj2}      
// Syntax-2
//const comobj = Object.assign({}, obj1, obj2);  
// Syntax-3
const comobj = {...obj1, ...obj2}

//console.log(comobj);

