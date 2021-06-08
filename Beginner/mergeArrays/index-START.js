/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//Accessing the argument--converts array-like objects or iterable object into an array

// function mergeArrays(){
//     let arrays = Array.from(arguments)
// }

//using the new improved ES6 rest parameter syntax--combines all arguments irrespective of the number into one array

// function mergeArrays(...arrays){
//     console.log(arrays)
//     //more code here
// }

//combining arrays (still with duplicates) 1. for each array, use spread operator to spread its elements as well as the elements in the joint array which is initally empty, into a new array. 2. assign this array to jointArray which now contains all the elements from all the arrays received

function mergeArrays(...arrays){
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
}

//remove duplicates using sets 1. use spread operator to spread all the elements of the jointArray into the new set. 2. spread the unique elements of the set back into an array and return

function mergeArrays(...arrays){
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return [...new Set([...jointArray])]
}


//same thing but using .arrayFrom()

function mergeArrays(...arrays){
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return Array.from(new Set([...jointArray]))
}

// .filter()  retrieve the first index at thiwch the current item can be found whithin the array and compare it with the current index for that iteration. If the values match, then it's the first time the element occurs in the array, passes filter test, and is added to unique array. If it doesn't pass, it's fitered out. **fastest


function mergeArrays(...arrays){
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    return uniqueArray
}


// .reduce() method to continuously execute a function that checks if the current item is already in the accumulator array newArray (accumulator is initially set as an empty array). If element is already in the array, we return array as is to be used in the next iteratorn. If it's not, we return a new array which we create from the elements of the accumulator newArray and the current tiem. This new array is used as the accumulator in the next iteration. At the end of the process, uniqueArray contains all elements of the merged arrays with no duplicates.

function mergeArrays(...arrays){
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) => {
        if(newArray.includes(item)){
            return newArray
        }else{
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}



module.exports = mergeArrays