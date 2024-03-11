import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "../../widgets/products/model/pizzaSlice";
import { cardReducer } from "../../widgets/card/model/cardSlice";
import { navReducer } from "../../entities/navItem";
import { categoriesReducer } from "../../widgets/categories";


const store = configureStore({
    reducer:{
        home:pizzaReducer,
        card:cardReducer,
        nav:navReducer,
        categories:categoriesReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>; //Получаем типизацию store.getState
export type AppDispatch = typeof store.dispatch; //Получаем типизацию store.dispatch