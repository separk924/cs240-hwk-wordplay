/**
 * Global variables
*/
var MIN_LENGTH = 3;
var MAX_LENGTH = 6;
var theWord = chooseWord(); // the root word
var guessedWords = [];  // list of words that have been guessed
var lst = []; // list of the combinations of the root word in otherWords()function

/**
 * This is the game Wordplay
 */
alert("Welcome! Let's play a game of Wordplay! \nInstructions: \nYour job is to find all of the words you can make with a given set of letters.");
rootWord = scramble(theWord);
var resp = null;
var str = '';
do{
    str = "Available letters: " + rootWord + "\n";
    for(let i=0; i<=otherWords().length; i++){
        str += underscore(otherWords(), resp)[i] + "\n";
    }
    console.log(str);
    resp = prompt("Enter a guess:");
    if(resp != null && resp == "*"){
        rootWord= scramble(rootWord);
        alert("Shuffling root word");
    }else if(resp != null && resp.length < MIN_LENGTH){
        alert("Guess is too short!");
    }else if(resp != null && resp.length > MAX_LENGTH){
        alert("Guess is too long!");
    }else if(resp != null && guessedWords.includes(resp)){
        alert("Already guessed " + resp + "!");
    }else if(resp != null && otherWords().includes(resp)){
        alert("Correct! " + resp);
        guessedWords.push(resp)
    }else if(resp != null && !otherWords().includes(resp)){
        alert(resp + " is not a word!");
    }
    console.clear();
}while(null != resp && guessedWords.length<otherWords().length);

var key = "You answered " + guessedWords.length + " out of " + otherWords().length + "!\n";
for(let i=0; i<otherWords().length; i++){
    var words = otherWords()[i];
    key = key + words + "\n";
}
key = key + "The root word was: " + theWord + "\n";
console.log(key);

/**
 * This function randomly selects a 6-letter root word
 * @returns word The root word
 */
function chooseWord(){
    let word = dictionary[Math.floor(Math.random() * dictionary.length)];
    while(word.length !== MAX_LENGTH){
        word = dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    return word;
}

/**
 * This function scrambles the inputted word
 * @param str The word to be scrambled
 * @returns str The scrambled word
 */
function scramble (str){
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

/**
 * This function counts the amount of times a certain element appears in a list
 * @param elem The inputted element
 * @param list The list of elements
 * @returns int The amount of times an element appears in the inputted list
 */
function appears(elem, list){
    if(list.length == 0){
        return 0;
    }else{
        let result = list.filter(num => num==elem)
        return result.length;
    }
}

/**
 * This functon checks if the root word contains the letters of another word
 * @param chosenWord The root word
 * @param otherStr The other word that is being compared to
 * @returns boolean Whether the letters of the other word are the same as the letters in the root word
 */
function contains(chosenWord, otherStr){
    let arr1 = chosenWord.split('');
    let arr2 = otherStr.split('');
    
    if(arr2.every(elem=>arr1.includes(elem))){
            if(arr2.every(x=>appears(x, arr2)==arr1.every(x=>appears(x, arr1)))){
                return true;
            }return false;
        }return false;
    }

/**
 * This function returns a list of the other sub-words of the root word
 * @returns list The list of the sub-words
 */
function otherWords(){
    let list = [];
    for(let i=0; i<dictionary.length-1; i++){
        if(contains(theWord, dictionary[i]) && dictionary[i].length>=3 && dictionary[i].length<=6 ){
            list.push(dictionary[i]);
        }
    }
    return list;
}

/**
 * This function outputs "_" for every letter of every word 
 * or the correct word in the spot it should be in if it was guessed
 * by the user
 * @param list The list of sub-words
 * @param guess The user's guessed-word
 * @returns lst The list of "_" for unguessed words & the guessed words
 */
function underscore(list, guess){
    for(var i=0; i<list.length-1; i++){
        let string = '';
        for(var j=0; j<list[i].length;j++){
            string += "_ ";
        }
        lst.push(string);
    }
    if(list.includes(guess)){
        lst.splice(list.indexOf(guess), 1, guess);
    }
    return lst;
}