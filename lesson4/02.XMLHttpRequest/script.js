// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez
//  sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     const result = xhttp.responseText
//     const parsedResult = JSON.parse(result); 

//     const el = document.createElement('div'); 
//     el.innerHTML =`
//     <p>Nom : ${parsedResult.name}</p>        
//     <p>Sexe: ${parsedResult.gender}</p> 
//     <p>Date de naissance: ${parsedResult.birth_year}</p>
//     `
//     document.querySelector('body').appendChild(el);
    
//   }
// };
// xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
// xhttp.send();



// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     console.log(xhttp.responseText)
//     const rawResult = xhttp.responseText;
//     const result = JSON.parse(rawResult);

//     console.log(result);

//   }
// };
// xhttp.open('GET', 'https://swapi.co/api/people/?search=Skywalker', true);
// xhttp.send();


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    const rawResult = xhttp.responseText
    const result = JSON.parse (rawResult); 

    result.results.forEach(person => {
      const el = document.createElement('div');
      el.innerHTML =`
      <h2>Nom : ${person.name}</h2>        
      <p>Sexe: ${person.gender}</p> 
      <p>Date de naissance: ${person.birth_year}</p>
      `
      document.querySelector('body').appendChild(el);
    })
    
    console.log(result);
  }
};
xhttp.open('GET', 'https://swapi.co/api/people/?search=Skywalker', true);
xhttp.send();


