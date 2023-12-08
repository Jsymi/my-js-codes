const coding = ["java", "js", "Python", "Ruby"]

coding.forEach( (item) =>{
  //  console.log(item);      //java js Python Ruby
})

// const value = coding.forEach( (item) => {
//     return item;
// })

// console.log(value);

// Note- Using forEach we can only print the values but we can't store and return the value from variable.

// Filter
//const num = [1, 2, 23, 78, 98]

// const newNum = num.filter( (num) =>{
//     return (num > 4)
// })

//console.log(newNum);

// Map

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map( (num) =>{
//       return num+10;
// })

const newNum = myNum
          .map( (num) => num * 10)
          .map( (num) =>{
            return num + 1
          })
          .filter( (num)=>{
            return num >= 30 && num <= 80
          })

//console.log(newNum);

// Reduce 

const no = [1, 78, 56, 45]

const totalNo = no.reduce( (acc, curval)=>{
      console.log(`acc:- ${acc} and curval:- ${curval}`)
      return acc + curval
}, 0)

console.log(totalNo);