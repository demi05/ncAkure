import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Applayout from "./Applayout";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Applayout />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
