const Span = document.getElementById("span");
let SavedName = localStorage.getItem("name");
if(SavedName !==null){
    Span.innerText = `안녕하세요 ${SavedName}님!`;
}else{
    Span.innerText = `HOME으로 가 이름을 입력해 주세요`
}

