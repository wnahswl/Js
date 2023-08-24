document.addEventListener("DOMContentLoaded", ()=>{


});
const dice = () => {
    const adiv = document.querySelector("#adiv");
    
    let n = Math.floor(Math.random()*6)+1 ;
    console.log("click",n)

    adiv.innerHTML = `<img src='./img/${n}.png'>`;
}

const showGame = () => {
    const bt1 = document.getElementById("bt1");
    const bt2 = document.getElementById("bt2");
    const inNum = document.getElementById("inNum");
    const dice = document.getElementById("dice");



    //주사위 숨기기
    dice.style.display = 'block';

    //주사위 버튼 보이기
}