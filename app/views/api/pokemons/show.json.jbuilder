# json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type

json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
end

json.items @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url
