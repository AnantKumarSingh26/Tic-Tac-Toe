let turn ="X";
let isgameover= false;

const changeTurn=()=>{
    return turn === "X"? "0":"X"
}

let boxes = document.getElementsByClassName('box');
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if (boxtext.innerHTML === '' && !isgameover){
            boxtext.innerHTML =turn;
            checkWin();
            turn = changeTurn();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML =  "Turn for "+turn;
            }
        }
    })
 })

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left col
        [1, 4, 7], // Mid col
        [2, 5, 8], // Right col
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2    
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerHTML ===  boxtexts[e[1]].innerHTML) &&
            (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML)&&
            (boxtexts[e[0]].innerHTML !=="")){
                document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + ' Won!';
                isgameover = true;
            }
    })
}

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
});