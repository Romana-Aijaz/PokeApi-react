import './home.css';
import PokemonList from '../components/PokemonList';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const Home = () => {
    const navigate = useNavigate();
    const [pokeData, setPokeData] = useState([])
    const [pokeDataPerPage, setPokeDataPerPage] = useState([]);
    const [dataLimit, setDataLimit] = useState(10)
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10")
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [countPokemon, setCountPokemon] = useState(0)

    const resizePokemonList = (size) => {
        setPokeData([])
        setUrl("https://pokeapi.co/api/v2/pokemon/?limit="+size)
    }

    const pokeFun = async() => {
        setLoading(true)
        const res = await axios.get(url)
        console.log(res)
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        getPokemon(res.data.results)
        console.log(pokeData)
        console.log(pokeDataPerPage)
        setLoading(false)
    }
     
    const getPokemon = async (pokemonArray) => {
    pokemonArray.map(async(item) => {
        const result = await axios.get(item.url);
        console.log(result.data)
        setPokeData(state=>{
            state=[...state, result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })
    })
    }
    useEffect( () => {
        console.log(url)
      pokeFun();
    }, [url])
  
    return (
    <div className='homeContainer'>
    <div className='pokemonListWrapper'>
    <div className='pokemonLogoContainer'>
        <img src='http://localhost:3000/logo.png' className='pokemonLogo'/>
    </div>
    <div className='pokemonList'>
    <PokemonList pokemon={pokeData} loading={loading}
    infoPokemon={poke=>setPokeDex(poke)}
    />
    </div>
    </div>
    <div className='buttonsContainer'>
        <div className='pageButtonsContainer'>
        {previousUrl && <button className='buttons' onClick={()=>{
            setPokeData([])
            setUrl(previousUrl)
        }}>Previous</button>
        }
        {nextUrl &&
        <button className='buttons' onClick={()=>{
            setPokeData([])
            setUrl(nextUrl)
            console.log(url)
        }}>Next</button>}
        </div>
        <div className='resizeInputContainer'>
        <input type="number" min="1" max="100" placeholder='Items per page' onChange={(e)=>
            {resizePokemonList(e.target.value)}} className='resizeInput'/>
        </div>
        <button className='buttons' onClick={()=> navigate("/favourites")}>Favourites</button>
    </div>
    {pokeDex ? navigate("/pokeInfo",
     {state: {id: pokeDex.id, 
      height: pokeDex.height,
      weight: pokeDex.weight,
      name: pokeDex.name,
      type: pokeDex.types[0].type.name }
      }) : <></>}
    
    </div>
  );
}

export default Home;