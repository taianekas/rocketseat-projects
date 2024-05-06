import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Checkout } from './Checkout'
import { Sucess } from './Sucess'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Testes } from './testes'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/testes" element={<Testes />} />
        <Route path="/success" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
