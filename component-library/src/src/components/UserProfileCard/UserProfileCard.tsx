import '../../App.css'; // or './ProductDisplay.css'
import { ProductDisplayProps } from '../../types';

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  const { id, name, price, description, imageUrl, inStock } = product;

  return (
    <div className="product-display">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="product-image"
        />
      )}

      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>

      {showDescription && (
        <p className="product-description">{description}</p>
      )}

      {showStockStatus && (
        <p className={`product-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In stock' : 'Out of stock'}
        </p>
      )}

      {children}

      {onAddToCart && (
        <button
          className="add-to-cart-button"
          onClick={() => onAddToCart(id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDisplay;
