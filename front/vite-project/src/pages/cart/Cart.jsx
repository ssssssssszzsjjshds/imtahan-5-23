import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setCart(storedCart);
    setWishList(storedWish);
  }, []);

  const AddToWish = (item) => {
    let existingItem = wishList.find((product) => product._id === item._id);
    if (existingItem) {
      toast.error("Item already in wish list");
    } else {
      const updatedWish = [...wishList, item];
      setWishList(updatedWish);
      localStorage.setItem("wish", JSON.stringify(updatedWish));
      toast.success("item added to wish list");
    }
  };

  const RemoveFromCart = (item) => {
    const updatedCart = cart.filter((product) => product._id !== item._id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const IncreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product._id === item._id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const DecreaseQuantity = (item) => {
    const updatedCart = cart.map((product) =>
      product._id === item._id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalsum = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className={styles.container}>
      <Toaster />
      <h1 className={styles.sum}>CartTotal: ${totalsum}</h1>
      <div className={styles.cards}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className={styles.card} key={item._id}>
              <div className={styles.img}>
                {" "}
                <img src={item.image} alt="" />
                <div className={styles.buttons}>
                  <button
                    onClick={() => RemoveFromCart(item)}
                    className={styles.cart}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={() => IncreaseQuantity(item)}
                    className={styles.plus}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    onClick={() => DecreaseQuantity(item)}
                    className={styles.minus}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <button
                    onClick={() => AddToWish(item)}
                    className={styles.wish}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>

              <p>{item.name}</p>
              <p>Price : $ {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Sebet bosdu</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
