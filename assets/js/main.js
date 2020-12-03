//creazione document ready
$(function(){
        // var esercizio = {
    //     repo : "js-oggetti-studenti",
    //     istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
    //     augurio: "che la forza degli oggetti sia con voi :muscle:"
    //   }

    //creazione oggetto studente 1
    var studentOne = {
       name : 'Alfredo Gregorio',
       lastName : 'Lozano Murillo',
       age : '32'
    }
    // console.log(studentOne);
    // stampa ciclo for in tutte le proprietà di studentOne
    for (const key in studentOne) {
        // console.log(studentOne[key]);
        //se aggiungo key posso visualizzare il nome della key
        // console.log(key, studentOne[key]);
    }
    //creazione obj altri studenti
    var studentTwo = {
        name : 'Gino',
        lastName : 'Paoli',
        age : '80'
    }
    var studentThree = {
        name : 'Ciccio',
        lastName : 'Pasticcio',
        age : '21'
    }
    var studentFour = {
        name : 'Luisa Filippa Elisabetta',
        lastName : 'Von Viti',
        age : '27'
    }
    var studentFive = {
        name : 'Luca',
        lastName : 'Lopez Bonato',
        age : '33'
    }
    
    //creaaione array studenti
    var arrayStudents = [studentOne, studentTwo, studentThree, studentFour, studentFive,];
    // console.log(arrayStudents);

    //creazione ciclo array students
    for (const key in arrayStudents) {
      console.log(arrayStudents[key].name +' '+ arrayStudents[key].lastName);
    }
    //inserimento nuovo studente
    var userName = prompt('inserisci il tuo nome');
    var userLastname = prompt('inserisci il tuo cognome');
    var userAge = prompt('inserisci la tuà età');
    var studentSix ={
        name : userName,
        lastName : userLastname,
        age : userAge
    } 
    // push nuovo studente
    arrayStudents.push(studentSix);
    
    console.log(arrayStudents);
    document.getElementById('student_name').innerHTML = studentSix.name + ' ' + studentSix.lastName +' '+studentSix.age ;
    
});