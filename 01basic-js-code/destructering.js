const course = {
    name:"Java",
    price:5000,
    instrustor: "Hemant"
}

//console.log(course.instrustor);   we can write in another way

//const {instrustor} = course;  we have another way

//console.log(instrustor);      //Hemant

const {instrustor: teacher} = course

console.log(teacher);       //Hemant
