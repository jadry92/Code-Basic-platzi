
class Billete {
    constructor(valor,cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

function selecionBilletes() {
    var div = 0;
    var papeles = 0;
    for (var b of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero/b.valor);
            if(div < b.cantidad){
                papeles = div;
            }else{
                papeles = b.cantidad;
            }
            b.cantidad = b.cantidad - papeles;
            dinero = dinero - (b.valor*papeles);
            entregado.push(new Billete(b.valor,papeles));
        }
    }
    if (dinero > 0) {
        alert("Dinero insufiente o cantidad inposible");
    }else{
        //console.log(dinero);
        //console.log(caja);
        //console.log(entregado);

        resultado.innerHTML = "";
        for (var i of entregado){
            if (i.cantidad >0){
                resultado.innerHTML += " billete :";
                for (var a = 0; a < i.cantidad; a++){
                    resultado.innerHTML += i.valor +" ";
                }
                resultado.innerHTML += "</br>";
            }
        }
    }
}

function getMoney(){
    dinero = parseInt(dinero_str.value);
    selecionBilletes();
}


var dinero_str = document.getElementById("dinero");
var s_button = document.getElementById("boton");
var resultado = document.getElementById("resultado");
s_button.addEventListener("click",getMoney);

var caja = [];
var dinero = 0;
var entregado = [];

// inicialisación
caja.push(new Billete(100,50));
caja.push(new Billete(50,50));
caja.push(new Billete(20,50));
caja.push(new Billete(10,50));
caja.push(new Billete(5,50));
