// // Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez 
// // et loggez la valeur qu'elle retourne.
// Créez une promise qui retourne une chaîne de caractères 'Hello' dans 3 secondes. Récupérez et loggez la valeur qu'elle retourne
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
    }, 3000);
});

myPromise.then(result => {
    console.log(result);
})


// Créez une promise qui retourne une erreur 'Something went wrong!'. Récupérer et loggez cette erreur.
const errorPromise = new Promise((resolve, reject) => {
    reject('Something went wrong!');
});

errorPromise.catch(error => {
    console.warn('error', error);
});



// Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:
const getNum = new Promise((resolve, reject) => {
    resolve(10);
});

getNum
    .then(num => num * 2)// multiplier N par 2
    .then(num => num - 1)// ensuite soustraire 1
    .then(num => num -= 2)// ensuite decrementer de 2
    .then(num => num += 10)// ensuite augmenter de 10. Loggez le résultat réçu.
    .then(result => {
        console.log('result', result);
    })
    .catch(error => {
        console.log('error', error);
    })

    fetch('https://reqres.in/api/user/2')
        .then(res => res.json())
        .then(result => {
            console.log('result', result);
        })

const myForm = document.querySelector('#js-form');
const email = document.querySelector('#js-email');
const password = document.querySelector ('#js-password');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    
    const credentials = {
        email: emailValue,
        password: passwordValue
    }


    fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
})


const API_KEY = '6tF8MV88jx40ZRNBVnJQSmi4fSl13AxO'