import { itemsType } from "../../../widgets/products/model/type";
import s from "./itemInfo.module.scss";
import { ButtonRedirect } from "../../../shared/ui/buttoRedirect";
export const ItemInfo = ({ imageUrl, title, description }: itemsType) => {
  return (
    <div className={`content ${s.cotent}`}>
      <div className="container ">
        <div className={s.btnBack}>
          <ButtonRedirect  title="Вернуться на главную" />
        </div>
        <div className={s.body}>
          <img className="pizza-block__image" src={imageUrl} alt={title} />
          <div className={s.description}>
            <div>
              <h4 className="pizza-block__title">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
