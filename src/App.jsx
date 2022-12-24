import { Route, Routes } from "react-router-dom";
import { InternalServerError, PageNotFound } from "./components/Error";
import Home from "./components/home/Home";
import TestAr from "./components/TestAr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ise" element={<InternalServerError/>} />
      <Route path="/arTest" element={<TestAr/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
