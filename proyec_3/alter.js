var vp = document.getElementById('my_draw');
var papel = vp.getContext("2d");
var mapa = "tile.png";

var vaca = {
    url:"vaca.png",
    cargaFlag: false
};

var fondo  = {
    url:"tile.png",
    cargaFlag: false
};
fondo.obj = new Image();
fondo.obj.src = fondo.url;
fondo.obj.addEventListener("load",cargarFondo);
//fondo.obj.addEventListener("load",function(eve){dibujar(eve,fondo,0,0);},false);

//var cerdo = new Image();
//cerdo.src = "cerdo.png";
//cerdo.addEventListener("load",function(eve){dibujar(eve,cerdo,0,80);},false);
vaca.obj = new Image();
vaca.obj.src = vaca.url;
vaca.obj.addEventListener("load",cargarVaca);
//vaca.obj.addEventListener("load",function(eve){dibujar(eve,vaca.obj,80,80);},false);

//var pollo = new Image();
//pollo.src = "pollo.png";
//pollo.addEventListener("load",function(eve){dibujar(eve,pollo,80,0);},false);

function cargarFondo(){
    fondo.cargaFlag = true;
    dibujar(fondo);
}

var array={
    x:[],
    y:[]
};

function cargarVaca(){
    vaca.cargaFlag = true;
    cantida = aleatorio(5,250);
    for (var i = 0; i < cantida; i++) {
        xi = aleatorio(0,5);
        yi = aleatorio(0,5);
        array.x[i] = xi*80;
        array.y[i] = yi*80;
        dibujar(vaca);
    }

}

function aleatorio(min,max){
    var valuer = 0 ;
    value = Math.floor(Math.random()*(max-min+1))+min;
    return value;
}

function dibujar(img) {
    //console.log(fondo.cargaFlag);
    if(fondo.cargaFlag){
        papel.drawImage(fondo.obj,0,0);
    }
    if(vaca.cargaFlag){
        for (var i = 0; i < array.x.length; i++) {
            papel.drawImage(vaca.obj,array.x[i],array.y[i]);
        }
    }
}
