$(document).ready(function () {

    $("#butAgen").click(function () {

        var nom = $("#inpNom").val();
        var ape = $("#inpApe").val();
        var cel = $("#inpCel").val();
        var ser = $("input[name=servicioRadio]:checked").val();
        var fec = $("#inpFec").val();
        var hor = $("#inpHor").val();
        var tel = $("#inpTel").val();
        var ema = $("#inpEma").val();
        var pro = "";

        if (nom == "" || ape == "" || cel == "" || ser == "" || fec == "" || hor == "" || tel == "" || ema == "") {
            alert("Por favor completar todos los campos para agender la cita");
        } else {



            if (ser == "Medicina General") {
                pro = "Doc. Cristian Bermeo"
            } else if (ser == "Medicina Familiar") {
                pro = "Doc. Juan Capitani"
            } else if (ser == "Consulta Prioritaria") {
                pro = "Doc. Cristian Montealegre"
            } else {
                pro = "Doc. Helmer Holguin"
            }

            $("#dNom").append("<label>" + nom + "</label>" + "<br>");
            $("#dApe").append("<label>" + ape + "</label>" + "<br>");
            $("#dCel").append("<label>" + cel + "</label>" + "<br>");
            $("#dSer").append("<label>" + ser + "</label>" + "<br>");
            $("#dFec").append("<label>" + fec + "</label>" + "<br>");
            $("#dHor").append("<label>" + hor + "</label>" + "<br>");
            $("#dTel").append("<label>" + tel + "</label>" + "<br>");
            $("#dEma").append("<label>" + ema + "</label>" + "<br>");
            $("#dPro").append("<label>" + pro + "</label>" + "<br>");

          alert("Cita agendada correctamente, nos comunicaremos con Ud. para confirmar. Gracias")
        }

    })

})