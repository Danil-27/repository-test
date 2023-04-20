// ForEach - для каждого

let arr = [1,2,6,77,53,1,4,5,1]
let acc = 0;

// Вывлжим елемент шндекс массив 
arr.forEach((el, i , arr) =>{
    // console.log( el, i, arr) 
})


// суммировали каждый элемент в массиве 
arr.forEach( (element) => {
    acc = element + acc
 })
// console.log(sum) 150

arr.forEach( (element) => {
    acc += element
})
// console.log(sum) 300


function nam() { console.log("hello world!")}
nam()