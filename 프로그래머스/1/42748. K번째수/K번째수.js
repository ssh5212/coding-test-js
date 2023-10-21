function solution(array, commands) {
    var answer = [];
    
    for (var i = 0; i < commands.length; i++) {
        var nowArray = array.slice(commands[i][0] - 1, commands[i][1]);
        
        // console.log(nowArray)
        
        nowArray.sort((a, b) => (a > b ? 1 : -1));
        answer[i] = nowArray[commands[i][2] - 1];
        
    }
    
    
    return answer;
}