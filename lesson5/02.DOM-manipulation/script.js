$(document).ready(() => {
    //
})



// // Récupérez et logguez dans la console le contenu du titre de la page.
// console.log('h1 content', $('h1').text());

// // Changez le contenu du titre de la page à 'My page title'.
// $('h1').text('My page title');
// // Récupérez et logguez dans la console le HTML de l'article.
// console.log('article html',$('#js-article').html());
// // Changez le contenu de l'article à
// $('#js-article').html(`
//     <h2>This is my article.</h2>
//     <p>This is my article's content.</p>
//     <a href="https://example.com">Read more</a
//     `);




// // // Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.

// // console.log('input value', $('#js-search').val());

// // // Changez la valeur du champ de saisie à 'Beagles'

// // $('#js-search').val('beagles');

// // // Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// // console.log($('#js-content').attr('placeholder'));


// // // Changez la valeur du placeholder du champ de saisie à 'Search'


// // $('#js-search').attr('placeholder','Search');


// // Sélectionnez le formulaire dans le DOM. Ajoutez un
// //  écouteur d'événements 'submit' au formulaire pour 
// //  déclencher un événement à chaque fois que le formulaire est soumis.
// //   Quand ce formulaire est soumis, récupérez la valeur saisie dans le
// //    champ de recherche. Si la valeur saisie est égale à 'Chat', insérez
// //     le texte 'Miaou!' dans le <div> avec l'id js-search-result. Sinon dans
// //      ce même <div> insérez du HTML <p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>.
// // $('#js-search-form')[0].addEvenListener('submit',(event) => {
// //     event.preventDefault();
// //     const inputValue = $('#js-search').val(); // get input value
// //     if (inputValue === 'chat') {
// //         // insert 'Miaou' dans #js-search-result
// //         $('#js-search-result').text('Miou!');
// //         } else {
// //         // insert  <p>Pas de résultats pour la recherche : <strong>' + keyword  + '</strong></p> dans#js-search-result
// //         $('#js-search-result').html(`<p>Pas de résultats pour la recherche : <strong>' + inputValue  + '</strong></p>`)
// //     }
// // });


// // Ajoutez une balise <h1> avec la valeur 'Cats are the weirdest' dans l'article avec l'id js-article-1.
// const title = document.createElement('h1');
// $(title).text('Cats are the weirdest');
// $('#js-article-1').append(title);


// // Ajoutez une balise <div> dans l'article avec l'id js-article-1.


// // Dans la balise <div> de l'article #js-article-1 ajoutez un paragraphe avec la valeur 'He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.'
// const articleOneParagraph = document.createElement('p');
// $(articleOneParagraph).text(`'He starts to look at me pleadingly, paces around, 
// and meows insistently. He even climbs on top of the book and bites my wrists in protest.'`)
// $('#js-article-1').append(articleOneParagraph);

// // Dans la balise <div> de l'article #js-article-1 ajoutez un autre paragraphe avec la valeur 'I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.
// const articleOneParagraph2 = document.createElement('p');
// $(articleOneParagraph2).text(`I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.`  )
// $('$js-article-1').prepend(articleOneParagraph2);

// // Après le premier paragraphe (entre les deux paragraphes) de l'article js-article-1 ajoutez une image.
// const articleOneImage = document.createElement('img');
// Image.src = 'https://lorempixel.com/400/200';
// $(articleOneParagraph).after(articleOneImage);

// Supprimez le contenu de l'article #js-article-2.
$('#js-article-2').empty();




// Supprimez du DOM l'article #js-article-2.
$('#js-article-2').remove();


// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert');




// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert');
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');


// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')) {
    $('#js-alert').removeClass('alert-warming');
}



// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('js-btn')[0].addEvenListener('click', () => {
    $('#js-alert').toggleClass('alert-sucess');
})


// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));




// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af')
// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
})


// Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. 
// Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.

if ($('#js-danger-alert').hasClass('alert-danger')) {
    $('p').addClass('text-danger')
    $('#js-danger-alert-btn').removeClass('btn-sucess')
}
$('#js-danger-alert-btn')[0].addEvenListener('click', () => {
    $('div').css('display', 'none');
})