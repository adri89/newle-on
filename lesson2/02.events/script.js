// Créez un bouton dans votre HTML. Associez-lui un
//  événement onclick avec un attribut directement dans HTML. Si le bouton est cliqué, loggez 'Clicked!'.

// Créez un bouton dans votre HTML. Avec JavaScript 
// associez à la propriété onclick à une fonction qui logge 'Clicked!' si le bouton est cliqué.

// Créez un bouton dans votre HTML. Ajoutez-lui
//  un écouteur d'événements côté JavaScript. Si le bouton est cliqué, loggez
//   'Clicked!'. Loggez également l'événement passé et explorez ces propriétés.


const mybtn = document.querySelector('#js-btn');

mybtn.addEventListener('click', (event) => {
    console.log('event', event);
    console.log('Clicked!');
});

// Créez un bouton gris. S'il est cliqué, passez sa couleur en vert. S'il est cliqué à nouveau, 
// repassez sa couleur en gris. Gérez les couleurs côté JavaScript.


mybtn.addEventListener('click', () => {
    console.log('clicked!');
    // mybtn.style.backgroundColor ='grey';
    mybtn.classList.add('btn-success');
});

mybtn.addEventListener('mouseover', () => {
    mybtn.classList.add('btn-danger');
});

mybtn.addEventListener('mouseenter', () => {
    mybtn.classList.add('btn-danger');
});

mybtn.addEventListener('mouseleave', () => {
    mybtn.classList.remove('btn-danger');
    mybtn.classList.add('btn-success');
});

mybtn.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Bounton droit de la souris a été cliqué');
});


const myForm = document.querySelector('#js-email');
myForm.addEventListener('keyup', () => {
    console.log('myEmail.value');
})

const myPassword = document.querySelector('#js-password');
myPassword.addEventListener('keydown', () => {
    console.log(myPassword.value);
});






