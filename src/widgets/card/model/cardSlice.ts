import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCardFromLS } from "./getCardFromLS"
import { ICardSlice, cardType } from "./type"
import { productAPI } from "../api/postProduct"
import { loadingEnum, navEnum } from "../../products/model/type"

export const postProduct=createAsyncThunk<any,any>(
    "cardSlice/postProduct",
    async(params,{dispatch})=>{
        await productAPI.postProduct(params)
        dispatch(clearDatasToCard())
    }
)

const initialState:ICardSlice=getCardFromLS()

const cardSlice=createSlice({
    name:"cardSlice",
    initialState,
    reducers:{
        changeItem:(state,action:PayloadAction<{typeName:string,itemCard:cardType,navTypeName?:navEnum}>)=>{
            if (state.card.length===0) {   
                state.card.push({...action.payload.itemCard,count:1})
            }else{
                let card=state.card.find(item=>item.id===action.payload.itemCard.id)
                if (!card) {
                    state.card.push({...action.payload.itemCard,count:1})
                }else{
                    let cartItem;
                    if (action.payload.navTypeName&&action.payload.navTypeName===navEnum.PIZZA) {   
                        cartItem=state.card.find(item=>item.id===action.payload.itemCard.id&&item.type===action.payload.itemCard.type&&item.size===action.payload.itemCard.size)
                    }else{
                        cartItem=state.card.find(item=>item.id===action.payload.itemCard.id)
                    }
                    if (action.payload.typeName==="add") {    
                        if (cartItem) {
                            cartItem.count++
                        }else{
                            state.card.push({...action.payload.itemCard,count:1})
                        }
                    }
                    if (action.payload.typeName==="sub") {
                        if (cartItem) {   
                            if (cartItem.count===1) {
                                cartItem.count=1
                            }else{
                                cartItem.count--
                            }
                        }
                    }
                }
            }
           state.totalCount=state.card.reduce((sum,item)=>{
            return sum+=item.count
           },0)
           state.totalPrice=state.card.reduce((sum,item)=>{
            return sum+=(item.price * item.count)
           },0)
           
        },
        clearDatasToCard:(state)=>{
            state.card=[]
            state.totalCount=0
            state.totalPrice=0
        },
        deleteItem:(state,action:PayloadAction<{id:string,typeName:number|undefined,size:number|undefined,navTypeName?:navEnum}>)=>{
            if (action.payload.navTypeName&&action.payload.navTypeName===navEnum.PIZZA) {   
                state.card=state.card.filter(item=>item!==state.card.find(it=>it.id===action.payload.id&&it.type===action.payload.typeName&&it.size===action.payload.size))
            }else {
                state.card=state.card.filter(item=>item.id!==action.payload.id)

            }
            state.totalCount=state.card.reduce((sum,item)=>{
                return sum+=item.count
               },0)
               state.totalPrice=state.card.reduce((sum,item)=>{
                return sum+=(item.price * item.count)
               },0)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(postProduct.fulfilled,(state)=>{
            state.loading=loadingEnum.SUCCESS
        })
        builder.addCase(postProduct.pending,(state)=>{
            state.loading=loadingEnum.PENDING
        })
        builder.addCase(postProduct.rejected,(state)=>{
            state.loading=loadingEnum.FAILD
        })
    },
})

export const {changeItem,clearDatasToCard,deleteItem}=cardSlice.actions
export const cardReducer=cardSlice.reducer