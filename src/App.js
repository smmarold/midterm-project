import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('home-page');
  };

  const navToProducts = () => {
    navigate('product-page');
  };

  return (
  <>
   <div className='nav-bar'>
     <button onClick={() => navToHome()} className="button">Home</button>
     <button onClick={() => navToProducts()} className="button">Products</button>
   </div>
   <Outlet />
   </>
  );
}

export default App;
