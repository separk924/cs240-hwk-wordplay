var MIN_LENGTH = 3;
var MAX_LENGTH = 6;
var theWord = chooseWord();
var guessedWords = [];

alert("Welcome! Let's play a game of Wordplay! \nInstructions: \nYour job is to find all of the words you can make with a given set of letters.");
console.log(theWord);
console.log(otherWords());
rootWord = scramble(theWord);
console.log(rootWord);
var resp = null;
var str = '';
do{
    resp = prompt("Enter a guess:");
    str += "Available letters: " + rootWord + "\n";
    str += underscore(otherWords(), resp);
    console.log(str);
    if(resp != null && resp == "*"){
        rootWord= scramble(rootWord);
        alert("Shuffling root word");
    }else if(resp != null && resp.length < MIN_LENGTH){
        alert("Guess is too short!");
    }else if(resp != null && resp.length > MAX_LENGTH){
        alert("Guess is too long!");
    }else if(resp != null && guessedWords.includes(resp)){
        alert("Already guessed " + resp + "!");
    }else if(resp != null && descrambledWords.includes(resp)){
        alert("Correct! " + resp);
        guessedWords.push(resp)
    }else{
        alert(resp + " is not a word!");
    }
    //console.clear();
}while(null != resp && guessedWords.length<otherWords().length);

var key = "You answered " + guessedWords.length + " out of " + otherWords().length + "!\n";
for(let i=0; i<otherWords().length; i++){
    var words = otherWords()[i];
    key = key + words + "\n";
}
console.log(key);

function chooseWord(){ // randomly selects a 6-letter root word
    let word = dictionary[Math.floor(Math.random() * dictionary.length)];
    while(word.length !== MAX_LENGTH){
        word = dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    return word;
}

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

function appears(elem, list){
    let i = 0;
    if(list.length == 0){
        return 0;
    }else{
        const result = list.filter(num => num==elem)
        return result.length;
    }
}

function contains(chosenWord, otherStr){ // check if root word contains the letters of another word
    let arr1 = chosenWord.split('');
    let arr2 = otherStr.split('');
    if(arr2.every(elem=>arr1.includes(elem))){
        if(arr2.every(x=>appears(x, arr2)==arr1.every(x=>appears(x, arr1)))){
            return true;
    }else{
        return false;
    }
}
}

function otherWords(){ // returns the other words
    let list = [];
    for(let i=0; i<dictionary.length-1; i++){
        if(contains(theWord, dictionary[i]) && dictionary[i].length>=3 && dictionary[i].length<=6 ){
            list.push(dictionary[i]);
        }
    }
    return list;
}

function underscore(list, guess){
    var k = 0;
    for(let i=0; i<=list.length-1; i++){
        if(list.includes(guess)){
            str += (guess + '\n');
        }else{
        for(let j=0; j<=list[k].length-1; j++){
            str += "_ ";
        }}
        str += '\n'
        k++;
    }
    return str;
}