/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


//Looping thru the ARRAY 1. initialize empty array result which we will use to store every smaller group(chunk) that is created--add each element to a group(sub-array) within result array until all elements are assigned. 2. use an if statement in the for...of loop to check if the result array is empty or if the last sub-array created is complete ie specified size. 3. If the sub array is the specified size, create a new group(sub array) with the current value as an element and push into the result array. If it's not, retrieve the last array from result and push the current value into it until the required size is reached. 4. return result which is an array of all the sub arrays created throughout the iteration.

function chunkArray(array, size) {
    let result = []
    for(value of array){
        let lastArray = result[result.length - 1]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        }else{
            lastArray.push(value)
        }
    }
    return result

}

//Looping thru the CHUNKS 1. .splice() changes the received array directly, we use spread operator to create a copy arrayCopy so our operations do not affect the data received. 2. We conitinuously extract elements of the specified size using a while loop that will execute as long as the arrayCopy length is longer than 0. 3. Each sub array created is then added to the result using .push()

function chunkArray(array, size){
    let result = []
    let arrayCopy = [...array]
    while(arrayCopy.length > 0){
        result.push(arrayCopy.splice(0, size))
    }
    return result
}


// .slice() use for-loop to iterate thru the array while repeatedly slicing off chunks of the specified size using slice. Iterator is in increments of size to start each new group from where the previous ended. **fastest method

function chunkArray(array, size){
    let result = []
    for(let i=0; i<array.length; i+=size){
        let chunk = array.slice(i, i+size)
        result.push(chunk)
    }
    return result
}

//RECURSION reduce the size of the array by slicing off chunks of the required size until all elements within the array have been grouped. Add a conditional at the beginning to set terminating condition, so then when the number of remaining elements is <= the specified size, we simply return the remaining elements as one group

function chunkArray(array, size){
    if(array.length <= size){
        return[array]
    }
    return[array.slice(0, size), ...chunkArray(array.slice(size), size)]
}

module.exports = chunkArray