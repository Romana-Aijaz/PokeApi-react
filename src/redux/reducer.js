import { createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name: "favPokemons",
    initialState: {value: []
    },
    reducers: {
        addFavPokemon: (state, action) => {
            state.value.push(action.payload);
        },
        removeFavPokemon: (state, action) => {
            state.value = state.value.filter((pokemon) =>
            pokemon.id !== action.payload.id
            )
        }
    },
});

export const {addFavPokemon, removeFavPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;