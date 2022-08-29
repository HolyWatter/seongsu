const h1 = document.querySelector(".hello h1");

/*
function handleMouseEnter(){ //string 을 두 번 이상 쓸 경우에는 코드의 오류를 방지하기 위해서  변수에 값을 저장해서 사용
    const value = "active";
    if(h1.classList.contains(value)){
        h1.classList.remove(value);
    }else {
        h1.classList.add(value);
    }
}
*/
function handleMouseEnter(){
    h1.classList.toggle("active");
}

/*
function handleMouseEnter(){
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    } else{
        h1.style.color = "blue";
    }
}
*/
h1.addEventListener("click", handleMouseEnter);

//h1.addEventListener("click", Click); // =title.onclick = Click;


//querySelector 는 css 셀렉터처럼 요소들을 가져올 수 있음


/*function handleTitleClick(){
    console.log("title was clicked");
}

h1.addEventListener("click", handleTitleClick);
*/
/*
function Click(){
    h1.style.color = "blue";
}
function handleMouseLeave(){
    console.log("mouse leave!");
}

function handleWindowSize(){
    document.body.style.backgroundColor = "Tomato";
}

function copyFunction(){
    alert("Copier");
}

function OnWifi(){
    alert("on Wifi!");
}
function OffWifi(){
    alert("No Wifi!");
}
*/


/*
h1.addEventListener("mouseenter", handleMouseEnter); //= title.onmouseenter = handlaMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowSize);
window.addEventListener("copy", copyFunction);
window.addEventListener("offline", OffWifi);
window.addEventListener("online", OnWifi);

*/