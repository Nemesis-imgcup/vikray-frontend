import { Route, Routes } from "react-router-dom";
import { InternalServerError, PageNotFound } from "./components/Error";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ise" element={<InternalServerError/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
