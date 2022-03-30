var idUsuario = [];
var contrasenaUsuario = [];
var nombreUsuario = [];
var contadorUsuario = 0;
var botonRegistro = document.getElementById("crearUsuario");
var botonLogin = document.getElementById("iniciarLogin");
var usuarioExiste = false;
var mostrarLog = document.getElementById("mostrarLogin");
var mostrarReg = document.getElementById("mostrarReg");

$("#regForm").hide();
$("#logForm").hide();

mostrarLog.addEventListener("click", function() {

    $("#logForm").show();
    $("#optForm").hide();

});

mostrarReg.addEventListener("click", function() {

    $("#regForm").show();
    $("#optForm").hide();


});

$(document).ready(function() {

    // Funcion de registro en el sitio web usando arreglos

    botonRegistro.addEventListener("click", function() {
        var esteNombre = document.getElementById("nombreUsuario").value;
        var esteUsuario = document.getElementById("idUsuario").value;
        var estaContra = document.getElementById("contrasenaUsuario").value;

        nombreUsuario[contadorUsuario] = esteNombre;
        idUsuario[contadorUsuario] = esteUsuario;
        contrasenaUsuario[contadorUsuario] = estaContra;
        console.log(nombreUsuario[contadorUsuario] + idUsuario[contadorUsuario] + contrasenaUsuario[contadorUsuario]);
        alert("Usuario registrado con éxito " + contadorUsuario);
        contadorUsuario++;
        $("#regForm").hide();
        $("#logForm").show();
    });

    //Funcion para el login del usuario registrado

    botonLogin.addEventListener("click", function() {


        var id = document.getElementById("nombreUsuarioL").value;
        var contrasena = document.getElementById("passwordUsuario").value;

        for (var i = 0; i < nombreUsuario.length; i++) {

            if (idUsuario[i] == id) {
                usuarioExiste = true;
                if (contrasenaUsuario[i] == contrasena) {
                    alert("Usuario " + id + " ingresado correctamente al sistema, contrasena es " + contrasenaUsuario[i]);
                    location.href = "citas.html";

                }
            }

        }



    });





});