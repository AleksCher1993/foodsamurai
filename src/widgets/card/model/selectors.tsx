import { RootState } from "../../../app/store";

export const selectCart = (state: RootState) => state.card;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.card.card.find((obj) => obj.id === id);

  export const selectCartItems=(id:string)=>(state:RootState)=>
  state.card.card.reduce((sum,item)=>{
    if (item.id===id) {
      sum+=item.count
    }else sum+=0
    return sum
  },0)
