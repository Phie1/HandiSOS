$(document).ready(function () {

    $mail = $("#mail"),
    $mdp = $("#password");
    var contentType = "application/x-www-form-urlencoded; charset=utf-8";

    if (window.XDomainRequest)
        contentType = "text/plain";

    $("#monForm").on('submit', function (e) {

        e.preventDefault();
        var $this = $(this);
        console.log($this.serialize());
        $.ajax({
            url: "http://xavfro.alwaysdata.net/connexionSuperviseur.php",
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
                $reponse = JSON.parse(data);
                window.localStorage.setItem("key", $reponse);
                document.location.href = "superviseur.html";
            }
        });

    });
});