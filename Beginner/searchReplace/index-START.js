

//stringOfText.replace(pattern, replacement)


//replace() use if statement to check the first letter of the word matches the uppercase equivalent of the letter. If it does, we convert the first letter of the newWord(replacement) to uppercase and append the rest of the lowercase letters retrieved using the .slice() method. We now have the newWord in same case as the word to be replaced (word) and the replacement (newWord). This returns a new sentence with swapped words.

function searchReplace(str, word, newWord){
    if(word[0] === word[0].toUpperCase()){
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}


//regex--use RegExp() to create a regex out of the word to be replaced. /[A-Z]/ within the if statement to see if the first letter is capitalized, if it is, adjust newWord accordingly. 

function searchReplace(str, word, newWord){
    let regex = new RegExp(word, "gi")
    if (/[A-Z]/.test(word[0])){
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
    return str.replace(regex, newWord)
}

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 