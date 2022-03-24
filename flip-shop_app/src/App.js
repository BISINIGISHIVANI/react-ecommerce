import "./App.css";
import { LandingPage, Cart, Wishlist, ProductWithFilter } from  './pages/index'
import { Navbar, Footer } from './components/index'
import NavBar from "./components/navbar/navabar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
