import { Routes, Route } from 'react-router-dom'
import './App.css';
import './styles/global.css'
import Products from './views/Products';
import OneProduct from './views/OneProduct';
import Checkout from './views/Checkout';
import { StateContext } from './context/StateContext'
import '@stripe/stripe-js'
import CheckoutSucess from './views/CheckoutSucess';


function App() {
  return (
    <div className="App">
      <StateContext>
          <Routes>
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/:cat' element={<Products/>}/>
              <Route path='/product/:id' element={<OneProduct/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/checkout/success' element={<CheckoutSucess/>}/>
              
          </Routes>
      </StateContext>
    </div>
  );
}

export default App;
