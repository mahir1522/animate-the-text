const words = ["Programer", "Coder", "Hacker"];
let word = 0;
let letter = 0;
let currentWord = "";
let currentletter = "";

(function type(){
    if(word === words.length){
        word=0;
    }
    currentWord = words[word];
    currentletter = currentWord.slice(0, ++letter);

    document.querySelector(".typing").textContent = currentletter;
    if(currentletter.length === currentWord.length){
        word++;
        letter = 0;
    } 
    setTimeout(type, 200);
})();
