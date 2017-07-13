import React from 'react';

class PokemonIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {
        this.props.pokemon.map(pokemon => (<li key={pokemon.id}>{pokemon.name}</li>))
      }
      </ul>
    );
  }
}

export default PokemonIndex;
