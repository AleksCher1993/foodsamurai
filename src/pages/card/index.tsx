import { CardEmpty,CardBody } from "../../widgets/card";
import { useAppSelector } from "../../app/hook";
import { selectCart } from "../../widgets/card/model/selectors";

export const Card:React.FC = () => {
  let cardDatas=useAppSelector(selectCart)
  
  
  return (
    <div className="content">
      <div className="container container--cart">
        {cardDatas.card.length===0
        ?<CardEmpty/>
        :<CardBody cardItems={cardDatas.card} totalPrice={cardDatas.totalPrice} totalCount={cardDatas.totalCount}/>
      }
      </div>
    </div>
  );
};
