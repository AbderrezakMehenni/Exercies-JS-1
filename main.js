// Exercice 1
    // let message = 'Salut';
    // alert(message);

// Exercice 2
    // let firstName = 'John';
    // let lastName = 'Doe';
    // let city = 'New-York';
    // alert('Nom: '+lastName+'\n'+'Prénom: '+firstName+'\n'+'Ville: '+city);

// Exercice 3
    // let prenom = prompt("Veuillez saisir votre prénom :");

    // let message = "Bonjour " + prenom;
    // alert(message);

// Exercice 4
    // document.getElementById("myForm").addEventListener("submit", function(event) {
    // event.preventDefault();

    // let lastName = document.getElementById("lastName").value;
    // let firstName = document.getElementById("firstName").value;
    // let city = document.getElementById("city").value;

    // console.log("Nom de famille : " + lastName);
    // console.log("Prénom : " + firstName);
    // console.log("Ville : " + city);
    // });

// Exercice 5
    // let num1 = parseFloat(prompt("Entrez le premier nombre à virgule :"));
    // let num2 = parseFloat(prompt("Entrez le deuxième nombre à virgule :"));

    // let nbrEntier = Math.floor(num1);

    // let resultat = nbrEntier * num2;

    // alert("Le résultat de la multiplication est : " + resultat);

// Exercice 6
    // function afficherResteDivision(nombre1, nombre2) {
    //     var reste = nombre1 % nombre2;
    //     console.log("Le reste de la division de " + nombre1 + " par " + nombre2 + " est : " + reste);
    // }
    // afficherResteDivision(4, 9);

// Exercice 7
    // let pointure = parseInt(prompt("Entrez la pointure :"));
    // let anneeNaissance = parseInt(prompt("Entrez l'année de naissance' :"));

    // function calculerResultat(pointure, anneeNaissance) {
    //     let resultat = (((pointure * 2) + 5) * 50) - anneeNaissance + 1766;
    //     return resultat;
    //   }

    //   let resultatFinal = calculerResultat(pointure, anneeNaissance);

    //   alert("Le résultat est : " + resultatFinal);

// Exercice 8
    // const age = parseInt(prompt("Entrez votre âge :"));

    // if (age >= 18) {
    //     alert('Vous êtes majeur');
    // }
    // else {
    //     alert('Vous êtes mineur');
    // };

// Exercice 9
    // let nombre = parseInt(prompt("Entrez un nombre :"));

    // for (let i = 1; i <= 10; i++) {
    // let resultat = nombre * i;
    // console.log(nombre + " x " + i + " = " + resultat);
    // }

// Exercice 10
    // let mot = prompt("Entrez un mot :");

    // for (var i = 0; i < mot.length; i++) {
    // console.log(mot[i]);
    // }

// Exercice 11
    // let nombre = parseInt(prompt("Entrez un nombre entre 1 et 10 :"));

    // if (nombre < 5) {
    // alert("Le nombre saisi est inférieur à 5.");
    // } else if (nombre > 5) {
    // alert("Le nombre saisi est supérieur à 5.");
    // } else {
    // alert("Le nombre saisi est égal à 5.");
    // }

// Exercice 12
    function carre(nombre) {
        return nombre * nombre;
    }

    let nombreSaisi = parseInt(prompt("Entrez un nombre :"));

    let carreNombre = carre(nombreSaisi);

    alert("Le carré de " + nombreSaisi + " est " + carreNombre);