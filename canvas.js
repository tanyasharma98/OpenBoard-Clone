let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let body = document.querySelector("body");
// let boardTop = canvas.getBoundingClientRect().top;
// let boardLeft = canvas.getBoundingClientRect().left;
// let iX , iY , fX, fY
let mouseDown = false;
//API

let tool = canvas.getContext("2d");
tool.strokeStyle = "black";
tool.lineWidth = "3";

let eraserColor ="white";



//====================================================================================================
// tool.beginPath(); //Generate new path(graphic)
// tool.moveTo(10,10);   //Start Point
// tool.lineTo(100,150); //End point
// tool.stroke() // color fill (graphic)


// tool.strokeStyle = "Purple";
// tool.lineWidth = "9";
// tool.beginPath();
// tool.moveTo(10,10);
// tool.lineTo(200,250);
// tool.stroke();
//====================================================================================================


//mousedown ->start new path
//mousemove -> path fill(graphic)

canvas.addEventListener("mousedown", (e) => {
    if(cTool=="pencil" ){
    drawingMode = true;
    mouseDown = true;
    beginPath({
        x: e.clientX,
        y: e.clientY
    })
}
else if( cTool=="eraser"){
    drawingMode = true;
    mouseDown = true;
    beginPath({
        x: e.clientX,
        y: e.clientY
    })
}
})

canvas.addEventListener("mousemove", (e) => {
    if(cTool=="pencil"  ){
    if (mouseDown) {
       drawStroke({
           x: e.clientX,
           y: e.clientY
       })
    }
    }
    else if(cTool=="eraser"){
        if (mouseDown) {
            drawStroke({
                x: e.clientX,
                y: e.clientY
            })
         }
    }
})
canvas.addEventListener("mouseup", (e) => {
    if(cTool=="pencil"  ){
    drawingMode = false;
    mouseDown = false;
    }
    else if(cTool=="eraser"){
        drawingMode = false;
        mouseDown = false;
    }
})


function beginPath(strokeObj){
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj){
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}
