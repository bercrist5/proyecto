var nomUs = document.getElementById("nomUs");

nomUs.value = localStorage.getItem("id")


$('#butReser').click(function () {
    if ($('#nomUs').val() == "") {
        alert("Por favor inicie sesión para reservar su cita")
    } else {
        location.href = "citas.html"
    }

})

$('#cerSes').click(function () {
    if ($('#nomUs').val() == "") {
        alert("Debe iniciar sesión primero");
    } else {

        localStorage.clear("id")
        console.log("hola")
        $('#nomUs').val("")
        alert("Sesión cerrada")

    }
})

