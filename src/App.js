import "./App.css";
import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Navbar from './components/Navbar/Navbar'
import Products from "./components/Products/Products"
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      {
        // Code here
       
      }
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/*" element={<Products />}>
        <Route path="products" element={<Product />}/>
      </Route>
    </Routes>
   
    </div>
  );
}

export default App;
