import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="cart-image"
          />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <div className="qty-control">
  <button onClick={() => decreaseQty(item._id)}>-</button>

  <span>{item.qty}</span>

  <button onClick={() => increaseQty(item._id)}>+</button>
</div>
            <p>₹{item.price}</p>
          </div>

          <div className="cart-actions">
            <h3>₹{(item.price * item.qty).toFixed(2)}</h3>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ₹{cartTotal.toFixed(2)}</h2>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}