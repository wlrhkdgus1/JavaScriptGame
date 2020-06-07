var m1 = document.getElementById("m1");
var 버튼 = document.getElementById("버튼");
var m2 = document.getElementById("m2");
var 결과창 = document.getElementById("결과창");
var 폼 = document.getElementById("폼");
폼.addEventListener('click', function asd(e){    
  e.preventDefault();
    if(m1.textContent[m1.textContent.length -1] === m2.value[0]){
  m1.textContent = m2.value;
  결과창.textContent = "딩동댕";
  m2.value = "";
  m2.focus();
    }else{
   결과창.textContent = "땡";
   m2.value ="";
   m2.focus();
    }
});