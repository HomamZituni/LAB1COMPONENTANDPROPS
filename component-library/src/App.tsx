import './App.css';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { AlertBox } from './components/AlertBox/AlertBox';
import avatar from './assets/Avatar.svg';
import headphones from './assets/Headphones.svg';


function App() {
  const exampleUser = {
    id: '1',
    name: 'Homam Zituni',
    email: 'homam@example.com',
    role: 'Developer',
    avatarUrl: avatar
  };


  const exampleProduct = {
    id: '1',
    name: 'Headphones',
    price: 99.99,
    description: 'Wireless headphones',
    imageUrl: headphones,
    inStock: true
  };


  return (
    <div className="app-container">
      <UserProfileCard user={exampleUser} />
      <ProductDisplay product={exampleProduct} />
      <AlertBox type="success" message="Components working!" />
    </div>
  );
}


export default App;

