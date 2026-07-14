import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-title">Latest Products</h2>

      <div className="products-grid">
        {products.map((product) => {
          const cartItem = cart.find(
            (item) => item._id === product._id
          );

          return (
            <div key={product._id} className="product-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <h3>{product.name}</h3>

                <p className="price">₹{product.price}</p>

                {cartItem ? (
                  <div className="qty-control">
                    <button
                      onClick={() => decreaseQty(product._id)}
                    >
                      -
                    </button>

                    <span>{cartItem.qty}</span>

                    <button
                      onClick={() => increaseQty(product._id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}