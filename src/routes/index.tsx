import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
