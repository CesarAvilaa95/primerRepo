/*
POO


CLASES : Se refiere a nuestro molde o plantilla para que podamos crear objetos. Utiliza la palabra reservada class
CONSTRUCTOR : Es una funcion obligatoria para crear (chefsitx) a traves de caracteristicas o atributos especificos
ATRIBUTO : Se refieren a las caracteristicas o propiedades de mi objeto
METODO: Lo que hace nuesro objeto(saludar, brincar, correr)
INSTANCIACION: Se refiere a cuando ya creamos la clase, el constructor y el objeto.

Herencia : Cuenta con la palabra reservada extends. La herencia permite reutilizar el código de la clase padre en la clase hijo

Polimorfismo: El comportamiento de cada objeto de la misma clase a un metodo.
Encapsulamiento: Se refiere a encerrar y/o ocultar el código
Abstracción : Se refiere a ser muy especificos con los objetos (resumir)
Modularidad: Nos permite reutilozar codigo, hacer modificaciones, tene orden, entender y mantener el código.a diferencia de cada objeto de la misma clase

Metodoso estaticos : Utiliza la palabra reservada static, nos permite ejecutar una clase sin instanciar al objeto
Metodos accesores: Los métodos accesores son funciones especiales dentro de una clase que se utilizan para obtener (getter) o modificar (setter) el valor de las propiedades de un objeto. Estos métodos proporcionan una interfaz controlada para interactuar con los datos internos de un objeto, encapsulando la lógica y protegiendo la integridad de los datos.

Principios SOLID
Principio de responsabilidad Unica (SRP): Se refiere a que cada que asignamos una clase, objeto, etc debe ser única.
Principio de abierto y cerrado (OCP): Se refiere a que debemos extender el código ya existente  de ser necesario.
Principio de sustitución de Liskov : Se refiere a que piodemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado al comportamiento del mismo.
Principio de segregación de interfases (ISP) : Se refiere a  tener distintas interfaces.
Principio de investigación de dependencias (DIP) : Trabaja a traves de la abstracción para que el código no dependa de detalles especificos

Objetos Json
Javascript Object Notation
Se manejan a traves de clave - valor y no tienen metodos.

*/


class ch47{//Clase principal o clase padre
    constructor(nombre, apellido, email, edad){//nos permite crear el objeto
        this.name = nombre;//this nos permite seleccionar el objeto que voy a crear
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email}`
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}

class instruccion extends ch47{
    constructor(nombre, apellido, email, edad, escolaridad){
        super (nombre, apellido, email, edad);
        this.grado = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy tienes sesion");
    }
}

class mentoria extends ch47{
    constructor(nombre, apellido, email, edad,telefono){
        super(nombre,apellido,email,edad);
        this.tel = telefono;
    }
    static darMentoria(){
        console.log("Tienes muchos mentees");
    }
}
class mentees extends mentoria {
    constructor(nombre, apellido, email, edad, mentor){
        super(nombre, apellido, email, edad);
        this.mentor = mentor;
    }

    static menteeInfo(){
        console.log(`Tu mentora es : ${this.mentor}`);
    }
}


class Alumnos extends ch47 {
    constructor(nombre, apellido, email, edad){
        super(nombre, apellido, email, edad);
    }

    static alumnoInfo(){
        console.log("Eres un alumno.");
    }
}
const inte1 = new ch47 ("Xaxiry", "Gonzalez","xaxiri@gmial.com", 27);// los objeto deben de definir con const
const inte2 = new instruccion ("Liliana", "Agirre", "lilia@gmail.com", 30, "Licenciatura")
//const inte3 = new mentoria("Eva", "Morales", "eva@gmail.com", 34, "Licenciatura");
//const inte4 = new mentees("Fabio", "Avila", "fabio.avila@gmail.com", 29, "Eva Morales");
const inte3 = new mentoria("Eva", "Morales", "eva@gmail.com", 34, "123-456-789");
inte3.infoIntegrantes();
mentoria.darMentoria();

inte1.infoIntegrantes();
instruccion.darSesiones();
inte3.infoIntegrantes();
//inte4.menteeInfo();

//REALICE UN EJEMPLO CON UNA MAMÁ

class Mama {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.setEdad(edad); // Use el setter para validar la edad
    }

// Use Getter para obtener el nombre
    getNombre() {
        return this.nombre;
    }

    // Use Setter para modificar la edad
    setEdad(nuevaEdad) {
        if (nuevaEdad >= 0) {
        this.edad = nuevaEdad;
    } else {
        console.error("La edad debe ser positiva.");
    }
    }
    saludar() {
        console.log(`Hola, soy ${this.getNombre()} y tengo ${this.edad} años.`);
    }
}

const mom = new Mama("Rosa Chavez", 39);
mom.saludar();