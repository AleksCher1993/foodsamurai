import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonRedirect:React.FC<{title:string}> =({title})=>{
    const nav=useNavigate()
    return <div onClick={()=>nav(-1)} className="button button--black">
    <span>{title}</span>
    </div>
}