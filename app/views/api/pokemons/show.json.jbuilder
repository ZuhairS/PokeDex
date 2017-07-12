# json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.pokemon @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.items @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url 
