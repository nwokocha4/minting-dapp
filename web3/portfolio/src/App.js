import './App.css';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./component/PAGES/Home";
import { Tech } from "./component/PAGES/Tech";
import { Product } from "./component/PAGES/Product";
import { ConnectWallet } from "./component/PAGES/ConnectWallet";
import { Blog } from "./component/PAGES/Blog";
import  Footer from './component/footer';




function App() {

  
  return (
   <>
   <Router>
    <Navbar/>
   <div className="pages">
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  path="/works" element={<Tech />} />
    <Route  path="/about" element={<Product/>} />
    <Route  path="/contact" element={<ConnectWallet />} />
    <Route  path="/blog" element={<Blog />} />
    </Routes>
    </div>
    </Router>
<Footer/>
   </>
   
  );
}

export default App;
