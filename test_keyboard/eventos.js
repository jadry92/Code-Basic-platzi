
var blind_1 = document.addEventListener("keydown",drawKeyboard);
var blind_2 = document.addEventListener("mousedown",drawMouseDown);
var blind_3 = document.addEventListener("mouseup",drawMouseUp);
var blind_4 = document.addEventListener("mousemove",drawMouseMove);

var flagMove = false;
var x_init = 0;
var y_init = 0;
console.log(teclas);
var area = document.getElementById('my_draw');
var papel = area.getContext("2d");
var x = (papel.canvas.width)/2;
var y = (papel.canvas.width)/2;

create_line("red",x-1,y-1,x+1,y+1,papel);

function drawMouseDown(event){
    console.log(event.type);
    x_init = event.layerX;
    y_init = event.layerY;
    flagMove = true;
}

function drawMouseUp(event){
    console.log(event.type);
    flagMove = false;
}

function drawMouseMove(event){
    if (flagMove) {
        console.log(event);
        var x_end = event.layerX;
        var y_end = event.layerY;
        create_line("red",x_init,y_init,x_end,y_end,papel);
        x_init = x_end;
        y_init = y_end;
    }
}

var teclas = {
    DOWN: 40,
    UP: 38,
    LEFT: 37,
    RIGHT: 39
};


function create_line(color, x_ini, y_ini, x_end, y_end, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_ini,y_ini);
    lienzo.lineTo(x_end,y_end);
    lienzo.stroke();
    lienzo.closePath();
}


function drawKeyboard(event){
    //console.log(event);
    var color = "blue";
    var step = 10;
    switch (event.keyCode) {
        case teclas.DOWN:
            create_line(color,x,y,x,y+step,papel);
            y = y+step;
            break;
        case teclas.UP:
            create_line(color,x,y,x,y-step,papel);
            y = y-step;
            break;
        case teclas.LEFT:
            create_line(color,x,y,x-step,y,papel);
            x = x-step;
            break;
        case teclas.RIGHT:
            create_line(color,x,y,x+step,y,papel);
            x = x+step;
            break;
        default:
            console.log("Other key");

    }
}
