var canvasSquares = 100
function clearCanvas() {
    for(var i = 0; i < canvasSquares; i++){
        canvas = document.querySelector("#canvas_" + i + ".canvas");
        ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    console.log("Canvas Cleared")
}


var r = 0;
var g = 0;
var b = 0;


function pickColor(){
    color = randomColor();
    return color;
}

mousePressed = false;
function mousePress() {
    document.addEventListener("mousedown", function(event) {
        mousePressed = true;
        //console.log("Mouse DOWN")
      });

      document.addEventListener("mouseup", function(event) {
        mousePressed = false;
        //console.log("Mouse UP")
      });

      return mousePressed;
}

function draw(id){
    var canvas = document.querySelector("#canvas_" + id + ".canvas");
    var ctx = canvas.getContext('2d');

    if(mousePress()==true) {
        ctx.fillStyle = pickColor();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } 
    else if (mousePress() == false) {
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }
}

function initialDraw(id){
    var canvas = document.querySelector("#canvas_" + id + ".canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = pickColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function randomColor(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    console.log(`rgba(${red}, ${green}, ${blue})`);
    return `rgba(${red}, ${green}, ${blue})`
    
}









const allCanvases = document.querySelectorAll('canvas');

const checkbox = document.querySelector('#check');
function gridOnOff(){
    console.log("GRID TEST");
    
    if(checkbox.checked){
        allCanvases.forEach(canvas => {
            console.log("FOREACH");
            canvas.style.border = "thick solid #0000FF";
        });


    } else{
        allCanvases.forEach(canvas => {
            console.log("FOREACH");
            canvas.style.border = "none";
        });
    }
}
if (checkbox) {
    checkbox.addEventListener('click', gridOnOff);
} else {
    console.error("Element with id 'check' not found in HTML");
}

function test(){
    console.log("test")
    return 
}



