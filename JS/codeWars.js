let arr1 = [8,6,3,4]
let arr2 = [5,2,7,1,1,2]
// let mergeArray = []

mergeArrays(arr1,arr2)

function mergeArrays(arr1, arr2) {
    let mergeArray = arr1.concat(arr2)
    console.log(mergeArray.sort())
    
    // return mergeArray.sort()
    
}



//? Реализация через push
// mergeArrays(arr1,arr2)

// function mergeArrays(arr1, arr2) {
//     let mergeArray = []
//     for (let i = 0; i < arr1.length; i++) {
//         mergeArray.push(arr1[i])
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         mergeArray.push(arr2[i])
//     }
//     return mergeArray.sort()
    
// }

// console.log(mergeArrays(arr1,arr2))


