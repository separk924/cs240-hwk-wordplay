alert("Welcome! Let's play a game of Wordplay! \nInstructions: \nYou will be given a set of letters and your job is to find all of the words you can make with these set of letters.");
let index = Math.floor(Math.random() * dictionary.length);
let word = dictionary[index];
console.log(word);
function scramble (str){
    function chooseWord(str){ // randomly selects a 6-letter root word
        var theWord = str.split('');
        while(theWord.length!=6){
            word = dictionary[index];
        }
        str = theWord.join('');
        return str;
    }
    var theWord = str.split('');
    var n = theWord.length;
    for(var i=0; i<n-1; i++){
        var j = Math.floor(Math.random()*(i));
        var temp = theWord[i];
        theWord[i] = theWord[j];
        theWord[j] = temp;
    }
    str = theWord.join('');
    return str;
}
let scrWord = scramble(word);
console.log(scrWord);
// while(){

//     let input = prompt("Try to find as many words as you can with these letters!");

// }