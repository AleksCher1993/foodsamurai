import styles from "./pageNotFound.module.scss";
import { ButtonRedirect } from "../../shared/ui/buttoRedirect";
import { NavLink } from "react-router-dom";
export const PageNotFound:React.FC = () => {
  return (
    <div className="content">
      <div className="container">
        <div className={styles.body}>
            <h2>
            Такая страница не найдена 😕
            </h2>
            <p>К сожалению произошли какие-то проблемы. Перейдите на другую страницу или </p>
            <NavLink to="/" >
            <ButtonRedirect title={"Вернуться на главную"}/>
            </NavLink>
        </div>
      </div>
    </div>
  );
};
