import { useState } from "react";
import { Button } from "../../../shared/ui/button/button";
import { changeItem } from "../../../widgets/card/model/cardSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { itemsType, navEnum } from "../../../widgets/products/model/type";
import {
  selectCartItemById,
  selectCartItems,
} from "../../../widgets/card/model/selectors";
import { useNavigate } from "react-router-dom";
import s from "./pizzaItem.module.scss";
import { getSliceText } from "../../../shared/utils/getSliceText";
export const PizzaItem: React.FC<itemsType> = ({
  id,
  title,
  price,
  types,
  sizes,
  imageUrl,
  description,
  navType
}) => {
  let typesList = ["тонкое", "традиционное"];

  const cardItem = useAppSelector(selectCartItemById(id));
  let addedCount = cardItem ? cardItem.count : 0;
  let navigate = useNavigate();
  let cnt = useAppSelector(selectCartItems(id));
  let [activeType, setActiveType] = useState(0);

  let [activeSize, setActiveSize] = useState(0);
  let [count, setCount] = useState<number>(cnt || addedCount);

  let dispatch = useAppDispatch();

  const insertCountHandler = (navTypeName?:navEnum) => {
    let itemCard = {
      title,
      price,
      imageUrl,
      id,
      count: 0,
      type: types&&types[activeType],
      size: sizes&&sizes[activeSize],
      navType,
      description
    };
    ++count;
    setCount(count);
    dispatch(changeItem({ typeName: "add", itemCard,navTypeName }));
  };
  return (
    <div className="pizza-block">
      <img
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/${id}`)}
        className="pizza-block__image"
        src={imageUrl}
        alt={title}
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        {types && sizes ? (
          <>
            <ul>
              {types.map((type, index) => {
                if (types.length === 1) {
                  return (
                    <li
                      key={index}
                      onClick={() => setActiveType(type)}
                      className="active"
                    >
                      {typesList[type]}
                    </li>
                  );
                } else
                  return (
                    <li
                      key={index}
                      onClick={() => setActiveType(type)}
                      className={`${activeType === type && "active"}`}
                    >
                      {typesList[type]}
                    </li>
                  );
              })}
            </ul>
            <ul>
              {sizes.map((size, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveSize(index)}
                    className={`
        ${activeSize === index && "active"}
        `}
                  >
                    {size} см.
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div className={s.desc}>{getSliceText(description)}</div>
        )}
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button count={count} clickHandler={navType===navEnum.PIZZA?()=>insertCountHandler(navEnum.PIZZA):()=>insertCountHandler()} />
      </div>
    </div>
  );
};
