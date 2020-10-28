const container = document.querySelector('.container');


fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    console.log(response);
})
.then(pokemon => {
    const bulbasaur = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.amazon.com/Pokemon-Base-Common-Card-Bulbasaur/dp/B00R66DIOG'
    }
    const bulbasaurCard = makeCard(bulbasaur);
    container.appendChild(bulbasaurCard);
})

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

// create div with class and style
    //$ create img tag, src, class, alt
    // append img to card div
    // create another class with class
        // create h5 with class and text
        // create p with class and text
        // create tav with 2 class, href, amd text
        // append card to body
    // append card-body to div to card
// append card div to container div

function makeCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    const image = document.createElement('img');

    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image);
    image.setAttribute('alt', 'Bulbasaaauur');
    card.appendChild(image);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;
    
    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = pokemon.move;
    
    const ability = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = pokemon.ability;
    
    const purchase = document.createElement('a');
    purchase.classList.add('btn', 'btn-primary');
    purchase.setAttribute('href', pokemon.purchaseLink);
    purchase.textContent = `Buy ${pokemon.name} card`

    cardBody.appendChild(nameElement);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchase);

    card.appendChild(cardBody);

    return card;
}