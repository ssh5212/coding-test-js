function solution(array) {
    var answer = 0;
    
    array.sort((a, b) => (a > b ? 1 : -1));
    
    // console.log(array);
    
    var index = parseInt(array.length / 2);
    
    // console.log(index);
    
    answer = array[index];
    
    return answer;
}