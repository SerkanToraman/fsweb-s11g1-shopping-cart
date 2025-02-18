import React from "react";
import { ScProduct } from "./scParts";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Product = (props) => {
  const {cart,setCart}=useContext(CartContext);

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => props.addItem(props.product,setCart,cart)}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
