function solution(array) {
    var answer = 0;
    var answerCnt = 0;
    
    var arrayCnt = [];
    
    for (var i = 0; i <= 1000; i++) {
        arrayCnt[i] = 0;
    }
    
    for (var i = 0; i < array.length; i++) {
        arrayCnt[array[i]] += 1;
    }
    
    for (var i = 0; i <= 1000; i++) {
        if (answerCnt < arrayCnt[i]) {
            answer = i;
            answerCnt = arrayCnt[i];
        } else if (answerCnt == arrayCnt[i]) {
            answer = -1;
        }
        
    }
    
    return answer;
}