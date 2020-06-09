var left = 0;
var 딕셔너리 = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

//left는 컴퓨터가 내는 것
function 컴퓨터의선택(left){
    return Object.entries(딕셔너리).find(function(y){
        return y[1]===left;
    })[0];
}

var 인터벌;
function 인터벌메이커(){
    clearInterval(인터벌);
    인터벌 = setInterval(function() {
        //컴퓨터 다음 낼 것 미리 정하기 순환 
        if(left === 딕셔너리.바위){
            left = 딕셔너리.가위;
        } else if (left === 딕셔너리.가위){
            left = 딕셔너리.보;
        } else {
            left = 딕셔너리.바위;
        }
        document.querySelector('#computer').style.background = 
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + left + ' 0'+' no-repeat';
    }, 100);
}
인터벌메이커();
var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1,
};
// 나\컴퓨터 가위 바위 보
//     가위 1 1  1 0 1 -1
//     바위 0 1  0 0 0 -1
//       보-1 1 -1 0 -1 -1
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(인터벌);
        setTimeout(function(){
            인터벌메이커();
        },1000);
        var 나의선택 = this.textContent;
        console.log(나의선택,컴퓨터의선택(left));
        if(점수표[나의선택] - 점수표[컴퓨터의선택(left)]=== 0){
            console.log("비겼습니다.");
        }else if(점수표[나의선택]-점수표[컴퓨터의선택(left)] === -1 ){
            console.log("이겼습니다.");

        }else if(점수표[나의선택]-점수표[컴퓨터의선택(left)]===2){
            console.log("이겼습니다.");

        }
        else{
            console.log("졌습니다.");
        }
        // if(나의선택 ==='가위'){
        //     if(컴퓨터의선택(left)==='가위'){
        //         console.log("비겼습니다");
        //     }else if(컴퓨터의선택(left)==='바위'){
        //         console.log("졌습니다.");
        //     }else{
        //         console.log("이겼습니다.");
        //     }
        // }else if(나의선택==='바위'){
        //     if(컴퓨터의선택(left)==='가위'){
        //         console.log("이겼습니다.");
        //     }else if(컴퓨터의선택(left)==='바위'){
        //         console.log("비겼습니다.");
        //     }else{
        //         console.log("졌습니다.");
        //     }
        // }else if(나의선택 ==='보'){
        //     if(컴퓨터의선택(left)==='가위'){
        //         console.log("졌습니다.");
        //     }else if(컴퓨터의선택(left)==='바위'){
        //         console.log("이겼습니다.");
        //     }else{
        //         console.log("비겼습니다.");
        //     }
        // }
    });
});