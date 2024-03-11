import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "./type";

const initialState:ICategories={
    categories:{
        pizzas:["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"],
        rolls:["Все","Вегетарианские","Запеченные","Сладкие"],
        setrolls:["Все","Вегетарианские","Запеченные"],
        drinks:["Все"]
      },
}

const categoriesSlice=createSlice({
    name:"categoriesSlice",
    initialState,
    reducers:{}
})

export const {}=categoriesSlice.actions;
export const categoriesReducer=categoriesSlice.reducer;