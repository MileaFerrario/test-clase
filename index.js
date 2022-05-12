const phrase = "Hello i am using Javascript";
function findLongestwords(str, num){
    let words = str.split(" ");
    let myLongestWord = [];
    for(let word of words) {
        if(word.length >= num) {
            myLongestWord.push(word);
        }
    }
    if(myLongestWord.length == 0){
        console.log("Ninguno de los elementos ingresados es superior a: " + num);
    }else{
        console.log(myLongestWord);
    }
}

findLongestwords(phrase, 5);