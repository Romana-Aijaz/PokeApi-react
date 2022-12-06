import { configureStore } from "@reduxjs/toolkit";
import favPokeReducer from "./reducer";
const store = configureStore({
    reducer: {
        favPokemons: favPokeReducer,
    }
})

export default store;
