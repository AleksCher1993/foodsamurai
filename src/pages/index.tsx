import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./home";
import { Card } from "./card";
import { PageNotFound } from "./pageNotFound";
import {ItemDescript} from "./itemDescript";
import { navEnum } from "../widgets/products/model/type";
import { useAppSelector } from "../app/hook";
import { categSelector } from "../widgets/categories/model/selector";

export const AppRoutes = () => {
  const categ = useAppSelector(categSelector).categories;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home navType={navEnum.PIZZA} categories={categ.pizzas}/>} />
        <Route path="/pizzas" element={<Home navType={navEnum.PIZZA} categories={categ.pizzas}/>} />
        <Route path="/rolls" element={<Home navType={navEnum.ROLL} categories={categ.rolls}/>} />
        <Route path="/setsrolls" element={<Home navType={navEnum.SETROLL} categories={categ.setrolls}/>} />
        <Route path="/drinks" element={<Home navType={navEnum.DRINK} categories={categ.drinks}/>} />
        <Route path="/:itemId" element={<ItemDescript />} />
        <Route path="cart" element={<Card />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
