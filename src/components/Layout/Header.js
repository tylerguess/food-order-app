import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A banquet" />
      </div>
    </>
  );
};

export default Header;
