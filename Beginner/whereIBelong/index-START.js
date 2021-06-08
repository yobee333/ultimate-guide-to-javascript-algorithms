/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//for loop for greater values 1. use .sort() to arrange the values in ascending order. 2. iterate thru with for loop while comparing each value with specified num. 3. if value is greater than num, return the value of i which is also the index at which the first larger value was found. If none of the values are larger, if means it will go to the end, so return lenght of the array which is the next index to be filled

function whereIBelong(arr, num) {
   arr.sort((a, b) => {
      return a - b
   })
   for (let i = 0; i < arr.length; i++){
      if(arr[i] >= num){
         return i
      }
   }
   return arr.length
}

//for loop for smaller values 1. set counter to keep count of the number of smaller values. Check if the specified value num is greater than current value under evaluation arr[i], if it is, increase counter by 1. Return counter which is the number of smaller values ie the position where the number should be inserted **significantly faster

function whereIBelong(arr, num){
   let counter = 0
   for(i=0; i < arr.length; i++){
      if(num > arr[i]){
         counter++
      }
      
   }
   return counter

}

//while loop 1. sort in ascending order 2. iterate thru and increase counter each time the specified number num is greater than the current value arr[counter]

function whereIBelong(arr, num){
   arr.sort((a, b) => {
      return a - b
   })
   let counter = 0
   while(num > arr[counter]){
      counter++
   }
   return counter
}

//find index directly 1. push num into the array. 2. sort elements in asceding order 3. call indexOf() to find placement of num

function whereIBelong(arr, num){
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}




module.exports = whereIBelong