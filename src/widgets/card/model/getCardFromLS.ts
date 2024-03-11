import { loadingEnum } from "../../products/model/type";
import { cardType } from "./type";

const totalCountFunc = (data: cardType[]) => {
  return data.reduce((sum, item) => (sum += item.count), 0);
};
const totalPriceFunc = (datas: cardType[]) => {
  return datas.reduce((sum, item) => (sum += item.price * item.count), 0);
};
export const getCardFromLS = () => {
  const data = localStorage.getItem("cardDatas");
  let card = data ? JSON.parse(data) : [];
  let totalCount = totalCountFunc(card);
  let totalPrice = totalPriceFunc(card);
  return {
    card:card as cardType[],
    totalCount,
    totalPrice,
    loading:loadingEnum.IDLE
  };
};
