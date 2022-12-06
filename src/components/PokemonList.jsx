import './pokemonList.css';

const PokemonList = ({pokemon, loading,infoPokemon}) => {
    console.log(loading)
  return (
    <>
    {
      loading ? <h1>Loading...</h1> :
      pokemon.map((item) => {
        return (
          <div className="listContainer" key={item.id} 
          onClick={()=>infoPokemon(item)}>
          <div className="listWrapper">
          <div className='pokemonDetailContainer'>
          <div className='pokemonImageContainer'>
          <img src={item.sprites.front_default} alt='' className='pokemonImage'/>
          </div>
          <div className='pokemonNameContainer'>
             {(item.name).charAt(0).toUpperCase() + (item.name).slice(1)}
          </div>
          </div>
          <div className='pokemonListNumber'>
              #{item.id}
          </div>
          </div>
          <div className="divider">
              <hr></hr>
          </div>
      </div>
        )
      })
    }
    </>
  );
}

export default PokemonList;
