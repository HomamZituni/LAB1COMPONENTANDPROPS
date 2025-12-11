import '../../App.css'; 
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay =
({
 product,
showDescription = true,
showStockStatus = true,
onAddToCart,
children,
}: ProductDisplayProps) => { return (
    <div className="border p-4 rounded">
    {product.imageUrl && (
    <img 
    src={product.imageUrl}
    alt={product.name}
    className="w-32 h-32 object-cover rounded"
    />
    )}

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


 















