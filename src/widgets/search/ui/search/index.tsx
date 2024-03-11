import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { changeQueryParams } from "../../../products/model/pizzaSlice";

export const Search:React.FC<{isActive:boolean}> = ({isActive}) => {
  const [inputText, setInputText] = useState("");
  const refInput = useRef<HTMLInputElement>(null);
  let dispatch = useDispatch();
  let deb = useCallback(
    debounce(
      (text:string) => {
      dispatch(changeQueryParams({ type: "category", value: "" }))
      dispatch(changeQueryParams({ type: "title", value: text }))},
      500
    ),
    []
  );
      
  const inputhandlet = (text:string) => {
    setInputText(text);
    deb(text);
  };
  const clearInputText = () => {
    setInputText("");
    refInput.current?.focus();
    deb("");
  };
  return (
    <div className={`${styles.search} ${isActive?styles.active:""}`}>
      <svg
        className={styles.searchIcon}
        fill="#000000"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 52.966 52.966"
      >
        <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19  S32.459,40,21.983,40z" />
      </svg>
      <input
        ref={refInput}
        value={inputText}
        onChange={(e) => inputhandlet(e.target.value)}
        type="text"
        placeholder="search"
      />
      {inputText && (
        <svg
          className={styles.closeIcon}
          width="18px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          onClick={clearInputText}
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M7 17L16.8995 7.10051"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
