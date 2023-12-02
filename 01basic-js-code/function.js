// Pass multiple parameters in a function using rest operator(...)

function calculator(...num){
    return num
}

//console.log(calculator(24, 87, 65, 90, 56, 45))

// How to pass objects in function

const user = {
    userName: "Jasmin",
    age : 24
}

function handleObject (anyobject){
        console.log( anyobject.age)
}

handleObject(user)

// // How to pass arrays in function

const myArray = [54, 89, 300, 567, 890]

function handleArray(newArray){
        return newArray[3]
}

console.log(handleArray(myArray));