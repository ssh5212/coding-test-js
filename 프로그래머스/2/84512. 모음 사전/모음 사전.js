var alphabet = ['A', 'E', 'I', 'O', 'U'];
var nowAns = 0;
var totalAns = 0;
var wordList = [];

function solution(word) {
    var answer = 0;
    
    bfs(0, '', word);
    // console.log(wordList)
    
    for (var i = 0; i < wordList.length; i++) {
        if (wordList[i] === word) {
            answer = i;
            break;
        }
    }
    
    return answer;
}

function bfs (length, nowWord, word) {
    if (length > 5) return;
    
    wordList.push(nowWord);
    
    for (var i = 0; i < alphabet.length; i++) {
        bfs(length + 1, nowWord + alphabet[i])
    }
}