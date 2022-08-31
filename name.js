const IPF = document.getElementById("IPF");
const NameInput = document.getElementById("NameInput");
const Span = document.getElementById("span");

let NameValue;
let SavedName = localStorage.getItem("name");


function submitevent(){
    NameValue = NameInput.value;
    localStorage.setItem("name", NameValue);
    event.preventDefault();
    IPF.innerText = `안녕하세요 ${NameValue}님!`;
    Span.innerText = `안녕하세요 ${NameValue}님!`;
};


if(SavedName !== null){
    IPF.innerText = `안녕하세요 ${SavedName}님!`;
    Span.innerText = `안녕하세요 ${SavedName}님!`;
}
IPF.addEventListener("submit", submitevent);