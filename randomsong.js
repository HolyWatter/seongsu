const indiesongs = [
    {songs : '신지훈 - 시가 될 이야기',
    url : "https://youtu.be/rbIJV4aJRIA"},
    {songs : '허회경 - 김철수씨 이야기',
    url : '"https://youtu.be/0kmHEKcRjpo"'},
    {songs : '짙은 - 잘 지내자, 우리',
    url : "https://youtu.be/FpeKRO1ouiA"},
    {songs : '너드커넥션 - 좋은 밤, 좋은 꿈',
    url : "https://youtu.be/H2ncCtw2YxA"}
];

const Kpopsongs = [
    {songs : "Ive - afterLike" ,
    url : `https://www.youtube.com/watch?v=F0B7HDiY-10`},
    {songs : "Yena - SmartPhone" ,
    url : `https://www.youtube.com/watch?v=5ncp-_GXBsU`},
    {songs : "fromis9 - DM" ,
    url : `https://www.youtube.com/watch?v=1TyYpFW8X9U`},
    {songs : "IZ*ONE - Panorama" ,
    url : `https://www.youtube.com/watch?v=G8GaQdW2wHc`},
];
const Jazzsongs = [
    {songs :  "Ella Fitzgerald - Misty",
    url : `https://www.youtube.com/watch?v=5mOVgCte-gU`},
    {songs :  "Frank Sinatra - Fly me to the Moon",
    url : `https://www.youtube.com/watch?v=ZEcqHA7dbwM`},
    {songs :  "Louis Armstrong - La vie en Rose",
    url : `https://www.youtube.com/watch?v=jM65anVmC20`},
    {songs :  "Frankie Valli - Cant take my eyes on you",
    url : `https://www.youtube.com/watch?v=J36z7AnhvOM`}
];

const Select = document.getElementById("Select");
const Song1 = document.getElementById("song1");
const Song2 = document.getElementById("song2");
const Song3 = document.getElementById("song3");
const Song4 = document.getElementById("song4")

const A1 = document.getElementById("a1");
const A2 = document.getElementById("a2");
const A3 = document.getElementById("a3");
const A4 = document.getElementById("a4");

let RanSong = indiesongs[Math.floor(Math.random() * indiesongs.length)];

function onChange(){
    if(Select.value == "1"){
        Song1.innerText = `${indiesongs[0].songs}`
        A1.innerText = "들어보기";
        A1.href = indiesongs[0].url
        Song2.innerText = `${indiesongs[1].songs}`
        A2.innerText = "들어보기";
        A2.href = indiesongs[1].url
        Song3.innerText = `${indiesongs[2].songs}`
        A3.innerText = "들어보기";
        A3.href = indiesongs[2].url
        Song4.innerText = `${indiesongs[3].songs}`
        A4.innerText = "들어보기";
        A4.href = indiesongs[3].url
    }else if(Select.value == "2"){
        Song1.innerText = `${Kpopsongs[0].songs}`
        A1.innerText = "들어보기";
        A1.href = Kpopsongs[0].url
        Song2.innerText = `${Kpopsongs[1].songs}`
        A2.innerText = "들어보기";
        A2.href = Kpopsongs[1].url
        Song3.innerText = `${Kpopsongs[2].songs}`
        A3.innerText = "들어보기";
        A3.href = Kpopsongs[2].url
        Song4.innerText = `${Kpopsongs[3].songs}`
        A4.innerText = "들어보기";
        A4.href = Kpopsongs[3].url
    }else{Song1.innerText = `${Jazzsongs[0].songs}`
    A1.innerText = "들어보기";
    A1.href = Jazzsongs[0].url
    Song2.innerText = `${Jazzsongs[1].songs}`
    A2.innerText = "들어보기";
    A2.href = Jazzsongs[1].url
    Song3.innerText = `${Jazzsongs[2].songs}`
    A3.innerText = "들어보기";
    A3.href = Jazzsongs[2].url
    Song4.innerText = `${Jazzsongs[3].songs}`
    A4.innerText = "들어보기";
    A4.href = Jazzsongs[3].url
    indiesongs}
}







Select.addEventListener("change", onChange);