const clock = document.querySelector("#clock");


function getDate(){
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${Hour}:${Minutes}:${Second}`;
}

setTimeout(getDate,0);
setInterval(getDate,1000);

//setInterval(함수 이름, 간격); 간격마다 함수실행
//setTimeout(함수이름, 시간); 시간 후에 한번 함수실행