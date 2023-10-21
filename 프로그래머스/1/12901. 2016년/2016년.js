// 31 28(29) 31 30 31 30 31 31 30 31 30 31

function solution(a, b) {
    
    var weekName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var weekOnDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var answer = '';
    var nowWeekName = 4;
    
    var calendar = new Array(13);
    
    for (var i = 1; i < weekOnDay.length; i++) {
        calendar[i] = new Map();
        for (var j = 1; j <= weekOnDay[i]; j++) {
            nowWeekName = (nowWeekName + 1) % 7;
            calendar[i].set(j, weekName[nowWeekName])
        }
    }
    
    answer = calendar[a].get(b);
    
    
    
//     for (var i = 0; i < calendar.length; i++) {
//         calendar[i] = new Array(6);
        
//         for (var j = 0; j < calendar.length; j++) {
//             calendar[i][j] = new Array(7).fill(0);
//         }
        
        
//     }

    // console.log(calendar)
    
    
    
    
    return answer;
}