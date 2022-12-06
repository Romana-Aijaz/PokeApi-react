import './favourites.css';
import { useSelector, useDispatch } from 'react-redux';
import FavouritePokemonList from '../components/FavouritePokemonList';
import FavouritePokemon from '../components/FavouritePokemon';
import { useState } from 'react';

const Favourites = () => {
  const favouritesList = useSelector((state) => state.favPokemons.value)
  const [favPokeInfo, setFavPokeInfo] = useState()
  const [favourites, setFavourites] = useState(favouritesList)
  console.log(favourites)
  return (
    <div className='favouritesContainer'>
      <div className='favouriteListContainer'>
        <div className='favouriteListHeading'><h1>Favourites</h1>
        <div className='favouriteHeadingIconContainer'>
            <img className='favouriteHeadingIcon'src='http://localhost:3000/addedToFav.png' />
        </div>
        </div>
        <div className='favouriteListWrapper'>
          {favourites.length != 0 ? favourites.map((favPoke) => 
          (
            <FavouritePokemonList key={favPoke.id} id={favPoke.id} name={favPoke.name} 
            height={favPoke.height} 
            weight={favPoke.weight}
            type={favPoke.type}
            favPokemon={poke=>setFavPokeInfo(poke)}
            />
          ))
          : (<div className='emptyFavourites'>No favourites to show</div>)
        }
        </div>
      </div>
      <div className='favouritePokemonContainer'>
        {favPokeInfo ? <FavouritePokemon info={favPokeInfo} /> : <div className='emptyDetails'>Details...</div>}
      </div>
    </div>
  );
}

export default Favourites;
