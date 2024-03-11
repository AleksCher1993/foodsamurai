import React, { useEffect, useState } from "react";
import { CategoryItem } from "../../../entities/categoryItem/ui";
import { useDispatch } from "react-redux";
import { changeQueryParams } from "../../products/model/pizzaSlice";
import { ToggleActive } from "./type";
import { useAppSelector } from "../../../app/hook";
import { querySelector } from "../model/selector";

export const Categories: React.FC<{ categories: string[] }> = ({
  categories,
}) => {
  let dispatch = useDispatch();
  let categorySelector = useAppSelector(querySelector);
  const [isShow, setIsShow] = useState(false);
  let [active, setActive] = useState(Number(categorySelector.category) || 0);

  useEffect(() => {
    setActive(Number(categorySelector.category));
  }, [categorySelector.category]);

  const toggleActive: ToggleActive = (id) => {
    setIsShow(false);
    dispatch(
      changeQueryParams({
        type: "category",
        value: id === 0 ? "" : id.toString(),
      })
    );
  };
  let categoriesList = categories.map((item, index) => {
    return (
      <CategoryItem
        key={index}
        active={active}
        name={item}
        id={index}
        toggleActive={toggleActive}
      />
    );
  });
  return (
    <div className={`categories ${isShow ? "show" : ""}`}>
      <div
        onClick={() => setIsShow(!isShow)}
        className="categories__popup d-none"
      >
        {categories[Number(categorySelector.category)] || categories[0]}
        <svg
          className="sort_triangle__6hO4A sort_triangleASC__h66IW"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          ></path>
        </svg>
      </div>
      <ul>{categoriesList}</ul>
    </div>
  );
};
