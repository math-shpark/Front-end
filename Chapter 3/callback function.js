function callTenTimes(callback){
    for (var i = 0; i < 10; i++){
        callback();
    }
}

var callback = function(){
    alert('콜백 함수가 호출되었습니다.');
};

callTenTimes(callback);