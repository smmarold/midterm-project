import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import Products from './Products';
import Home from './Home';
import ProductDetails from './ProductDetails';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path="home-page" element={<Home />} />
              <Route path="product-page" element={<Products />}/>
                <Route path=":productId" element={<ProductDetails />} /> 
              <Route path="*" element={<p>Route Not Found</p>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
