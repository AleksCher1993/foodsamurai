import React, { useState } from "react";
import s from "./burger.module.scss";
import { Inav } from "../../navItem/model/type";
import { NavLink, useLocation } from "react-router-dom";
import { Busket } from "../../busket";
export const Burger: React.FC<{
  nav: Inav;
  totalCount: number;
  totalPrice: number;
}> = ({ nav, totalCount, totalPrice }) => {
  const [isActive, setIsActive] = useState(false);
  let locat = useLocation();
  let locateName=locat.pathname.slice(1)
  let ln=locateName?locateName:""  
  return (
    <div className={`burger ${s.burger}`}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`${s.burgerBTN} ${isActive ? s.active : ""}`}
      >
        <span></span>
      </div>
      <div className={`${s.menu} ${isActive ? s.show : ""}`}>
        <ul>
          <li className={s.busket} onClick={()=>setIsActive(false)}>
            <Busket totalCount={totalCount} totalPrice={totalPrice} />
          </li>
          {nav.nav.map((item, index) => (
            <li key={index} className={`${ln===item.name?s.active:""}`}>
              <NavLink onClick={()=>setIsActive(false)} to={`/${item.name}`}>{item.nameRus}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
