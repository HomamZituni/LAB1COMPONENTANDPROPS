import './App.css'
import './App.css';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { AlertBox } from './components/AlertBox/AlertBox';

function App() {
  const exampleUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    avatarUrl: '/Avatar.svg'
  };

  const exampleProduct = {
    id: '1',
    name: 'Headphones',
    price: 99.99,
    description: 'Wireless headphones',
    imageUrl: '/Headphones.svg',
    inStock: true
  };

  return (
    <div className="p-8">
      <UserProfileCard user={exampleUser} />
      <ProductDisplay product={exampleProduct} />
      <AlertBox type="success" message="Components working!" />
    </div>
  );
}

export default App;


