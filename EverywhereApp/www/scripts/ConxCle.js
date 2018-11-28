function aide() {
    alert('Si vous n\'avez pas cette clé, demandez-la à votre superviseur. Il l\'a reçu lors de l\'ajout de votre compte à sa liste de personnes à superviser.');
}

$(document).ready(function () {
    var $erreur = 0,
        $envoi = $('#envoi');

    $("#cle").focusout(function () {
        if (!Test_cle(cle)) {
            $(this).css({//On rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
        else {
            $(this).css({//Si tout est bon on le rend vert
                borderColor: 'green',
                color: 'green'
            });
        }
    });
    $("#formulaire").submit(function (e) { // On sélectionne le formulaire par son identifiant
        e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire

        var donnees = $(this).serialize(); // On créé une variable content le formulaire sérialis

        $.ajax({
            url: 'http://91.134.222.29/ConxCle.php',
            type: 'POST',
            data: donnees,
        });
    });
});

