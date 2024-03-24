import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home";
import Registration from "./pages/registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <Homepage />
    </div>
  );
}

export default App;
