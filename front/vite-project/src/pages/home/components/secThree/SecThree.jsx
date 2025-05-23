import React from "react";
import styles from "./SecThree.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { GetProductsThunk } from "../../../../redux/reducers/productSlice";
import toast, { Toaster } from "react-hot-toast";

const SecThree = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(GetProductsThunk());
    JSON.parse(localStorage.getItem("cart")) || [];
    JSON.parse(localStorage.getItem("wish")) || [];
  }, [dispatch]);

  function AddToWish(item) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let existingItem = wish.find((product) => product._id === item._id);
    if (existingItem) {
      toast.error("Item already in wish list");
    } else {
      wish.push(item);
      localStorage.setItem("wish", JSON.stringify(wish));
      toast.success("Item added to wishlist");
    }
  }
  function AddToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((product) => product._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Item added to cart");
  }

  const [sort, setSort] = useState("default");
  const [searchText, setSearchText] = useState("");

  const filtered =
    products &&
    products
      .filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "asc") {
          return Number(a.price) - Number(b.price);
        } else if (sort === "desc") {
          return Number(b.price) - Number(a.price);
        }
        return 0;
      });

  return (
    <div className={styles.container}>
        <Toaster/>
      <h1>Featured Products</h1>
      <span>We have your occasion covered</span>
      <div className={styles.sortFilter}>
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={() => setSort("asc")}>Ascending</button>
        <button onClick={() => setSort("desc")}>Descending</button>
        <button onClick={() => setSort("default")}>Default</button>
      </div>
      <div className={styles.cards}>
        {filtered &&
          filtered.map((product) => (
            <div className={styles.card} key={product._id}>
              <div className={styles.img}>
                <img src={product.image} alt="" />{" "}
                <div className={styles.buttons}>
                  <button
                    className={styles.cart}
                    onClick={() => AddToCart(product)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    className={styles.wish}
                    onClick={() => AddToWish(product)}
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className={styles.rate}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className={styles.texts}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecThree;
