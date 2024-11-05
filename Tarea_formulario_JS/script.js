document.getElementById("registrarse").addEventListener("click", function(){

    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    const tel = document.querySelector("#tel input").value.trim();


if (nombre === "") {
    alert ("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    } else if (email === "") {
    alert ("Ingresa un dato esto no puede estar vacío");
    } else if (!email.includes ("@")){
    alert ("Correo no aceptado");
    } else if (password === ""){
    alert ("Contrasena incorrecta");
    } else if (password.length < 8) {
    alert ("Contraseña no segura");
    }else {
    alert("Registro completo " + nombre + "! ");
    }
});
