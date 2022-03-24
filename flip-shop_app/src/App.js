import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Loginpage, ForgotPage, SignupPage } from './pages/authentication/index';
import { LandingPage, Cart, Wishlist, ProductWithFilter } from  './pages/index';
import { Navbar, Footer } from './components/index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductWithFilter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
