import './favouritePokemon.css';

const FavouritePokemon= ({info}) => {
  console.log(info)
  return (
    <div className='favouritePokemonWrapper' >
        <div className='favPokemonLogoContainer'>
          <img src='http://localhost:3000/logo.png' className='favPokemonLogo'/>
        </div>
        <div className='nameAndImageContainer'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`} alt='' className='pokemonImage'/>
        <h1 className='pokemonName'>{(info.name).charAt(0).toUpperCase() + (info.name).slice(1)}</h1>
        </div>
        <div className='favPokemonDetailsContainer'>
            <div className='pokemonDetails'>
                <h2>Height</h2>
                <h2>{info.height}</h2>
            </div>
            <div className='pokemonDetails'>
                <h2>Weight</h2>
                <h2>{info.weight}</h2>
            </div>
            <div className='pokemonDetails'>
                <h2>Type</h2>
                <h2>{(info.type).charAt(0).toUpperCase() + (info.type).slice(1)}</h2>
            </div>
        </div>
    </div>
  )
}
export default FavouritePokemon;
