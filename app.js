// alert("Welcome! Let's play a game of Wordplay! \nInstructions: \nYou will be given a set of letters and your job is to find all of the words you can make with these set of letters.");
var MIN_LENGTH = 3;
var MAX_LENGTH = 6;
function chooseWord(){ // randomly selects a 6-letter root word
    let word = dictionary[Math.floor(Math.random() * dictionary.length)];
    while(word.length !== MAX_LENGTH){
        word = dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    return word;
}

let theWord = chooseWord();
console.log(theWord) // making sure chooseWord() works. it works now!!

function scramble (str){ // scrambles the chosen word
    let theWord = str.split('');
    let n = theWord.length;
    for(var i=0; i<n-1; i++){
        var j = Math.floor(Math.random()*(i));
        var temp = theWord[i];
        theWord[i] = theWord[j];
        theWord[j] = temp;
    }
    str = theWord.join('');
    return str;
}

let scrWord = scramble(theWord);
console.log(scrWord); // making sure the scrambler works. it works

let rootWord = dictionary[Math.floor(Math.random() * dictionary.length)];

function appears(elem, list){
    let i = 0;
    let counter = 0;
    if(elem!=list[i]){
        return 0;
    }else{
        counter++;
        appears(elem, );
    }
}

function contains(chosenWord, otherStr){ // check if a word contains the letters of another word
    let arr1 = chosenWord.split('');
    let arr2 = otherStr.split('');
    if(arr2.every((elem=>arr1.includes(elem)))){
        return true;
    }else{
        return false;
    }
}

function otherWords(){ // returns the other words
    let list = "";
    for(let i=0; i<dictionary.length-1; i++){
        if(contains(rootWord, dictionary[i]) && dictionary[i].length>=3){
            list = list + dictionary[i] + ", ";
        }
    }
    return list;
}
// console.log(rootWord);
// console.log(otherWords());

// while(){

//     let input = prompt("Try to find as many words as you can with these letters!");

// }