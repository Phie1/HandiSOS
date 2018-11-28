$(document).ready(function () {

    $mail = $("#mail"),
    $mdp = $("#password");
    var contentType = "application/x-www-form-urlencoded; charset=utf-8";

    if (window.XDomainRequest)
        contentType = "text/plain";

    $("#monForm").on('submit', function (e) {

        e.preventDefault();
        var $this = $(this);

        $.ajax({
            url: "http://91.134.222.29/connexionSuperviseur.php",
            data: $this.serialize(),
            type: "POST",
            dataType: "json",
            contentType: contentType,
            success: function (data) {
                $reponse = JSON.parse(data);
                window.localStorage.setItem("key", $reponse);
                document.location.href = "superviseur.html";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Mauvais identifiant");
            }
        });

    });
});