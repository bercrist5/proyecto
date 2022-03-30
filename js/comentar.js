$(document).ready(function () {

    var texto = $("#txtArea");

    $('#btnComentar').click(function () {
        if ($('#nomUs').val() == "") {
            alert("Por favor inicie sesión para dejar un comentario")
        } else {
            if (texto.val() == "") {
                alert("Ingrese sus comentarios")
                texto.focus()
            } else {

                $('#divComentarios').append("<div class='testi-details'>" + texto.val() + "</div> <div class='testi-info'> <!-- User Image --><a href='#'><img src='img/thumb.png' alt='' class='img-responsive'></a><h3>" + $('#nomUs').val() + "</h3> </div> <hr class='botm-line'>")
                texto.val("");
            }
        }
    });



})