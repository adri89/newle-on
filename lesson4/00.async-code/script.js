// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

setTimeout(() => {
    console.log('Hello');
}, 3000);

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener('click',() => {
    setTimeout(() => {
        console.log('Clicked')
    }, 4000);
});


// uand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.

const img = document.createElement('img');
img.src = 'http://lorempixel.com/400/200';
img.onload = () => {
    console.log('Loaded');
    document.querySelector('body').appendChild(img);
}


// En cas d'erreur de chargement, logguez dans la console 'Error'.

img.onerror = () => {
    console.log('Error has occured');
}


// réez dynamiquement une node de script avec l'url de la librarie lodash: 

const myScript = document.createElement('script');
myScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js'
myScript.onload = () => {
    console.log(_.ceil(4.005));
}
document.querySelector('body').appendChild(myScript);

