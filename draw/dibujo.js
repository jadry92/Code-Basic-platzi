var d = document.getElementById('my_draw');
var lienzo = d.getContext("2d");
var num_lines = document.getElementById('input_lines');
var s_button = document.getElementById('signal_button');
s_button.addEventListener("click",drawForClick);

function create_line(color,x_ini,y_ini,x_end,y_end){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini,y_ini);
    lienzo.lineTo(x_end,y_end);
    lienzo.stroke();
    lienzo.closePath();
}

function drawForClick() {
    console.log(num_lines);
    var x = parseInt(num_lines.value);
    draw_img(x);
}


/// script
function draw_img(n){
    if(n<=0){
        n=1;
    }else if(n>10){
        n=10;
    }else{
        n=n;
    }
    nx=lienzo.canvas.width;
    for (var ix = 10; ix < (nx/2); ix+=n) {
        create_line("blue",ix,nx/2,nx/2,(nx/2)+ix);
        create_line("green",ix,(nx/2),(nx/2),(nx/2)-ix);
        create_line("red",nx-ix,(nx/2),(nx/2),(nx/2)-ix);
        create_line("yellow",nx-ix,(nx/2),(nx/2),(nx/2)+ix);
    }
}
