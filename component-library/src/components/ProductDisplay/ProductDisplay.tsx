import '../../App.css'; 
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) => {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      )}

      <h3>{product.name}</h3>
      <p className="product-price">${product.price}</p>
      
      {showDescription && <p className="product-description">{product.description}</p>}
      
      {showStockStatus && (
        <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      )}
      
      {onAddToCart && (
        <button 
          onClick={() => onAddToCart(product.id)} 
          className="add-to-cart-btn"
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}
      
      {children}
    </div>
  ); }