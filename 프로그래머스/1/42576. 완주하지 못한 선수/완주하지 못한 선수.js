function solution(participant, completion) {
    var answer = '';
    
    var map = new Map();
    
    for (var i = 0; i < participant.length; i++) {
        var a = participant[i];
        map.set( a, (map.get(a) || 0) + 1 );
        
        if (i != participant.length - 1) {
            var b = completion[i];
            map.set( b, (map.get(b) || 0) - 1 );
        }

    }
    
//     for (var i = 0; i < completion.length; i++) {

//     }
    
    for (var i = 0; i < participant.length; i++) {
        if (map.get(participant[i]) == 1) {
            answer = participant[i]
            break;
        }
    }
    
    return answer;
    
}