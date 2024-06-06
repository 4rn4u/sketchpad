let numDiv = document.querySelector("#size");
function selectNumDiv(){
    let selectedValue = numDiv.value;
    switch (selectedValue){
        case "16x16":
            return 16;
        case "32x32":
            return 32;
        case "64x64":
            return 64;
        case "...":
            return 0;
        default:
            return 0;
    }
}

let drawButton = document.querySelector("#draw");

drawButton.addEventListener("click", () => {
    let nump = selectNumDiv();
    drawDivs(nump);

});

function clear(){
    let nump = selectNumDiv();
    drawDivs(nump);
}

let clearBut = document.querySelector("clear");

clearBut.addEventListener("click", () => {
    clear();
})

function paintCell(cell){
    cell.style.backgroundColor("red");
}

function drawDivs(num){
    let divContainer = document.querySelector("#div-container")
    divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    divContainer.innerHTML = '';
    for(let i = 0; i<num*num; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("div-created");
        newdiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
        newdiv.addEventListener("click", (event) => {
            paintCell(event.target)
        });
        /*newdiv.addEventListener("mouseover", (event) => {
            if(mouseDown){
                paintCell(event.target)
            }
        })*/
        divContainer.appendChild(newdiv);
    }
}


function clear(){
    let nump = selectNumDiv();
    drawDivs(nump);
}