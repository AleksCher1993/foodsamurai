import React from "react";
import { NavLink } from "react-router-dom";
import empty from "./../../../../app/assets/img/empty-cart.png"
import { ButtonRedirect } from "../../../../shared/ui/buttoRedirect";

export const CardEmpty:React.FC=()=>{
    return <div className="content">
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая <>😕</></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={empty} alt="Empty cart"/>
        <NavLink to="/" >
          <ButtonRedirect title={"Вернуться назад"}/>
        </NavLink>
      </div>
    </div>
  </div>
}
