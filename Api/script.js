document.getElementById("button").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    document.getElementById("resultat").innerHTML = "";
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            pintarPokemon(response);
        }
    });

    const nom1 = document.getElementById("nom1").value;
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/` + nom1);
    xhr.send();
})

document.getElementById("tots").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById("resultat").innerHTML = "";
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        pintarTots(response);
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})

function pintarPokemon(pokemon) {

    let nom = document.createElement("h1")
    let imatge = document.createElement("img")
   
    nom.innerHTML = pokemon.name;
    imatge.src = pokemon.sprites.front_default;

    document.getElementById("resultat").innerHTML = ""
  
    document.getElementById("resultat").append(nom)
    document.getElementById("resultat").append(imatge)



    

}

function pintarTots(pokemon) {

    let nom = document.createElement("h1")
    let imatge = document.createElement("img")
   
    nom.innerHTML = pokemon.name;
    imatge.src = pokemon.sprites.front_default;

   
  
    document.getElementById("resultat").append(nom)
    document.getElementById("resultat").append(imatge)



}
document.getElementById("tipo").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            document.getElementById("resultat").innerHTML = "";
            for (let i = 0; i < response.results.length; i++) {
            let tipo = document.getElementById("lola").value
                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        if(response.types[0].type.name==tipo){
                            pintarPokemon2(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})


function pintarPokemon2 (pokemon) {

    let nom = document.createElement("h1")
    let imatge = document.createElement("img")
   
    nom.innerHTML = pokemon.name;
    imatge.src = pokemon.sprites.front_default;
  
    document.getElementById("resultat").append(nom)
    document.getElementById("resultat").append(imatge)
}

document.getElementById("pes").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
 
            document.getElementById("resultat").innerHTML = "";
            for (let i = 0; i < response.results.length; i++) {
            let pes = document.getElementById("pesito").value
                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        
                        if(response.weight >= pes){
                            console.log(response)
                            pintarPokemon2(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });
    
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
});





