import React from "react"
import { PizzaItem } from "../../../entities/pizzaItem"
import { itemsType } from "../model/type"

export const PizzaList:React.FC<{store:itemsType[]}>=({store})=>{
  
  let pizzasJson=store.map(item=>{
    return <PizzaItem key={item.id} {...item}/>
  })

    return <div className="content__items">
      {pizzasJson}
  </div>
}