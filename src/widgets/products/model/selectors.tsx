import { RootState } from "../../../app/store";

export const homeSelectors=(state:RootState)=>state.home

export const getItemDescription=(id:string)=>(state:RootState)=>state.home.items.find(item=>item.id===id)