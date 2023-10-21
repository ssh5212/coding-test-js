function solution(nums) {
    var answer = 0;
    var maxCnt = parseInt(nums.length/2);
    
    var newNums = [];
    
    for (var i = 0; i < nums.length; i++) {
        if (newNums.includes(nums[i])) {
            continue;
        } else {
            newNums.push(nums[i])
        }
    }
    
    if (maxCnt < newNums.length) {
        answer = maxCnt;
    } else {
        answer = newNums.length
    }
    
    return answer;
}