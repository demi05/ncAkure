import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Applayout from "./Applayout";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Applayout />} />
        <Route path="signup" element={<Signup />} />
        <Route path="registration-complete" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
