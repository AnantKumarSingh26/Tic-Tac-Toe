let turn ="X"

const changeTurn =()=>{

    return turn === "X"?"O":"X"
}

const checkWin=()=>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext,innerText= ''){
            boxtext.innerText=turn;
            changeTurn();
            //audioPlay
            checkWin();
            document.getElementsByClassName("info")[0].innerText = 'Turn for '+turn
        }
    })
});