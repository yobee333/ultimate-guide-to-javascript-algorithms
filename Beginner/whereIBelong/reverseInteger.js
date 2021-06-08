//Given an integer, return an integer that has the reverse ordering of that which was received. E.g
//reverseInteger(-123) // should return -321

// reverse a string reminder--need to convert number to string to reverse and create an array of characters from the string and reverse array. Join reversed array to form new string. Convert reversed string back to an integer with parseInt(). Add the sign with Math.sign()

function reverseString(text){
    return [...text].reduce((acc, char) => char + acc, '')
}

let reversedString = reverseString(num.toString())



// reverse an integer

function reverseInteger(num){
    let reversedNumber = parseInt(reversedString(num.toString()))

    return (reversedNumber * Math.sign(num))
}


//this does not work as written
reverseInteger(-123)