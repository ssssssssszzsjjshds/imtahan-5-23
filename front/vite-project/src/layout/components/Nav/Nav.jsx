import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    console.log(totalcart);
    
  }, []);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wish = JSON.parse(localStorage.getItem("wish")) || [];
  const totalcart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );



  const totalwish = wish.length
  return (
    <div className={styles.container}>
      <nav>
        <span className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <Link to="/">
          <img
            src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=600"
            alt=""
          />
        </Link>
        <div className={styles.menus}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/Wish">Wish</Link>
          <Link to="/Admin">Admin</Link>
          <Link to="/dsadsadasdasda">404</Link>
        </div>

        <div className={styles.icons}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className={styles.cart}>

            <Link to="/cart">
            <p>{totalcart}</p>
              <i className="fa-solid fa-shopping-cart"></i>
            </Link>
          </div>
          <div className={styles.wish}>
          <Link to="/Wish">
            {" "}<p>{totalwish}</p>
            <i className="fa-regular fa-heart"></i>
          </Link></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
