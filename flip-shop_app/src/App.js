import "./App.css";
import { Navbar, Footer } from './components/index';
import {PublicRoute} from "./routes/public-routes/public-route"
function App() {
  return (
    <div className="App">
      <Navbar />
      <PublicRoute/>
      <Footer />
    </div>
  );
}

export default App;
