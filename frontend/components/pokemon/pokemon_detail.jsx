import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
    console.log('COMPONENT DID MOUNT');

  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (this.props.selectedPokemon) {
      return (
        <section className="selectedPokemon">
          <h1>Name: {this.props.selectedPokemon.name}</h1>
          <img src={this.props.selectedPokemon.image_url} />
          <h3>Attack: {this.props.selectedPokemon.attack}</h3>
          <h3>Defense: {this.props.selectedPokemon.defense}</h3>
          <h3>Moves: {this.props.selectedPokemon.moves}</h3>
          <h3>Type: {this.props.selectedPokemon.poke_type}</h3>
        </section>
      );
    } else {
      return (
        <h1>rendering</h1>
      );
    }
  }
}


export default PokemonDetail;
