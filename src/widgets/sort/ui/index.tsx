import React, { useState } from "react";
import styles from "./sort.module.scss"
import { changeQueryParams } from "../../products/model/pizzaSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { ChangeSortTitle } from "./type";
import { querySelector } from "../../categories/model/selector";


export const Sort:React.FC = React.memo(() => {
  const dispatch=useAppDispatch()
  let sortBy=useAppSelector(querySelector)
let sortTitles= ["популярности","цене","алфавиту"]
let sort=["rating","price","title"]
let order=["asc","desc"]
let [isActive,setActive]=useState(false)


let [isOrder,setOrder]=useState(Boolean(order.findIndex(item=>item===sortBy.order)))


const changeSortTitle:ChangeSortTitle=(id)=>{
  setActive(false)
  dispatch(changeQueryParams({type:"sortBy",value:sort[id]}))
}
const changeOrder=()=>{
  setOrder(!isOrder)
  dispatch(changeQueryParams({type:"order",value:order[Number(!isOrder)]}))
}

    return (
      <div className="sort">
        <div className="sort__label">
          <svg
          className={`${styles.triangle} ${!isOrder?styles.triangleASC:styles.triangleDESC}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={changeOrder}
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            ></path>
          </svg>
          <b>Сортировка по:</b>
          <span onClick={()=>setActive(!isActive)}>{sortTitles[sort.findIndex((item)=>item===sortBy.sortBy)]}</span>
        </div>
        {isActive&&<div className="sort__popup">
          <ul>
            {sortTitles.map((title,index)=>{return <li key={index} onClick={()=>changeSortTitle(index)} className={sort[index]===sortBy.sortBy?"active":""}>{title}</li>})}
          </ul>
        </div>}
      </div>
    );
  })
  
 