import '../../App.css'; 
import { ProductDisplayProps } from '../../types';

export const ProductDisplay =
({
 product,
showDescription = true,
showStockStatus = true,
onAddToCart,
children,
}: ProductDisplayProps) => { return (
    <div className="border p-4 rounded">
      <h3>{product.name}</h3>
      <p className="text-lg font-bold">${product.price}</p>
      
      {showDescription && <p>{product.description}</p>}
      
      {showStockStatus && (
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      )}
      
      {onAddToCart && (
        <button onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      )}
      
      {children}
    </div>
  );
};


 















