fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {

    var pokemons = [];

    allpokemon.results.map((val) => {
        pokemons.push({nome:val.name});

        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            pokemons.push({nome:val.name,image:pokemonSingle.sprites.front_defaut});

            if(pokemons.length == 10){
                //finalizamos nossas requisiçoes.
                    var pokemonBoxes =  document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";

                    pokemons.map(function(val){
                    pokemonBoxes.innerHTML += `
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`" />
                        <p>`+val.nome+`</p>
                    </div>
                `;

                })
            
            }

    })



    }) 

    pokemons.map((val) => {
    console.log(val.nome);
    })

})