import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  
  const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>MyStore</Link>
      <div>
        <Link to="/cart">Cart ({cartItemCount})</Link>
      </div>
    </nav>
  );
}