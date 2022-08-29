const TDF = document.querySelector("#todoform"); // TDF에 html에 작성한 폼을 가져와서 저장.
const TDI = TDF.querySelector("input");         // TDI에 html에 작성한 input을 가져와서 저장
const TDL = document.querySelector("#todolist"); // TDL에 html에서 작성한 ul의 id를 가져와서 저장.

let todos = []; //let을 사용하면 변경 가능. // todo라는 리스트틀 만들고 여기에 우리가 작성하는 리스트들을 id와 함께 저장
let lineitem = [];

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todos)); // 로컬스토리지에 todo라는 이름으로 todos를 저장.
}//배열을 string문자화 시키는 함수가 JSON.stringify 한번 더 사용해서 다시 배열화

function removeButton(){
    const li = event.target.parentElement; // li라는 변수를 만들고 li에 event가 타켓된 곳의 부모인자를 저장.
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); // (filter함수는 true일 때 값을 그대로 반환, false일 때는 값을 제외 이 방식으로 x를 누른 값을 제외시킴) 
    //내가 선택한 값의 id와 배열에 속해있던 id가 같다면 제외하고 다시 todos에 저장.
    li.remove(); // li를 지움 > 화면상에서 지움.
    saveTodo(); //todos를 다시 로컬스토리지에 저장. 이 과정이 없으면 새로고침시에 그대로 남아 있음
    
}

function line() { //이건 완료한 것은 삭선할 수 있게 기능 추가해 준 것
    const li = event.target.parentElement;
    li.classList.toggle("line"); // classList.toggle은 만약 클래스가 없다면 추가, 있다면 제외 시켜주는 편리한 함수
    //console.log(li.classList.contains("line"));
    
}

function paintTodo(newTodo) { //내가 화면에 입력하면 리스트로 추가해서 화면에 나타내는 함수
    const li = document.createElement("li"); // document.createElement는 html에 새로운 태그를 만들어줌. li를 추가해서 li라는 변수에 저장 
    li.id = newTodo.id; //li.id에 내가 새로 입력한 값의 id를 저장
    const span = document.createElement("span"); //sapn태그를 만듦
    span.innerText = newTodo.text; // span에 내가 입력하는 텍스트를 안에 써줌 저 밑에 클릭함수에서 newtodo에 TDI의 밸류를 저장하고 newTodo에 저장하는 함수가 있음.. 그걸 innertext사용해서 넣어주는 것임..
    const button1 = document.createElement("button"); //버튼 두개를 만들고 하나는 삭제, 하나는 삭선
    const button2 = document.createElement("button");
    button1.innerText = "X"; //어떤게 삭제고 어떤게 삭선인지 알기 쉽게 버튼 안에 내용 추가해주고
    button2.innerText = "-";
    button1.addEventListener("click", removeButton); // 눌렀을 때 이벤트 발생하도록 기능 추가.
    button2.addEventListener("click", line);
    li.appendChild(span); //자식으로 span을 li에 추가 이렇게 하는 이유는 li밑에 span과 버튼을 같이 두고 싶어서.. 
    li.appendChild(button1); 
    li.appendChild(button2);
    TDL.appendChild(li); //자식으로 li를 TDL에 추가
}// newTodo가 newObject로 실행됨.. 밑에서 인자를 그렇게 받아서... text도 newObject의text가 li도 newObject의 id를 저장함....

function Dprevent(tomato){
    event.preventDefault(); // 기본 이벤트를 막아주는데 , 폼을 제출하면 새로고침 되는 현상을 막아줌.
    const newTodo = TDI.value; // newTodo라는 변수를 만들고,, 내가 넣은 값을 거기에 저장할거임.. 
    TDI.value = ""; // 저장한 이후에는 창을 비워주는 역할
    const newObject = { // newObject라는 변수를 만들고,, text에는 newTodo를 저장하고, 지금 초를 기준으로 id를 부여..
        text : newTodo,
        id : Date.now() // 지금 시간에 해당하는 초를 부여하는건데 겹치지 않는 난수를 부여할 때 유용하게 쓰임.
    };
    todos.push(newObject); // push라는 함수로 todo라는 리스트에 newObjcet를 추가해서 저장.
    paintTodo(newObject); // newObject를 인자로 paintTodo함수 실행.. paintTodo(newTodo)안에 있는 newTodo가 newObject로 바뀌어서 실행됨
    saveTodo();
}


TDF.addEventListener("submit", Dprevent); // form을 제출했을때 Dprevent실행 Dprevent마지막에 paintTodo와 SaveTodo있기 때문에 이 함수도 같이 실행되고 

const SavedTodo = localStorage.getItem("todo");

if(SavedTodo !== null) {
    const parsetodo = JSON.parse(SavedTodo);//JSON.parse는 진짜 무슨 함수인지 잘 모르겠다..
    todos = parsetodo;
    parsetodo.forEach(paintTodo);//parsetodo라는 배열의 각각의 원소마다 painttodo함수를 실행해줌
}
//filter는 함수랑 같이 사용되는데, 함수가 참이면 그 원소를 반환, 거짓이면 반환하지 않음.
