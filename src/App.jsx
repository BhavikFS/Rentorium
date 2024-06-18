import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
