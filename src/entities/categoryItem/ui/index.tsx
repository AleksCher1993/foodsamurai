import React from "react"
import { CategoryItemProps } from "./type"


export const CategoryItem:React.FC<CategoryItemProps>=({name,active,id,toggleActive})=>{
    return <li onClick={()=>toggleActive(id)} className={`${active===id&&"active"}`}>{name}</li>
}