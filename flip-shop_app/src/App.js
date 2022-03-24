import "./App.css";
import { LandingPage, Cart, Wishlist, ProductWithFilter } from  './pages/index'
import { Navbar, Footer } from './components/index'
import NavBar from "./components/navbar/navabar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductWithFilter/>
    </div>
  );
}

export default App;
