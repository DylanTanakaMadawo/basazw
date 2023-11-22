import { useContext, useEffect, useState } from "react";

import { CartItem } from "./CartItem";

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../WishlistContext";

import { DATA } from "../../Data";
//change based on the source of data

import axios from "axios";

export const Wishlist = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  //data from mongodb
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // setLoading(true);
    axios
      .get("http://localhost:5555/posts")
      .then((res) => {
        setPosts(res.data.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("error occured bro");
        // setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        margin: "20px",
        height: "100%",
      }}
    >
      <div>
        {posts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <>
                <CartItem data={product} />
              </>
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <p style={{ color: "#f6f6f6" }}>{totalAmount} jobs in your wishlist</p>
      ) : (
        <div style={{ height: "200px" }}>
          <h1 style={{ color: "black" }}>
            Wishlist IS EMPTY, browse for <Link to="/browse">Jobs</Link>
          </h1>
        </div>
      )}
      {/* {totalAmount > 0 ? (
        <>
          <div
            style={{
              marginTop: "20px",
              color: "white",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Subtotal : </p>
              <p style={{ fontWeight: "bold" }}>${totalAmount}</p>
            </div>
          </div>
        </>
      ) : (
        <div style={{ height: "200px" }}>
          <h1 style={{ color: "black" }}>Wishlist IS EMPTY</h1>
        </div>
      )} */}
    </div>
  );
};
