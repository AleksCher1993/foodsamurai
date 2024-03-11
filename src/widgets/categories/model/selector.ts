import { RootState } from "../../../app/store";

export const querySelector=(state:RootState)=>state.home.query
export const categSelector=(state:RootState)=>state.categories