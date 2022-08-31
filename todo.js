const loginform = document.querySelector("#login");
const logininput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";

function loginclick(event){
    event.preventDefault(); //기본동작을 막네요
    loginform.classList.add("hidden");
    const username = logininput.value;
    localStorage.setItem(USERNAME_KEY, username)
    greeting.innerText = `Hello ${username} Welcome`;
    greeting.classList.remove("hidden");
    paintGreeting();
}


function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username} Welcome`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", loginclick);
} else {
    paintGreeting();
}

