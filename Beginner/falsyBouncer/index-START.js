/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// for...of loop to loop thru every value. if the value returns true, it gets pushed into the new array. If it's false, move on to the next one


function falsyBouncer(array) {
    let result = []
    for(value of array){
        if(value){
            result.push(value)
        }
    }
    return result
}


// .filter() test each element with the Boolean function to see if true or false. Filter out false.

function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value)
    })
}

module.exports = falsyBouncer