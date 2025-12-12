// Alert Types
/** Defines the visual style and meaning of alert messages. */
export type AlertType = 'success' | 'error' | 'warning' | 'info';

/** Props for AlertBox component that displays colored notification messages with optional close button and extra content. */
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

// User Types and UserProfile Types
/** Represents a user with basic profile information. */
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

/** Props for UserProfileCard component that displays user information with configurable sections and edit functionality. */
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

// Product Types
/** Represents a product with pricing, description, and inventory information. */
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

/** Props for ProductDisplay component that shows product details with toggleable sections and add-to-cart functionality. */
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
