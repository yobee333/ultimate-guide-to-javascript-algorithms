//In this article, we build on our understanding of JavaScript and proficiency with array manipulation by building our own modified filter function.
//Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:
//arrayFilter(arr, func)
//Bear in mind that the function func will return true when the test is passed and false when it isn’t.


//imperative using for...of to iterate thru the received array while testing each element to see if it passes specified condition. 2. if statement to test by passing the current element into the received function. 3. if true, executes if block returning the current element. If nothing passes, it returns undefined

function arrayFilter(arr, func){
    for(let elem of arr){
        if(func(elem)){
            return elem
        }
    }
    return undefined
}

// filter() call filter on the received array with the provided function as an arugment. This returns an array of passing elements which are stored as filteredArray. Check if filteredArray contains any element in its first index filteredArray[0] using ternary operator. If it doesn't return undefined.

function arrayFilter(arr, func){
    let filteredArray = arr.Filter(func)
    return filteredArray[0] ? filteredArray[0] : undefined
}

// find() returns first value of the first element in the array that satisfies the provided testing function, otherwise returns undefined.

function arrayFilter(arr, func){
    return arr.find(func)
}