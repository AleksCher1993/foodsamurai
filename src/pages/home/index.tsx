import React, { useEffect, useRef } from "react";
import { Categories } from "../../widgets/categories";
import { Sort } from "./../../widgets/sort";
import { PizzaList } from "../../widgets/products";
import { PizzaSkeletonItem } from "../../entities/pizzaSkeletonItem";
import { getDatas } from "../../widgets/products/model/pizzaSlice";
import { ItemNotFound } from "../../widgets/search";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { homeSelectors } from "../../widgets/products/model/selectors";
import { navEnum } from "../../widgets/products/model/type";

export const Home: React.FC<{navType:navEnum,categories:string[]}> = ({navType,categories}) => {
  const home = useAppSelector(homeSelectors);
  const navTypeDatas=home.items.filter(item=>item.navType===navType)
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDatas(home.query));
  }, [home.query, dispatch]);

  if (home.loading === "failed") {
    return (
      <ItemNotFound>
        <h2>Такого товара пока нет 😕</h2>
        <p>Попробуйте ввести другой товар.</p>
      </ItemNotFound>
    );
  }
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categories={categories}/>
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {home.loading === "pending" ? (
          [...Array(6)].map((_, index) => <PizzaSkeletonItem key={index} />)
        ) : (
          <PizzaList store={navTypeDatas} />
        )}
      </div>
    </div>
  );
};
