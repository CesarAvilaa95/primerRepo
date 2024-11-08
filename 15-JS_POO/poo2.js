class Mama {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Hijo extends Mama {
    constructor(nombre, edad, juegoFavorito) {
        super(nombre, edad); // Llama al constructor de la clase padre
        this.juegoFavorito = juegoFavorito;
    }

    jugar() {
        console.log(`Me gusta jugar a ${this.juegoFavorito}.`);
}
}
class Hija extends Mama {
    constructor(nombre, edad, colorFavorito) {
        super(nombre, edad);
        this.colorFavorito = colorFavorito;
    }
    pintar() {
        console.log(`Mi color favorito es ${this.colorFavorito}.`);
    }
}
// Creando objetos
const mama = new Mama('Ana', 40);
const hijo = new Hijo('Juan', 10, 'Minecraft');
const hija = new Hija('María', 8, 'Rosa');

// Usando los métodos
mama.saludar(); // Salida: Hola, soy Ana y tengo 40 años.
hijo.saludar(); // Salida: Hola, soy Juan y tengo 10 años.
hijo.jugar();   // Salida: Me gusta jugar a Minecraft.
hija.saludar(); // Salida: Hola, soy María y tengo 8 años.
hija.pintar();  // Salida: Mi color favorito es Rosa.