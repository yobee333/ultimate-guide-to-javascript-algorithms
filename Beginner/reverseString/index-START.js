/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//chaining in built in methods

function reverseString(text) {
    return text.split("").reverse().join("")
}

//using spread operator will also spread the letters into an array--spread operator like taking a deck of cards and spreading them out
function reverseString(text){
    return[...text].reverse().join('')
}


//FOR LOOP starting with the index of the last character in the string. Append last characture to result variable which is empty string and keep going until string is no longer greater than or equal to 0

function reverseString(text){
    let result = ""
    for(let i=text.length - 1; i>= 0; i--){
        result += text[i]
    }
    return result
}

//FOR OF LOOP--run through each character in the text received and append it to the beginning of a new variable result which we return on completion as it now holds the reversed string

function reverseString(text){
    let result = ""
    
    for(let char of text){
        result = char + result
    }
    return result
}

//RECURSIVE First check for an empty string known as terminal case ie the case that ends the recursion otherwise it will be an endless loop! When text is empty, we return an empty string and the function terminates. When it's not, we call reverseString() function and a new string created by removing the fist character of the text is passed in.

function reverseString(text){
    if (text === ""){
        return ""
    }else{
        return reverseString(text.substr(1)) + text[0]
    }
}


//REDUCE method Split text into an array of charcters then call the .reduce() method which begines with an empty string as the initial value and accumulates each character in reverse until it has gone thru all the characters in the array. At this point it returns the completely reversed string

function reverseString(text){
    return text.split("").reduce((acc,char) => char + acc, '')
}


//REDUCE with spread operator

function reverseString(text){
    return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString