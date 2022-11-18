import { Routes, Route } from 'react-router-dom'
import './App.css';
import './styles/global.css'
import Products from './views/Products';
import OneProduct from './views/OneProduct';
import Checkout from './views/Checkout';
import { StateContext } from './context/StateContext'
// import '@stripe/stripe-js'

function App() {
  return (
    <div className="App">
      <StateContext>
          <Routes>
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/:cat' element={<Products/>}/>
              <Route path='/product/:id' element={<OneProduct/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </StateContext>
    </div>
  );
}

export default App;
