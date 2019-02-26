
$(document).ready(() => {
    //
})



// toutes les balises <div>
const myDivs = $('div');
console.log('myDivs', myDivs);


// toutes les balises avec le nom de classe js-paragraph
console.log('js-paragraph', $('.js-paragraph'));

// la balise avec l'id js-unique-paragraph
console.log('js-unique-paragraph', $('#js-unique-paragraph'));

// le premier titre <h3>
console.log('first h3', $('h3:first'));
// le premier <th> du premier <tr> 
console.log($('tr:first th:first'));
// le premier <td> du chaque <tr>
console.log($('tr td:first' ));
// tous les liens
console.log ('liens', $('a'));

// tous les lien externes (ceux qui ont l'attribut target égal à _blank)
console.log('liens-externe', $('a[target=_blank]'));
// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
console.log('liens-externe', $('a[target!=_blank]'));
// tous les boutons dans un formulaire
console.log('boutons', $(':button Selector'));