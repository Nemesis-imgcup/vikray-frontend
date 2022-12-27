import { Route, Routes } from "react-router-dom";
import { InternalServerError, PageNotFound } from "./components/Error";
import Home from "./components/home/Home";
import { Product } from "./components/product";
import Shopbrowse from './components/shop/shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shopbrowse/>} />
      <Route path="/ise" element={<InternalServerError/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
