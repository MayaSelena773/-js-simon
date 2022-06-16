
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//SCALETTA AZIONI
//Creare un alert con 5 numeri random
//Mettere un timing di 30 secondi che parte dalla chiusura dell'alert
//Dopo di che ci saranno 5 prompt dove l'utente dovrà inserire i numeri che ha visto all'inizio
//uno alla volta
//Per ogni numero bisogna vedere se è nell'array dei numeri random iniziali
//se si il numero va nella lista dei numeri indovinati che gli saranno comunicati alla fine
//altrimenti non viene considerato

//Array vuoto dove verranno inseriti i 5 numeri random iniziali
let initialNumbers = [];

//Creazione dei 5 numeri random
for(let i = 0; i < 5; i++) {

    randomNumbers =  Math.floor(Math.random() * 10) + 1;

    //che inserisco nell'array senza ripetizioni
    if (!initialNumbers.includes(randomNumbers)) {

        initialNumbers.push(randomNumbers);
    }
    
}

//Alert per l'utente: numeri da memorizzare
alert('Memorizza questi numeri: ' + initialNumbers);

//Array vuoto per i numeri inseriti dall'utente
let userNumbersArray = [];

//Al click sull'alert, dopo 30 secondi (test con 3 secondi)
//Chiedi con cinque prompt di inserire i numeri memorizzati
for(let i = 0; i < 5; i++) {

    setTimeout(function() {

        userNumbers = prompt('Scrivi i numeri che hai visualizzato uno alla volta: ');
    
    }, 3000);

    //che inserisco nell'array senza ripetizioni
    if (!userNumbersArray.includes(userNumbers)) {

        userNumbersArray.push(userNumbers);
    }

}

