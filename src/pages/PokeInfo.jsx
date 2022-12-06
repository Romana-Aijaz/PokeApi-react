import './pokeInfo.css';
import {useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavPokemon, removeFavPokemon } from '../redux/reducer';
import { useEffect, useState } from 'react';

const PokeInfo = () => {
  const [addedToFav, setAddToFav] = useState(false);
  const location = useLocation(); 
  const dispatch = useDispatch();
  const favouritesList = useSelector((state) => state.favPokemons.value)
  
  useEffect(() => {
    for (var i = 0; i<favouritesList.length; i++) {
      if (favouritesList[i].id === location.state.id) {
        setAddToFav(true);
        console.log("found it")
      }
    }
  }, [])

  const addToFav = () => {
    dispatch(addFavPokemon(
      {id: location.state.id, 
      name: location.state.name, 
      height: location.state.height,
       weight: location.state.weight, 
       type: location.state.type}))
       setAddToFav(true);
  }

  const removeFromFav = () => {
    dispatch(removeFavPokemon(
      {id: location.state.id, 
      name: location.state.name, 
      height: location.state.height,
       weight: location.state.weight, 
       type: location.state.type}
      ))
      setAddToFav(false)
  }
  console.log(favouritesList)
  return (
    <div className='infoContainer'>
        <div className='infoCard'>
        <div className='pokemonInfoLogoContainer'>
          <img src='http://localhost:3000/logo.png' className='pokemonInfoLogo'/>
          <div className='pokemonFavIconContainer'>
           { !addedToFav ? (<img src='http://localhost:3000/addToFav.png' className='favIcon' onClick={()=>{addToFav()}}/>)
            : (<img src='http://localhost:3000/addedToFav.png' className='favIcon' onClick={()=>{ removeFromFav()}}/>)
           }
          </div>
        </div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${location.state.id}.svg`} alt='' className='pokemonImage'/>
        <h1 className='pokemonName'>{(location.state.name).charAt(0).toUpperCase() + (location.state.name).slice(1)}</h1>
        <div className='pokemonDetailsContainer'>
            <div className='pokemonDetails'>
                <h2>Height</h2>
                <h2>{location.state.height}</h2>
            </div>
            <div className='pokemonDetails'>
                <h2>Weight</h2>
                <h2>{location.state.weight}</h2>
            </div>
            <div className='pokemonDetails'>
                <h2>Type</h2>
                <h2>{(location.state.type).charAt(0).toUpperCase() + (location.state.type).slice(1)}</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PokeInfo;