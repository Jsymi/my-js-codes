// For of loop

const arr = [23, 45, 67, 89,90]

for (const num of arr) {
 //   console.log(num);
}

const str = "Hello World!"

for (const greet of str) {
 //   console.log(greet);
}

//Map
const map = new Map();
map.set('CTC', "Cuttack")
map.set('BBSR', "Bhubaneswar")
map.set('P', "Puri")

//console.log(map);


for (const [key, value] of map) {
 //   console.log(key, ':-', value);
}

// We can't use for-of loop in objects.

// for-in loop

const myObject = {
    name: "Jasmin",
    age: 24,
    city: "Bhubaneswar",
    PIN: 751019
}

for (const key in myObject) {
//    console.log(key , myObject[key]);
}

const array = [45, 76, 83, 74,90]

for (const key in array) {
    console.log(key, array[key]);
}


// for-in loop never use for "Map"

// for-each loop

const coding = []