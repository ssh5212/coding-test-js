var answer = 0;
var v = [];

function recursive(index, numbers, target) {
    if (index == numbers.length) {
        var nowAnswer = 0;
        for (var i = 0; i < numbers.length; i++) {
            if(v[i] == true) {
                nowAnswer += numbers[i];
            } else {
                nowAnswer -= numbers[i];
            }
        }
        
        if (nowAnswer == target) {
            answer += 1;
        }
        return;
    }
    
    v[index] = true;
    recursive(index + 1, numbers, target);
    v[index] = false;
    recursive(index + 1, numbers, target);
}

function solution(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        v[i] = false;
    }
    
    recursive(0, numbers, target);
    
    return answer;
}