describe('Pokedex', function() {
  it('front page can be opened', function() {
    cypress.visit('http://localhost:5000')
    cypress.contains('ivysaur')
    cypress.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
