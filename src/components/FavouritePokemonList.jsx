import './favouritePokemonList.css';

const FavouritePokemonList= ({id, name, height, weight, type, favPokemon}) => {
  return (
     <div className='favouriteListCard' onClick={()=>favPokemon({id: id, name: name, height: height, weight: weight, type: type})}>
      <div className='favPokemonImageContainer'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} className='favPokemonImage'/>
     </div>
    <div className='favPokemonNameContainer'>
      <h3>{(name).charAt(0).toUpperCase() + (name).slice(1)}</h3>
    </div>
    <div className='favPokemonIdContainer'>
      <h3>{id}</h3>
    </div>
    </div>
  )
}
export default FavouritePokemonList;