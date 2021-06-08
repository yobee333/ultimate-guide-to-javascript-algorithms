//Imperative approach

function pigLatin(str){
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']//initialize array of vowels
    let vowelIndex = 0//initialize vowelIndex to 0

    if(vowels.includes(str[0])){//if first letter is a vowel
        return str = 'way'
    }else{
        for(let char of str){//if first letter is a consonant
            if(vowels.includes(char)){//loop thru until find first vowel
                vowelIndex = str.indexOf(char);//store index at which first vowel exists
                break;
            }
        }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay' //compose final string
    }
    
}

//declarative approach

// function pigLatin(str){
//     return str
//     .replace(/^([aeiouy])(._)/, '$1$2way')
//     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// }

pigLatin('happy birthday')
