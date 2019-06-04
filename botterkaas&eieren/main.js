// hier wordt alles gedaan in JS

// spelers
// winner
// neerzetten / posities
// aangeven wat goed is en wat niet
// beurten doorgeven
// alles printen

const speler1 = 0;
const speler2 = 1;

var huidige_speler = speler1;


// namen spelers
var naam1;
var naam2;


// tekens van de spelers
var teken_x = 'X';
var teken_o = 'O';


// array is ervoor om te laten weten wie gewonnen heeft
var array = [];                                                              // array om te definieren waar de gegevens in zitten en zo de winnaar printen


// audios om de spel wat leuker te maken
var audio = new Audio('audio.mp3');
// var bg_audio = new Audio('bg2.mp3');


// NAAM WIJZIGEN SPELER1
function speler_naam_1() {                                                  //(doet het)
    if (document.getElementById('button').innerHTML === 'Start') {

        naam1 = prompt('Typ uw naam in!', 'Klaassens');

        if (naam1) {

            document.getElementById('naam1').innerHTML = naam1;

        } else {

            document.getElementById('naam1').innerHTML = 'Speler 1';

        }
    }
}

// NAAM WIJZIGEN SPELER2
function speler_naam_2() {                                                  //(doet het)
    if (document.getElementById('button').innerHTML === 'Start') {

        naam2 = prompt('Typ uw naam in!', 'Jannetje');

        if (naam2) {

            document.getElementById('naam2').innerHTML = naam2;

        } else {

            document.getElementById('naam2').innerHTML = 'Speler 2';

        }
    }
}

// function audioPlay() {
//     bg_audio.play();
// }

// BEGIN START TE TONEN WIE AAN DE BEURT IS
function start() {                                                              //(DEZE WERKT)
    if (document.getElementById('button').innerHTML == 'Start') {

        document.getElementById('button').innerHTML = 'Reset';

    } else {

        document.getElementById('button').innerHTML = 'Start';
        document.getElementById('naam1').style.color = '';
        document.getElementById('naam2').style.color = '';
        leeghalen();

    }
}


// EERSTE ZET DIE WORDT GEZET, ANDERS KRIJG JE DE EERSTE EEN UNDEFINED
function start_zet() {                                                          //(DEZE WERKT)
    if (document.getElementById('button').innerHTML == 'Start') {

        document.innerHTML = teken_o;
        // audio.play();
    }

}


// HIER HET ZETTEN
function zetten(zet) {
    if (document.getElementById('button').innerHTML != 'Start') {

        if (zet.innerHTML == "") {

            zet.innerHTML = document.innerHTML;                                // hier wordt die document.innerHTML veranderd door de function doorgeven();
            audio.play();

        } else {

            // HIER DOEN WIJ NIKS, WANT HIJ IS AL INGEVULD.

        }

    }

    doorgeven();
}

// function opties om te bepalen wie er gewonnen heeft
function opties() {

    var input_of_array = document.querySelectorAll(".input_teken").value;
    var input_array = [];

    for (var i = 0; i < input_of_array.length; i++) {
        input_array.push(input_of_array[i].value);
    }

    // dit zijn de horizontale lijnen
    if (input[0] == input[1] && input[2]) {
        gewonnen();
    }

    if (input[3] == input[4] && input[5]) {
        gewonnen();
    }

    if (input[6] == input[7] && input[8]) {
        gewonnen();
    }


    // dit zijn de verticale lijnen
    if (input[0] == input[3] && input[6]) {
        gewonnen();
    }

    if (input[1] == input[4] && input[7]) {
        gewonnen();
    }

    if (input[2] == input[5] && input[8]) {
        gewonnen();
    }


    // nu de schuine zijden
    if (input[0] == input[4] && input[8]) {
        gewonnen();
    }

    if (input[2] == input[4] && input[6]) {
        gewonnen();
    }

}


// HIER MOET NOG EEN FUNCTIE ZIJN DIE AANGEEFT WANNEER IETS GEWONNEN HEEFT
function gewonnen() {

    setTimeout(function () {
        alert('De winnaar is ' + huidige_speler);
    }, 200);

}


// HIER GEEF IK EEN ANDERE DE BEURT MET ANDERE TEKENS
function doorgeven() {                                                          //(DEZE WERKT NOG NIET)
    if (huidige_speler == speler1) {

        document.getElementById('naam2').style.color = 'orange';
        document.getElementById('naam1').style.color = '';
        huidige_speler = speler2;
        document.innerHTML = teken_x;

    } else {

        document.getElementById('naam1').style.color = 'orange';
        document.getElementById('naam2').style.color = '';
        huidige_speler = speler1;
        document.innerHTML = teken_o;
        ;
    }
}

function leeghalen() {

    var tekens = document.querySelectorAll('.input_teken');

    setTimeout(function () {
        for (let i = 0; i < tekens.length; i++) {

            // hier maak ik alles leeg
            // opties();
            tekens[i].innerHTML = "";

        }
    }, 500);

}