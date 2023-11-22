import { createContext, useState, useEffect } from "react";
import { DATA } from "./Data";

//after link with backend change static DATA to data from mongodb

import axios from "axios";

export const CartContext = createContext(null);

//geting data from mongodb database
// const [posts, setPosts] = useState([]);

//
// const [posts, setPosts] = useState([]);
// axios
//   .get("http://localhost:5555/posts")
//   .then((res) => {
//     setPosts(res.data.data);
//     // posts = res.data.data;
//     // setLoading(false);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("error occured bro");
//     // setLoading(false);
//   });
//

const getDefaultCart = () => {
  let cart = {};
  // let dbpost = axios
  //   .get("http://localhost:5555/posts")
  //   .then((res) => {
  //     dbpost = res.data.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("error occured bro");
  //     setLoading(false);
  //   });

  for (let i = 1; i <= DATA.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const [posts, setPosts] = useState([]);
  // axios
  //   .get("http://localhost:5555/posts")
  //   .then((res) => {
  //     setPosts(res.data.data);
  //     posts = res.data.data;
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     console.log("error occured bro");
  //     setLoading(false);
  //   });

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = DATA.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.fee;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
