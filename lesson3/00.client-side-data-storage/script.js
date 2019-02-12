// Créez un cookie lang égal à 'fr'.
// document.cookie = 'lang=fr;expires=${new date ('2019-02-06')}'; 

docCookies.setItem('lang', 'ES', new Date ('2019-02-06'));

// Créez un cookie previewSeen égal à true qui va le lendemain.
docCookies.setItem('previewSeen', true, new Date ('2019-02-06'));
console.log('previewSeen', docCookies.getItem('previewSeen'));

// Créez un cookie test égal à 'test' qui va expirer le 31 décembre.
docCookies.setItem( 'test' , 'test', new Date ('2019-02-31'));
docCookies.setItem( 'userId', 123);


// Créez un cookie userId égal à 123 qui sera secure.
docCookies.setItem( 'userId', 123,);



// Modifiez la valeur du cookie userId à 321.
docCookies.setItem( 'userId', 321,);

// Supprimez le cookie test.
docCookies.setItem( 'userId', 321, new Date('2000-01-01'));

const user = {
    id: 1,
    name: 'Thibaud'
  }

  docCookies.setItem('user', JSON.stringify(user)); 

  const myUser = docCookies.getItem('user');
  console.log('myUser', myUser);
  const parsedUser = JSON.parse(myUser);
  console.log('parsedUser', parsedUser);

  const emails = ['a@ynov.com', 'b@ynov.com', 'c@ynov.com'];
docCookies.setItem('emails', JSON.stringify(emails))

const emailsFromCookies = docCookies.getItem('emails')
console.log('emailsFromCookies', emailsFromCookies);

const parsedEmails = JSON.parse(emailsFromCookies)
console.log('parsedEmails', parsedEmails);



// cookiesAccepted
const cookiesBanner = document.querySelector('#cookies');
const cookiesBtn = document.querySelector('#cookies-btn')

const isAccepted = docCookies.getItem('cookiesAccepted')
if (isAccepted && isAccepted === 'true') {
    cookiesBanner.style.display = 'none';
} else {
    const cookiesBanner = document.querySelector('#cookies');
    cookiesBanner.style.display = 'block';
}

cookiesBtn.addEventListener('click', () => {
    docCookies.setItem('cookiesAccepted', true, new Date('2019-02-15'));
    cookiesBanner.style.display = 'none';
})


// Créez une entrée greeting égale à 'Hello World'. Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}.
//  Récupérez greeting. Modifiez cette entrée à 'Welcome'. Supprimez greeting du LocalStorage.

const ads = {top: 1,bottom: 2};

if (sessionStorage) {
    sessionStorage.setItem('greeting', 'Hello World');
    sessionStorage.setItem('adIds', JSON.stringify(ads));

}
