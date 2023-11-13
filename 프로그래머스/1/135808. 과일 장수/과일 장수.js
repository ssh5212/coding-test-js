function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => a > b ? -1 : 1 )
    // console.log(score)
    
    var leng = score.length;

    for (var i = m-1; i < score.length; i = i + m) {
        leng = leng - m;
        // console.log(leng)
        if (leng < 0 ) break;
        answer = answer + (score[i] * m);
        // console.log("answer : ", answer)
        
    }
    
    
    return answer;
}