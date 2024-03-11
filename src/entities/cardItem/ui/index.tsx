import React from "react";
import {changeItem, deleteItem } from "../../../widgets/card/model/cardSlice";
import { useAppDispatch } from "../../../app/hook";
import s from "./cardItem.module.scss"
import { cardType } from "../../../widgets/card/model/type";
import { navEnum } from "../../../widgets/products/model/type";

let dough=["тонкое","традиционное"]
export const CardItem:React.FC<cardType>=({title,id,price,imageUrl,count,type,size,navType})=>{
  let dispatch=useAppDispatch()
  let t=type?type:0

  const changeItemsToCard=(typeName:string,navTypeName?:navEnum)=>{
    let itemCard={
      title,id,imageUrl,price,count:0,type,size,navType
    }
    dispatch(changeItem({typeName,itemCard,navTypeName}))
  }
  const deleteItemToCard=(id:string,navTypeName?:navEnum)=>{
    dispatch(deleteItem({id,typeName:type,size,navTypeName}))
  }
  
    return <div className="cart__item">
    <div className="cart__item-img">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
    </div>
    <div className="cart__item-info">
      <h3>{title}</h3>
      {size&&<p>{dough[t]} тесто, {size} см.</p>}
    </div>
    <div className="cart__item-count">
      <div onClick={navType===navEnum.PIZZA?()=>changeItemsToCard("sub",navEnum.PIZZA):()=>changeItemsToCard("sub")} className={`button button--outline button--circle cart__item-count-minus ${count===1&&s.cartDisabled}`}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          ></path>
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          ></path>
        </svg>
      </div>
      <b>{count}</b>
      <div onClick={navType===navEnum.PIZZA?()=>changeItemsToCard("add",navEnum.PIZZA):()=>changeItemsToCard("add")} className="button button--outline button--circle cart__item-count-plus">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          ></path>
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          ></path>
        </svg>
      </div>
    </div>
    <div className="cart__item-price">
      <b>{price*count} ₽</b>
    </div>
    <div onClick={navType===navEnum.PIZZA?()=>deleteItemToCard(id,navEnum.PIZZA):()=>deleteItemToCard(id)} className="cart__item-remove">
      <div className="button button--outline button--circle">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          ></path>
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          ></path>
        </svg>
      </div>
    </div>
  </div>
}