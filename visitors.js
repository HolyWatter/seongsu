let IPN = document.getElementById("PutName");
let BTN = document.getElementById("BTN")
let IDF = document.getElementById("IDF");
let VUL = document.getElementById("List");

let visitors = [];

function paintVisitor(){
    visitors.push(IPN.value);
    VUL.innerText = visitors;
    localStorage.setItem("visitors", JSON.stringify(visitors));
    IPN.value="";
}

function Dprevent(event){
    event.preventDefault();
    paintVisitor();
}
IDF.addEventListener("submit", Dprevent);

const SavedVisitor = localStorage.getItem("visitors");
if(SavedVisitor !== null){
    const parsevisitor = JSON.parse(SavedVisitor);
    visitors = parsevisitor;
    VUL.innerText = visitors;
};