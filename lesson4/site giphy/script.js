const API_KEY = '6tF8MV88jx40ZRNBVnJQSmi4fSl13AxO';




// const giphy = {
//    link: 'https://media.giphy.com/media/kJ1iL1ZQIyibu/giphy.gif',
// }

 fetch('https://api.giphy.com/v1/gifs/random?api_key=6tF8MV88jx40ZRNBVnJQSmi4fSl13AxO',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(result => {
    const img = document.createElement('img');
    img.src = result.data.fixed_height_downsampled_url;
    document.querySelector('body').appendChild(img);
    console.log(result)   });


   