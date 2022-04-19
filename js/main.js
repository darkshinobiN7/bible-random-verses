//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch(`https://www.abibliadigital.com.br/api/verses/nvi/random`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.book').innerText = `Livro: ${data.book.name}`
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.author').innerText = `Autor: ${data.book.author}`
        document.querySelector('.group').innerText = `Grupo: ${data.book.group}`
        document.querySelector('.chapter').innerText = `Capítulo: ${data.chapter}`
        document.querySelector('.number').innerText = `Versículo: ${data.number}`
        document.querySelector('.text').innerText = `Verso: ${data.text}`
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + drink + " drink')"
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}