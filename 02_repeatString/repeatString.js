const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR";
    }
    var answer="";
    for(var i=0; i<num; i++){
        answer += str;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
