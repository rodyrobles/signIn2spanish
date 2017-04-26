//variables globales accesibles a las 2 funciones
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

function translate() {
var title = document.getElementById('form-signin-heading');
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];

//Para cambiar el texto original
title.innerHTML = "Por favor inicia sesion";
email.placeholder = "Correo Electronico";
password.placeholder = "Contraseña";
remember.innerHTML = "Recordar datos";
button.innerHTML = "Iniciar Sesion";
}
translate();

function show() {
var datos = document.getElementById("datos");
datos.innerHTML = "<h3><strong>Datos de Formulario</strong></h3><p>El correo electronico ingresado es:<br>"
+email.value+"<br>La clave ingresada es:<br>"+password.value
}

