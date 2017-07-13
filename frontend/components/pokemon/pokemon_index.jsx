import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componenetDidMount(){
    this.props.requestAllPokemon;
  }

  render() {
    return (
      <ul>
        {
        this.props.pokemon.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.name}
            <img width="200" height="200" src={pokemon.image_url} />
          </li>)
        )
      }
      </ul>
    );
  }
}

export default PokemonIndex;
