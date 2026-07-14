import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (cart.length === 0) return <h2 style={{ padding: '2rem' }}>Your cart is empty.</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span>{item.name} (x{item.qty})</span>
          <span>
            ${item.price * item.qty}
            <button onClick={() => removeFromCart(item._id)} style={{ marginLeft: '1rem' }}>Remove</button>
          </span>
        </div>
      ))}
      <h3>Total: ${cartTotal.toFixed(2)}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}