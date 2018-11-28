$(document).ready(function () {
    var contentType = "application/x-www-form-urlencoded; charset=utf-8";

    $value = window.localStorage.getItem("key");

    if (window.XDomainRequest)
        contentType = "text/plain";

    function donnees() {
        $.ajax({
            url: "http://91.134.222.29/superviseur.php",
            data: { valeur: $value },
            type: "POST",
            dataType: "json",
            contentType: contentType,
            success: function (data) {
                for (var i = 0, len = data.length; i < len; i++) {
                    $("#supervise").append('<li style="padding-top:40px;" id ="s' + i + '">' + data[i].nom + " " + data[i].prenom + '</li>' + '<a class="event" href= "map.html?lat=' + data[i].latitude + '&long=' + data[i].longitude + '";">Localiser</a><br/><br/><br/>');
                }
                
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("You can not send Cross Domain AJAX requests: " + errorThrown);
            }
        });
    };
    window.onload = donnees();
});