//Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g
//rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9


// for loop sum is accumulator variable--accumulate the sum by adding the current value of the iterator on every iteration. Start at he minimum value received and add every number we encounter to our sum until we arrive at maximum number

function rangeSum(arr){
    let sum = 0
    for(i = arr[0]; i <= arr[1]; i++){
        sum += i
    }
    return sum
}

//arithmetic progression or arithmetic sequence. The sum of the first n terms in an arithmetic sequence is (n/2)⋅(a₁+aₙ). It is called the arithmetic series formula. n = maximum limit - minumum limit +1

function rangeSum(arr){
    return ((arr[1] - arr[0] + 1) * (arr[0] + arr[1]))/2
}



//RECURSION 1. specify terminating case such that as soon as the maximum and minimum limits are equal, the recursion terminates by returning the current minimum ie arr[0] 2. while we continually reduce the value of the maximum limit by 1 for each recursive cycle ie arr[1]-1, we sum up all the maximum limits up until the minimum limites equals the maximum limit

function rangeSum(arr){
    if(arr[0] == arr[1]){
        return arr[0]
    }else{
        return ([arr[0], arr[1], 1]) + arr[1]
    }
}

//wtf is this


// reduce() 1. generate an arry containing all the numbers found in specified range. 2. start at 0 index and push every value of i into empty arrList 3. reduce method starting with 0 as initial value and accumulator add current number num from the array list to the accumulator and then move to the next

function rangeSum(arr){
    let arrList = []
    for (let i= arr[0]; i <= arr[1]; i++){
        arrList.push(i)
    }
    return arrList.reduce ((acc, num) => acc + num, 0)
}

rangeSum([1,9])