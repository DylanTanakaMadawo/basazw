import { useContext } from "react";
import { Divider } from "@mui/material";
import { CartContext } from "../../WishlistContext";

import "./Wishlist.css";

export const CartItem = (props) => {
  const { id, location, contact, myImage, description, fee } = props.data;

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div
      sx={{
        backgroundColor: "black",
      }}
    >
      <div className="cart-container">
        <div className="cart-product-ccontainer">
          <div className="car-image-container">
            <img src={myImage} alt="task" />
          </div>
          <Divider
            sx={{ backgroundColor: "grey" }}
            orientation="vertical"
            flexItem
          />
          <div className="cart-info-container">
            <div
              className="product-info"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "25px",
              }}
            >
              <p style={{ fontSize: "17px" }}>
                {description} at {location}.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                ${fee}/hr
              </p>
              <p style={{ fontSize: "17px" }}> contact : {contact}</p>
              <div className="remove-from-list">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(id)}
                >
                  Remove from wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
