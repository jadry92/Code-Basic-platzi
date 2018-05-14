var img_path = []
img_path["Cauchin"] = "cerdo.png";
img_path["Pokacho"] = "pollo.png";
img_path["Tosinauro"] = "vaca.png";
class Pakiman {
    constructor(nombre,vida,ataque) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = img_path[this.nombre];
    }

    hablar() {
        console.log(this.nombre);
    }

    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong>"+"</br>");
        document.write("vida = " + this.vida + "</br>");
        document.write("ataque = "+ this.ataque + "</hr>");
        document.write("</p>");
    }
}

var colececcion = [];
colececcion.push(new Pakiman("Cauchin",100,30));
colececcion.push(new Pakiman("Pokacho",80,50));
colececcion.push(new Pakiman("Tosinauro",120,40));

for (var variable in colececcion) {
    colececcion[variable].mostrar();
}
for (variable of colececcion) {
    console.log(variable);
}
