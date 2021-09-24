var mavar = 1;
var liste = [];
var listenb = [];
var monresultat;
var idx;
var selecteur = 0;

function ajouternum(idx) {

    if (mavar == 1) {
        document.getElementById('ecran').innerHTML = "";
        document.getElementById('ecran').innerHTML += idx;
        liste.push(idx);
        mavar = 0;
    } else {
        document.getElementById('ecran').innerHTML += idx;
        liste.push(idx);
    }
}

function reset() {
    document.getElementById('ecran').innerHTML = 0;
    liste = [];
    mavar = 1;
    listenb = [];
}

function supprime() {
    document.getElementById('ecran').innerHTML = "";
    liste.pop();
    if (liste.length == 0) {
        document.getElementById('ecran').innerHTML = 0;
        mavar = 1;
    } else {
        for (var i = 0; i < liste.length; i++) {
            document.getElementById('ecran').innerHTML += liste[i];
        }
    }
}

function egal() {
    idx = 0;
    monresultat = '';

    if (liste.length != 0) {
        //liste rassemblement caractères
        for (var i = 0; i < liste.length; i++) {
            monresultat = '';
            if (isNaN(liste[i]) && liste[i] != '.') {
                for (var j = idx; j < i; j++) {
                    monresultat += liste[j];
                }
                idx = i + 1;
                listenb.push(parseFloat(monresultat));
                listenb.push(liste[i]);
            }
        }
        //ajout caractères après le dernier opérateur
        monresultat = '';
        for (var k = idx; k < liste.length; k++) {
            monresultat += liste[k];
        }
        listenb.push(parseFloat(monresultat));

        //remplacement x par *
        for (var l = 0; l < listenb.length; l++) {
            if (listenb[l] == 'x') {
                listenb[l] = '*';
            }
        }

        console.log(liste);
        console.log(listenb);

        //calcul résultat
        var resultat = eval(String(listenb.join("")));
        document.getElementById('ecran').innerHTML = resultat;
        console.log(resultat);

        listenb = [];
        liste = [];
        liste.push(resultat);
    } else {
        document.getElementById('ecran').innerHTML = '0';
    }
}

function clicker() {
    var egal = document.getElementById('egal');
    var reset = document.getElementById('reset');
    var del = document.getElementById('del');
    var bouton = document.getElementsByClassName('bouton');
    var lebody = document.body;
    var clavier = document.getElementById('clavier');
    var ecran = document.getElementById('ecran');
    var entete = document.getElementById('header');

    if (selecteur != 3) {
        selecteur += 1;
    } else {
        selecteur = 1;
    }

    if (selecteur == 1) {

        document.getElementById('s3').style.background = 'hsl(223, 31%, 20%)';
        document.getElementById('s3').style.color = 'hsl(223, 31%, 20%)';

        document.getElementById('s2').style.background = 'hsl(223, 31%, 20%)';
        document.getElementById('s2').style.color = 'hsl(223, 31%, 20%)';

        document.getElementById('s1').style.background = 'hsl(6, 63%, 50%)';
        document.getElementById('s1').style.color = 'hsl(6, 63%, 50%)';

        document.getElementById('gliss').style.background = 'hsl(223, 31%, 20%)';

        entete.style.color = 'white';
        ecran.style.color = 'white';

        for (var i = 0; i < bouton.length; i++) {
            bouton[i].style.background = 'hsl(30, 25%, 89%)';
            bouton[i].style.boxShadow = '0px 4px hsl(28, 16%, 65%)';
            bouton[i].style.color = 'black';
        }

        egal.style.color = 'white';
        del.style.color = 'white';
        reset.style.color = 'white';

        del.style.background = 'hsl(225, 21%, 49%)';
        del.style.boxShadow = '0px 4px hsl(224, 28%, 35%)';

        reset.style.background = 'hsl(225, 21%, 49%)';
        reset.style.boxShadow = '0px 4px hsl(224, 28%, 35%)';

        egal.style.background = 'hsl(6, 63%, 50%)';
        egal.style.boxShadow = '0px 4px hsl(6, 70%, 34%)';

        lebody.style.background = 'hsl(222, 26%, 31%)';

        clavier.style.background = 'hsl(223, 31%, 20%)';

        ecran.style.background = 'hsl(224, 36%, 15%)';

    } else if (selecteur == 2) {

        document.getElementById('s1').style.background = 'hsl(0, 5%, 81%)';
        document.getElementById('s1').style.color = 'hsl(0, 5%, 81%)';

        document.getElementById('s3').style.background = 'hsl(0, 5%, 81%)';
        document.getElementById('s3').style.color = 'hsl(0, 5%, 81%)';

        document.getElementById('s2').style.background = 'hsl(25, 98%, 40%)';
        document.getElementById('s2').style.color = 'hsl(25, 98%, 40%)';

        document.getElementById('gliss').style.background = 'hsl(0, 5%, 81%)';

        entete.style.color = 'black';
        ecran.style.color = 'black';


        for (var i = 0; i < bouton.length; i++) {
            bouton[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
            bouton[i].style.boxShadow = '0px 4px hsl(35, 11%, 61%)';
            bouton[i].style.color = 'black';
        }

        egal.style.color = 'white';
        del.style.color = 'white';
        reset.style.color = 'white';

        del.style.background = 'hsl(185, 42%, 37%)';
        del.style.boxShadow = '0px 4px hsl(185, 58%, 25%)';

        reset.style.background = 'hsl(185, 42%, 37%)';
        reset.style.boxShadow = '0px 4px hsl(185, 58%, 25%)';

        egal.style.background = 'hsl(25, 98%, 40%)';
        egal.style.boxShadow = '0px 4px hsl(25, 99%, 27%)';

        lebody.style.background = 'hsl(0, 0%, 90%)';

        clavier.style.background = 'hsl(0, 5%, 81%)';

        ecran.style.background = 'hsl(0, 0%, 93%)';

    } else {

        document.getElementById('s2').style.background = 'hsl(268, 71%, 12%)';
        document.getElementById('s2').style.color = 'hsl(268, 71%, 12%)';

        document.getElementById('s1').style.background = 'hsl(268, 71%, 12%)';
        document.getElementById('s1').style.color = 'hsl(268, 71%, 12%)';

        document.getElementById('s3').style.background = 'hsl(176, 100%, 44%)';
        document.getElementById('s3').style.color = 'hsl(176, 100%, 44%)';

        document.getElementById('gliss').style.background = 'hsl(268, 71%, 12%)';

        entete.style.color = 'hsl(52, 100%, 62%)';
        ecran.style.color = 'hsl(52, 100%, 62%)';

        for (var i = 0; i < bouton.length; i++) {
            bouton[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
            bouton[i].style.boxShadow = '0px 4px hsl(290, 70%, 36%)';
            bouton[i].style.color = 'hsl(52, 100%, 62%)';
        }

        egal.style.color = 'hsl(198, 20%, 13%)';
        del.style.color = 'white';
        reset.style.color = 'white';

        del.style.background = 'hsl(281, 89%, 26%)';
        del.style.boxShadow = '0px 4px hsl(285, 91%, 52%)';

        reset.style.background = 'hsl(281, 89%, 26%)';
        reset.style.boxShadow = '0px 4px hsl(285, 91%, 52%)';

        egal.style.background = 'hsl(176, 100%, 44%)';
        egal.style.boxShadow = '0px 4px hsl(290, 70%, 36%)';

        lebody.style.background = 'hsl(268, 75%, 9%)';

        clavier.style.background = 'hsl(268, 71%, 12%)';

        ecran.style.background = 'hsl(268, 71%, 12%)';

    }
}