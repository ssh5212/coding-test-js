function solution(brown, yellow) {
    var answer = [];
    
    for (var i = 1; i <= yellow; i++) {
        if (yellow % i == 0) {
            var w = yellow / i;
            var h  = i;
            
            if (((w + 2) * 2) + (h * 2) == brown) {
                answer[0] = w + 2;
                answer[1] = h + 2;
                break;
            }
            
        } 
    }
    
    return answer;
}