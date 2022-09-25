describe('Pokedex', function() {
  it('front page can be opened', function() {
    .visit('http://localhost:5000')
    .contains('ivysaur')
    .contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
