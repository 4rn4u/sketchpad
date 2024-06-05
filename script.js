
function selectNumDiv(){
    let numDiv = document.querySelector("size");
    let selectedValue = numDiv.value;
    switch (selectedValue){
        case "16x16":
            return 16;
        case "32x32":
            return 32;
        case "64x64":
            return 64;
        default:
            return 0;
    }
}

let drawButton = document.querySelector("draw");

drawButton.addEventListener("click", () => {
    drawDivs(selectNumDiv());

});

function drawDivs(num){
    for(let i = 0; i<num; i++){
        for(let j = 0; j<num; j++){
            let div = document.createElement("div");
            div.
        }
    }
}