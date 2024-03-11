import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import { getItemDescription } from "../../widgets/products/model/selectors";
import { ItemNotFound } from "../../widgets/search";
import { ButtonRedirect } from "../../shared/ui/buttoRedirect";
import { ItemInfo } from "../../entities/itemInfo";

export const ItemDescript = () => {
  let param = useParams();

  let itemFromDatas = useAppSelector(
    getItemDescription(param.itemId as string)
  );

  if (!itemFromDatas) {
    return (
      <ItemNotFound>
        <h2>Уупс, кажется вы не выбрали товар 😕</h2>
        <p>Вернитесь на главную страницу и выберите товар.</p>
        <NavLink to="/">
          <ButtonRedirect title="Вернуться на главную" />
        </NavLink>
      </ItemNotFound>
    );
  }
  return (
    <ItemInfo {...itemFromDatas}/>
  );
};
