// const myDivs = document.getElementsByTagName('div')
// console.log('myDivs', myDivs);

// const myDiv2 = document.querySelectorAll('div');
// console.log('myDiv2', myDiv2);

// // // Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.

// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// console.log('myParagraphs', myParagraphs);

// const myParagraphs2 = document.querySelectorAll('.secondary-paragraph')
// console.log('myParagraphs2', myParagraphs2);

// // // Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element

// const myUniqueEl = document.getElementById('js-unique-el');
// console.log('myUniqueEl', myUniqueEl);

// const myUniqueEl2 = document.querySelector('#js-unique-el');
// console.log('myUniqueEl2', myUniqueEl2);

// const myParagraphsInDiv = document.querySelectorAll('div p');
// console.log('myParagraphsInDiv', myParagraphsInDiv);

// const mySpansPreceededByDiv = document.querySelectorAll('div p');
// const.log('myParagraphsInDiv', myParagraphsInDiv);

// const mySpansPreceededByDiv = document.querySelectorAll('div +span');
// const.log('myParagraphsInDiv', myParagraphsInDiv);

// // Trouvez toutes les balises p qui se trouvent dans un div.
// 	const myParagraphsInDiv = document.querySelectorAll('div p');
// 	console.log('myParagraphsInDiv', myParagraphsInDiv);
// // Trouvez toutes les balises span qui sont précédées par un div.
// 	const mySpanPreceededByDiv = document.querySelectorAll ('div ~ span');
// 	console.log('mySpanPreceededByDiv', mySpanPreceededByDiv);

// // Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstParagraph = document.querySelector('p');
// console.log('firstParagraph', firstParagraph);
// firstParagraph.innerText = 'I am the first paragraph'


// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondParagraph = document.querySelector('.second-p');
// secondParagraph.innerHTML = '<span>Hello</span>';
// console.log('secondParagraph.innerHTML', secondParagraph.innerHTML);
// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg = document.querySelector('img');
// console.log('myImg', myImg);
// myImg.setAttribute('width', '50%');
// myImg.setAttribute('height', 'auto');

// // Ajoutez un attribut alt non vide à l'image.
// myImg.setAttribute('alt', 'Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// const myParagraphIndiv = document.querySelector('div p');
// console.log('myParagraphIndiv' , myParagraphIndiv);
// myParagraphIndiv.style.color = 'blue'; 
// myParagraphIndiv.style.fontSize = '1.5rem';

// Supprimez le paragraphe qui se trouve dans un div. Supprimez le span.

// const myDiv = document.querySelector('div');
// const paragraphTodelete = document.querySelector('div p');
// myDiv.removeChild(paragraphTodelete);

// myDiv.innerHTML = '' // removes everything

// myDiv.className = 'my-class'; // add class name
// myDiv.classList.add('my-class'); // ajouternom de classe 
// myDiv.classList.remove('my-class'); // supprimer nom de class

// Créez un div et insérez le dans la balise body.

const myBody = document.querySelector('body');
const el = docuement.creatElement('div');
el.innerText = 'Something Something';
console.log('el', el)
myBody.appendChild(el); // insérer unn élément en tant que DERNIER ENFANTS
myBody.prepend(el); // insérer un élément en tant que premier enfant 





