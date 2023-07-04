function displayPokemon(pokemon) {
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML += `
    <div class="pokemon-card pokemon-${pokemon.id}">
      <img class="pokemon-image" src="${pokemon.sprites.front_default}">
      <div class="pokemon-info">#${pokemon.id} ${pokemon.name.toUpperCase()}</div>
      <div class="pokemon-type ${pokemon.types[0].type.name}">${pokemon.types.map(type => type.type.name).join(', ')}</div>
    </div>
  `;
}

function get1gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>1°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 1; i <= 151; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
  }}

function get2gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>2°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 152; i <= 251; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get3gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>3°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 252; i <= 386; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get4gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>4°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 387; i <= 494; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get5gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>5°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 495; i <= 649; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get6gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>6°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 650; i <= 721; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get7gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>7°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 722; i <= 809; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get8gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>8°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 810; i <= 905; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}

function get9gen() {
  const pokedexDisplayName = document.querySelector(".pokedex-display-name");
  pokedexDisplayName.innerHTML = "<p>9°Geração</p>"
  const pokedexContainer = document.querySelector(".pokedex");
  pokedexContainer.innerHTML = ``
  for (var i = 906; i <= 1008; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function(response) {return response.json();})
      .then(function(pokemon) {displayPokemon(pokemon);})
}}