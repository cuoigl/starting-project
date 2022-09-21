import { useNavigate } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <h1 onClick={() => navigate("/")}>ReduxCart</h1>
      <button
        className={classes.button__product}
        onClick={() => navigate("/product")}
      >
        Product
      </button>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
