import React, { useEffect, useRef, useState } from "react";
import pizzaLogo from "./../../../app/assets/img/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { Search } from "../../search/ui/search";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { selectCart } from "../../card/model/selectors";
import { selectNav } from "../../../entities/navItem/model/selectors";
import styles from "./header.module.scss"
import { Busket } from "../../../entities/busket";
import { Burger } from "../../../entities/burger";
import { changeQueryParams } from "../../products/model/pizzaSlice";
export const Header: React.FC = () => {
  const [isActive,setIsActive]=useState(false)
  const dispatch=useAppDispatch()
  let card = useAppSelector(selectCart);
  let nav=useAppSelector(selectNav)
  let locat = useLocation();
  let locateName=locat.pathname.slice(1)
  let ln=locateName?locateName:""  
  let isMount = useRef(false);
  const resetFilter=()=>{
    dispatch(
      changeQueryParams({
        type: "category",
        value: "",
      })
    );
  }
  useEffect(() => {
    if (isMount.current) {
      localStorage.setItem("cardDatas", JSON.stringify(card.card));
    }
    isMount.current = true;
  }, [card]);
  return (
    <div className="header">
      <div className="container">
        <NavLink to={"/"}>
          <div className="header__logo">
            <img width="50" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>Food Samurai</h1>
              <p>еда для истинных самураев</p>
            </div>
          </div>
        </NavLink>
        {(locat.pathname === "/"||locat.pathname === "/pizzas"||locat.pathname === "/rolls"||locat.pathname === "/setsrolls"||locat.pathname === "/drinks") && (
          <>
          <div className={styles.search} onClick={()=>setIsActive(!isActive)}>
          <svg
        className={styles.searchIcon}
        fill="#000000"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 52.966 52.966"
      >
        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19  S32.459,40,21.983,40z" />
      </svg>
          </div>
            <Search isActive={isActive} />
            <Busket totalCount={card.totalCount} totalPrice={card.totalPrice}/>
          </>
        )}
        <Burger nav={nav} totalCount={card.totalCount} totalPrice={card.totalPrice}/>
      </div>
      <div className="header__bottom">
        <ul>
          {nav.nav.map((item,index)=>{
            if (index===0&&ln==="") {
              return <li key={index} onClick={resetFilter}  className={`active`}>
            <NavLink to={`/${item.name}`} >
            {item.nameRus}
            </NavLink>
          </li>
            }else 
            return <li key={index} onClick={resetFilter}  className={`${ln===item.name?"active":""}`}>
            <NavLink to={`/${item.name}`} >
            {item.nameRus}
            </NavLink>
          </li>
          }
          )}
        </ul>
      </div>
    </div>
  );
};
