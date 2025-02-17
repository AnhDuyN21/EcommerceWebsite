import './App.css'
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './components/globalStyle/GlobalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/footer/Footer'

function App() {

  const men_banner = "/images/men-banner.png";
  const women_banner = "/images/women-banner.png";
  const kid_banner = "/images/kid-banner.png";

  return (
    <>
      <GlobalStyle>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStyle>
    </>
  )
}

export default App
