var idUsuario = [];
var contrasenaUsuario = [];
var nombreUsuario = [];
var apellidoUsuario = [];
var contadorUsuario = 0;


$(document).ready(function() {


    var passwordUsuario = document.getElementById("passwordUsuario");

    //Funcion para el registro de usuario
    $("#crearUsuario").click(function() {
        var esteNombre = document.getElementById("nombreUsuario").value;
        var esteApellido = document.getElementById("apellidoUsuario").value;
        var esteUsuario = document.getElementById("idUsuario").value;
        var estaContrasena = document.getElementById("contrasenaUsuario").value;
        nombreUsuario[contadorUsuario] = esteNombre;
        apellidoUsuario[contadorUsuario] = esteApellido;
        idUsuario[contadorUsuario] = esteUsuario;
        contrasenaUsuario[contadorUsuario] = estaContrasena;
        console.log(esteNombre + esteApellido + esteUsuario + estaContrasena + contadorUsuario);
        contadorUsuario++;
        $("#nombreUsuario").val('');
        $("#apellidoUsuario").val('');
        $("#idUsuario").val('');
        $("#contrasenaUsuario").val('');



    });

    // Funcion para el login del usuario
    $("#iniciarLogin").click(function() {
        var esteUsuario = document.getElementById("nombreUsuario").value;
        var estaContrasena = document.getElementById("passwordUsuario").value;
        var usuarioSi = false;
        for (var i = 0; i < nombreUsuario.length; i++) {
            if (nombreUsuario[i] == esteUsuario) {
                if (contrasenaUsuario[i] == estaContrasena) {
                    usuarioSi = true;
                }

            }
        }
        if (usuarioSi == true) {
            window.location.replace("./index.html");
        }


    });



});