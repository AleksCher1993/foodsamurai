import { createSlice } from "@reduxjs/toolkit";
import { Inav } from "./type";


const initialState:Inav={
    nav:[{id:0,name:"pizzas",nameRus:"Пиццы"},{id:1,name:"rolls",nameRus:"Роллы"},{id:2,name:"setsrolls",nameRus:"Сеты роллов"},{id:3,name:"drinks",nameRus:"Напитки"}]
}

const navSlice=createSlice({
    name:"navSlice",
    initialState,
    reducers:{}
})

export const {}=navSlice.actions
export const navReducer= navSlice.reducer