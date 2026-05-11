'use strict';

let pigLatin = function(english){
  let word_array = english.split(' ')
  if(word_array.length == 1){
    return translation(english)
  }else{
    let result = ''
    for(let i = 0; i < word_array.length; i++){
      result += translation(word_array[i] );
    }
    return result
  }
}

  let translation = function(str){
  let word = str
  const vowels= 'aeiou'
  let first_letter= word[0]

  if(vowels.includes(word[0])){
    return word + 'ay '
  } else{
    for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i])){
        return word.slice(i) + word.slice(0,i) + 'ay ';
      }

    }
    
  }

};

console.log(pigLatin("hello"));
console.log(pigLatin("thrive"));
console.log(pigLatin("We are the change that we seek"));


module.exports = pigLatin;